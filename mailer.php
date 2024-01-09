<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name    = $_POST["name"];
    $phone  = $_POST["phone"];
    $message = $_POST["message"];
    $body = "Name: $name\nPhone: $phone\nMessage: $message";


    // Compose the email message
    $subject = 'SRD Cargo Lead Form';
    $to      = 'kannasivamps@gmail.com'; // Replace with your support email address
    $headers = "From: $name <$to>";

    // Add CC recipients
    $cc = 'kannasivamps@gmail.com'; // Replace with the CC email address
    $headers .= "\r\nCc: $cc";

    // Send the email
    if (@mail($to, $subject, $body, $headers)) {
        $output = json_encode(array('success' => true));
        echo "<script>window.location= 'thank-you.php'</script>";
    } else {
        $output = json_encode(array('success' => false));
        die($output);
    }
}
?>