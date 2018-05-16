<?

    if (isset($_POST['string'], $_POST['name'])) {
        $name = $_POST['name'];
        $string = $_POST['string'];

        echo $name.' says ' . $string;

    }


?>