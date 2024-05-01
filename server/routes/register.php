<?php

require_once "config.php";

$username = $pword = "";
$username_err = $pword_err = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate username (check if it's unique, not empty, etc.)
    $username = vent_input($_POST["username"]);
    $pword = vent_input($_POST["password"]);

    function vent_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }

    // Insert user data into the database
    $sqldb = "INSERT INTO users (username, pword) VALUES (?, ?)";
    if ($stmt = mysqli_prepare($link, $sqldb)) {
        mysqli_stmt_bind_param($stmt, "ss", $username, $pword);
        if (mysqli_stmt_execute($stmt)) {
            // Redirect to login page or display a success message
            echo "Your account has been successfully made";
        } else {
            echo "Error: " . mysqli_error($link);
        }
        mysqli_stmt_close($stmt);
    }
}
?>