<?php
   header("Content-Type: text/html; charset=utf-8");   // это точно надо для вывода данных из базы в UTF-8   
   if (isset($_POST['login'])) { $login = $_POST['login']; if ($login == '') { unset($login);} } //заносим введенный пользователем логин в переменную $login, если он пустой, то уничтожаем переменную
    if (isset($_POST['password'])) { $password=$_POST['password']; if ($password =='') { unset($password);} }
    //заносим введенный пользователем пароль в переменную $password, если он пустой, то уничтожаем переменную
 if (empty($login) or empty($password)) //если пользователь не ввел логин или пароль, то выдаем ошибку и останавливаем скрипт
    {
    exit ("Вы ввели не всю информацию, вернитесь назад и заполните все поля!");
    }
    //если логин и пароль введены,то обрабатываем их, чтобы теги и скрипты не работали, мало ли что люди могут ввести
    $login = stripslashes($login);
    $login = htmlspecialchars($login);
 $password = stripslashes($password);
    $password = htmlspecialchars($password);
 //удаляем лишние пробелы
    $login = trim($login);
    $password = trim($password);
    $query="SELECT * FROM identic WHERE name='$login'";
	include ("bd.php");// файл bd.php должен быть в той же папке, что и все остальные, если это не так, то просто измените путь
 // подключаемся к базе
 // проверка на существование пользователя с таким же логином

if (!empty($dim_tbl[0]["name"])) {

    exit ("Извините, введённый вами e-mail уже зарегистрирован. Введите другой e-mail.");
    }
 // если такого нет, то отправляем почту и выводим сообщение, Ваша заявка на регистрацию принята. 
 //В течении 24 часов на почту, которую Вы указали при регистрации, будет отправлено письмо о подтверждении 
 // Вашей регистрации на сайте 1gbfiz.ru
 // 
 //   $result2 = mysql_query ("INSERT INTO users (login,password) VALUES('$login','$password')");
//     echo $num_rows;   // для отладки дает 0, так как записи с таким логином нет
    echo "Отправляем Заявку на Вашу регистрацию на доступ к сайту 1gbfiz.ru";
	$to  = "<a.stebnitskiy@1gbfiz.ru>, " ; 
	//$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
	$subject = "Почта:".$login.",ФИО:".$password; 
	$subject=iconv("utf8", "windows-1251", $subject);
	//$message = '<p>Текст3 добавил перевод строки письма10</p><b>1-строчка </b></br><i>2-строчка \r\n </i></br>';
	$message = '<p>РЕГИСТРАЦИЯ</p><b> ';
	//echo $message;
	$message=iconv("utf8", "windows-1251", $message);
	$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
	$headers .= "From: 1gbfiz.ru <a.stebnitskiy@1gbfiz.ru>\r\n"; 
	$headers .= "Reply-To: reply-to@example.com\r\n"; 
	$headers=iconv("utf8", "windows-1251", $headers);
	$rez=mail($to, $subject, $message , $headers); 
	if ($rez==1) {
		echo "<p>Заявка на регистрацию отправлена!</p>";
 // Вашей регистрации на сайте 1gbfiz.ru ";
	} else {echo "Заявка не отправлена! Повторите регистрацию."; exit;}
	
	 $query="INSERT INTO identic (name,fio) VALUES('$login','$password')";
	 include ("bd_query.php");
     
	// Проверяем, есть ли ошибки
    if ($result2=='TRUE')
    {
     echo "<p>Заява принята.</p><p>В течении 24 часов на почту, которую Вы указали,будет отправлено письмо о подтверждении Вашей регистрации</p>";
//    
 //   echo "Вы успешно зарегистрированы!";
//	$_SESSION['login']=$login;
//	echo "Вы вошли на сайт, как ".$_SESSION['login']."<br><a  href='http://1gbfiz.ru'>Эта ссылка доступна только  зарегистрированным пользователям</a>";

   }
 else {
    echo "Ошибка! Вы не зарегистрированы.";
    }
    ?>