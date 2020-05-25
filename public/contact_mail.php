<?php
    $toEmail = "szechla22@gmail.com";
    $visitor_email = $_POST["userEmail"];
    $mailHeaders = "From: " . $_POST["userName"] . "<" . "formularz@wykonczenie-wnetrz.gda.pl" . ">\r\n" ;
    $mailHeaders .= "Reply-To: $visitor_email";
    if(mail($toEmail, $_POST["subject"], $_POST["content"], $mailHeaders)) {
        print "<p class='bg-success text-light success'>Wiadomość została wysłana.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>