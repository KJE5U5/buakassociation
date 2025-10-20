<?php
 // Database configuration
class Config {
// Database credentials
const DB_HOST = 'localhost';
const DB_NAME = 'buakasso_buakasso';
const DB_USER = 'buakasso';
const DB_PASS = '7qY5;7bZ(E0oQm';
const DB_CHARSET = 'utf8mb4';

}
// Create database connection
try {
$dsn = "mysql:host=" . Config::DB_HOST . ";dbname=" . Config::DB_NAME . ";charset=" . Config::DB_CHARSET;
$pdo = new PDO($dsn, Config::DB_USER, Config::DB_PASS);

// Set PDO attributes
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

// Test connection
$pdo->query("SELECT 1");

} catch (PDOException $e) {
// Log error and return JSON response
error_log("Database connection failed: " . $e->getMessage());
http_response_code(500);
echo json_encode([
"success" => false,
"message" => "Database connection failed. Please try again later."
]);
exit;
}