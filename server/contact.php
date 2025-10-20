<?php
// Enable CORS (Cross-Origin Resource Sharing)
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Enable PHP error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Include PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include the Composer autoloader and database configuration
require_once 'vendor/autoload.php';
include 'config.php';

// Decode the JSON data sent from the frontend
$data = json_decode(file_get_contents('php://input'), true);

// Check if all required fields are filled
if (!empty($data['name']) && !empty($data['email']) && !empty($data['subject']) && !empty($data['message'])) {
    try {
        // Sanitize form data
        $name = htmlspecialchars(trim($data['name']));
        $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
        $subject = htmlspecialchars(trim($data['subject']));
        $message = htmlspecialchars(trim($data['message']));

        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(array("success" => false, "message" => "Please enter a valid email address."));
            exit;
        }

        // Validate message length
        if (strlen($message) > 1000) {
            echo json_encode(array("success" => false, "message" => "Message must be less than 1000 characters."));
            exit;
        }

        // Store contact in the database first
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Insert contact into the contacts table
        $stmt = $pdo->prepare("INSERT INTO contacts (name, email, subject, message, created_at) VALUES (:name, :email, :subject, :message, NOW())");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':subject', $subject);
        $stmt->bindParam(':message', $message);

        if ($stmt->execute()) {
            $contactId = $pdo->lastInsertId();

            // Now send email
            $mail = new PHPMailer(true);

            // Server settings
            $mail->isSMTP();
            $mail->Host = 'mail.buakassociation.org';
            $mail->SMTPAuth = true;
            $mail->Username = 'info@buakassociation.org';
            $mail->Password = '@np5uT68eYJ[Lrer';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );

            // Recipients
            $mail->setFrom('info@buakassociation.org', 'BUAK Association');
            $mail->addAddress('info@buakassociation.org', 'BUAK Association');
            $mail->addReplyTo($email, $name);

            // Content
            $mail->isHTML(true);
            $mail->Subject = "New Contact Form: " . $subject;

            // Construct the message body
            $emailMessage = "
            <h2>New Contact Form Submission</h2>
            <p><strong>Contact ID:</strong> #{$contactId}</p>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Subject:</strong> {$subject}</p>
            <p><strong>Message:</strong></p>
            <div style='background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 10px 0;'>
                {$message}
            </div>
            <p><strong>Submitted:</strong> " . date('Y-m-d H:i:s') . "</p>
            ";

            $mail->Body = $emailMessage;

            // Alternative plain text version
            $mail->AltBody = "New Contact Form Submission\n\nName: {$name}\nEmail: {$email}\nSubject: {$subject}\nMessage: {$message}\nSubmitted: " . date('Y-m-d H:i:s');

            // Send email
            if ($mail->send()) {
                echo json_encode(array(
                    "success" => true,
                    "message" => "Thank you for your message! We'll get back to you within 48 hours.",
                    "contactId" => $contactId
                ));
            } else {
                // Email failed but contact was saved
                echo json_encode(array(
                    "success" => true,
                    "message" => "Thank you for your message! We've received it and will get back to you soon.",
                    "contactId" => $contactId,
                    "emailSent" => false
                ));
            }
        } else {
            $errorInfo = $stmt->errorInfo();
            $errorMessage = $errorInfo[2];
            echo json_encode(array("success" => false, "message" => "Database error: " . $errorMessage));
        }
    } catch (Exception $e) {
        echo json_encode(array("success" => false, "message" => "Error: " . $e->getMessage()));
    }
} else {
    // Return specific error messages
    $missingFields = [];
    if (empty($data['name']))
        $missingFields[] = "name";
    if (empty($data['email']))
        $missingFields[] = "email";
    if (empty($data['subject']))
        $missingFields[] = "subject";
    if (empty($data['message']))
        $missingFields[] = "message";

    echo json_encode(array(
        "success" => false,
        "message" => "Please fill in all required fields.",
        "missingFields" => $missingFields
    ));
}
?>