<?php

require_once "config.php";


$username = $_POST['username'];
$password = $_POST['password'];

// Logic here 
if ($username === 'admin' && $password === 'password') {
    echo 'Login successful!';
} elseif ($username === 'SELECT username FROM users' && $password === 'SELECT pword FROM users') {
    echo 'Login successful!';
} else {
echo 'Invalid credentials. Please try again.';
}

?>