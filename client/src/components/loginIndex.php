
<!-- HTML registration form here -->
<h2>Account Registration Form</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  Username: <input type="text" name="username">
  <br><br>
  Password (Password must be alphabetical only): <input type="text" name="password">
  <br><br>  
</form>