<?php
	$to      = 'amador.sean@gmail.com';
	$subject = 'Inquiry from our website | Sean Michael Amador';
	$message = "";
	$message .= "Name: ".$_POST['name']." \n";
	$message .= "Email: ".$_POST['email']." \n";
	$message .= "Contact: ".$_POST['contact']." \n";

	$headers = 'From: '.$_POST['email'] . "\r\n" .
		'X-Mailer: PHP/' . phpversion();

	if(mail($to, $subject, $message, $headers)){
		echo true;
	}else{
		echo false;
	}
?>