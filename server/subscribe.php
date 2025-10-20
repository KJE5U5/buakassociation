
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

// Check if email is provided
if (!empty($data['email'])) {
    try {
        // Sanitize and validate email
        $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
            exit;
        }

        // Store subscriber in the database
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Check if email already exists
        $stmt = $pdo->prepare('SELECT id FROM subscribers WHERE email = :email');
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        
        if ($stmt->fetch()) {
            echo json_encode(['success' => false, 'message' => 'Email already subscribed.']);
            exit;
        }

        // Insert new subscriber
        $stmt = $pdo->prepare('INSERT INTO contacts (email, created_at) VALUES (:email, NOW())');
        $stmt->bindParam(':email', $email);
        
        if ($stmt->execute()) {
            $subscriberId = $pdo->lastInsertId();

            // Send confirmation email
            $mail = new PHPMailer(true);

            // Server settings
            $mail->isSMTP();
            $mail->Host = 'mail.buakassociation.org';
            $mail->SMTPAuth = true;
            $mail->Username = 'info@buakassociation.org';
            $mail->Password = '@np5uT68eYJ[Lrer';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;
            $mail->SMTPOptions = [
                'ssl' => [
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                ]
            ];

            // Recipients
            $mail->setFrom('info@buakassociation.org', 'BUAK Association');
            $mail->addAddress($email);
            $mail->addReplyTo('info@buakassociation.org', 'BUAK Association');

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'Welcome to BUAK Newsletter';
            $mail->Body = "
                <h2>Welcome to BUAK's Newsletter</h2>
                <p>Thank you for subscribing! You'll receive updates about our bio-energy initiatives in Kyangwali.</p>
                <p><strong>Subscriber ID:</strong> #{$subscriberId}</p>
                <p><strong>Email:</strong> {$email}</p>
                <p><strong>Subscribed:</strong> " . date('Y-m-d H:i:s') . "</p>
                <p>If you did not subscribe, please contact us at info@buakassociation.org.</p>
            ";
            $mail->AltBody = "Welcome to BUAK's Newsletter\n\nThank you for subscribing! You'll receive updates about our bio-energy initiatives in Kyangwali.\nSubscriber ID: #{$subscriberId}\nEmail: {$email}\nSubscribed: " . date('Y-m-d H:i:s') . "\nIf you did not subscribe, please contact us at info@buakassociation.org.";

            // Send email
            if ($mail->send()) {
                echo json_encode([
                    'success' => true,
                    'message' => 'Thank you for subscribing! Check your inbox for a confirmation.',
                    'subscriberId' => $subscriberId
                ]);
            } else {
                // Email failed but subscription was saved
                echo json_encode([
                    'success' => true,
                    'message' => 'Subscribed successfully, but confirmation email failed to send.',
                    'subscriberId' => $subscriberId,
                    'emailSent' => false
                ]);
            }
        } else {
            $errorInfo = $stmt->errorInfo();
            echo json_encode(['success' => false, 'message' => 'Database error: ' . $errorInfo[2]]);
        }
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Please provide an email address.']);
}
?>
