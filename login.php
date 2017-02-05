<?php
if(isset($_POST['submit'])){
	$username = $_POST['username'];
	$password = $_POST['password'];
	echo $username;
	echo $password;
}



?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
<title>Document</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
<div class="container">
	<div class = "col-xs-6">
		<form action="" method="POST">
			<div class="form-group">
			<label for="username">Username</label>
			<input type = "text" name="username" class = "form-control">
			</div>
			<div class="form-group">
			<label for="password">Password</label>
			<input type = "password" name="password" class = "form-control">
			<input class="btn btn-primary" type="submit" name ="submit" value="Submit">
			</div>

</body>
</html>