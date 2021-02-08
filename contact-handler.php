<?php

    if(isset($_POST["submit-btn"])) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message1 = $_POST["message"];
        $message2 = $_POST["message2"];

        $to = "deluxelifepro@gmail.com";
        $subject = "Form Submission";
        $message = "Name: ".$name. "/r/n". "Phone: ".$phone. "/r/n". "Kitöl kapta ezt az email címet: ".$message1. "/r/n". "Üzenet: ".$message2;
        $headers = "From: ".$email;

        if(mail($to, $subject, $message, $headers)) {
            echo "<h1>Sent Successfully! Thank You."." ".$name. ", We will contact you shortly!</h1>";
        }
        else{
            echo "Something went wrong";
        }
    }




?>