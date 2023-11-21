<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate and sanitize the data if needed

    // Store the data in a text file
    $data = "Name: $name\nEmail: $email\nMessage: $message\n\n";
    file_put_contents("contact_data.txt", $data, FILE_APPEND);

    // You can also send an email with the form data
    $to = "your@example.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
}
?>
