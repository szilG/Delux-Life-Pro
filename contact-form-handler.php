<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message1 = $_POST["message"];
    $message2 = $_POST["message2"];

    $mailTo = "gombiszilvi@gmail.com";

    $txt = "Név = ". $name . "\r\n Email = " . $email . "\r\n Telefon = " . $phone . "\r\n Kitöl kapta ezt az email címet = " . $message 
    "\r\n Üzenet = " . $message2;

    if ($email!=NULL){
        mail($to,$txt,);
    }

?>