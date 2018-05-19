<?
include 'init.php';

if (isset($_POST['name'], $_POST['mail'])) {

    $name = mysql_real_escape_string(htmlentities($_POST['name']));
    $mail = mysql_real_escape_string(htmlentities($_POST['mail']));

    $update = mysql_query("UPDATE `users` SET `user_name`='$name', `user_email`='$mail' WHERE `user_id`=".$_SESSION['user_id']);

    if ($update === true) {
        echo 'ok';
    } else if ($update === false) {
        echo 'no';
    } else {
        echo 'asda';
    }

}


?>