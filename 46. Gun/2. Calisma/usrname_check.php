<?php

require 'db.php';

if (isset($_POST['username'])) {
    $username = mysql_real_escape_string($_POST['username']);

    if (!empty($username)) {
        $username_query = mysql_query("SELECT COUNT(`user_id`) FROM `users` WHERE `username`='$username'");
        $username_result = mysql_result($username_query, 0);

        if ($username_result == 0) {
            echo 'Available';
        } else if($username_result == 1) {
            echo 'Not available';
        } 
    }
}



?>