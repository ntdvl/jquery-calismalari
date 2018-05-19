<?

if (isset($_POST['email'])) {
    $email = $_POST['email'];
    if (!empty($email)) {
        if (filter_var($email, FILTER_VALIDATE_URL) === false) {
            echo 'Not valid email adress';
        } else {
            echo 'Valid email adress';
        }
    }
}


?>