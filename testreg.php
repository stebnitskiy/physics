<?php
include_once('func.php');// файл bd.php должен быть в той же папке, что и все остальные, если это не так, то просто измените путь
//http://www.cyberforum.ru/php-beginners/thread261903.html 
header("Content-Type: text/html; charset=utf-8");   // это точно надо для вывода данных из базы в UTF-8
 session_start();//  вся процедура работает на сессиях. Именно в ней хранятся данные  пользователя, пока он находится на сайте. Очень важно запустить их в  самом начале странички!!!
if (isset($_POST['login'])) { $login = $_POST['login']; if ($login == '') { unset($login);} } //заносим введенный пользователем логин в переменную $login, если он пустой, то уничтожаем переменную
    if (isset($_POST['password'])) { $password=$_POST['password']; if ($password =='') { unset($password);} }
    //заносим введенный пользователем пароль в переменную $password, если он пустой, то уничтожаем переменную
if (empty($login) or empty($password)) //если пользователь не ввел логин или пароль, то выдаем ошибку и останавливаем скрипт
    {
    exit ("Вы ввели не всю информацию, вернитесь назад и заполните все поля!");
    }
    //если логин и пароль введены,то обрабатываем их, чтобы теги и скрипты не работали, мало ли что люди могут ввести
    $login = htmlspecialchars($login);
	$login = stripslashes($login);
	$login = strip_tags($login);
//echo 'имя'.':' . $login ;
    $password = stripslashes($password);
    $password = htmlspecialchars($password);
	$password = strip_tags($password);
//echo 'пароль'.':' .$password ;
//удаляем лишние пробелы
    $login = trim($login);
    $password = trim($password);
$psw='';
$query="SELECT * FROM identic WHERE name='$login'";
//подключаемся к базе
$dim_my=array();
$dim_my=parc_tbl($query);  // массив
//echo count($dim_tbl);
//echo $dim_tbl[0]["name"];
$psw=$dim_my[0]["psw"];
$num_rows=sizeof($dim_my);
//echo $psw;
//echo sizeof($dim_my);
 if (($num_rows) == 1) {
  
  if (empty($psw))
    {
    //если пользователя с введенным логином не существует
	exit;
   //exit ("Извините, введённый вами login или пароль неверный.");
    }
      else {
    //если существует, то сверяем пароли
 
		if ($psw==$password) {
    //если пароли совпадают, то запускаем пользователю сессию! Можете его поздравить, он вошел!
		$_SESSION['login']=$dim_my[0]["name"];
		$_SESSION['id']=$dim_my[0]["id"];//эти данные очень часто используются, вот их и будет "носить с собой" вошедший пользователь
		echo "Вы успешно вошли на сайт как ".$_SESSION['login']." <a href='./js_php.php'>Главная страница</a>";
 
	}
	else {
    //если пароли не сошлись
	exit;
 
//	     exit ("Извините, введённый вами login или пароль неверный.");
		}
	}
 }
 else {
	 
	 exit ;
	// exit ("Извините, введённый вами login неверный.");
 }
 ?>