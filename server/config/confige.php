<?php
define('db_server', 'localhost');
define('db_username', 'root_users');
define('db_password', '');
define('db_name', 'database_users');

$link = mysqli_connect(db_server, db_username, db_password, db_name);

if ($link === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>
