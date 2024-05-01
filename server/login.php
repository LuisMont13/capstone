<?php
$username = $_POST['username'];
$password = $_POST['password'];

// Finish logic here
if ($username === 'admin' && $password === 'password') {
    echo 'Login successful!';
} else {
    echo 'Invalid credentials. Please try again.';
}
?>
