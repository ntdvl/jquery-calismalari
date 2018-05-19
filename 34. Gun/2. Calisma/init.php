<?

session_start();
$_SESSION['user_id'] = 5;

mysql_connect('localhost', 'root', '');
mysql_select_db('jquery');

?>