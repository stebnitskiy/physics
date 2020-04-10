<!DOCTYPE html>
<?php
    //  вся процедура работает на сессиях. Именно в ней хранятся данные  пользователя, пока он находится на сайте. Очень важно запустить их в  самом начале странички!!!
  session_start();
//	echo $session_id();  не работает 
?>
    <html xml:lang="ru" lang="ru">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" lang="ru"/>
    <head>
    <title>Школа/Физика</title>
    </head>
    <body>
    <h2>Школа/Физика</h2>
    <form action="/usr/testreg.php" method="post">
 
    <!--****  testreg.php - это адрес обработчика. То есть, после нажатия на кнопку  "Войти", данные из полей отправятся на страничку testreg.php методом  "post" ***** -->
 <p>
    <label>Ваш e-mail:<br></label>
    <input name="login" type="text" size="40" maxlength="40">
    </p>
 
 
    <!--**** В текстовое поле (name="login" type="text") пользователь вводит свой логин ***** -->
 
    <p>
 
    <label>Ваш пароль:<br></label>
    <input name="password" type="password" size="40" maxlength="40">
    </p>
 
    <!--**** В поле для паролей (name="password" type="password") пользователь вводит свой пароль ***** -->
 
    <p>
    <input type="submit" name="submit" value="Войти">
    <input type="button" name="button" value="Регистрация" onClick="window.location='http://1gbfiz.ru/usr/reg.php'">
    <!--**** Кнопочка (type="submit") отправляет данные на страничку testreg.php ***** -->
<br>
 <!--**** ссылка на регистрацию, ведь как-то же должны гости туда попадать ***** -->
<!--<a href="reg.php">Зарегистрироваться</a> -->
    </p></form>
    <br>
    <?php
    // Проверяем, пусты ли переменные логина и id пользователя
    if (empty($_SESSION['login']) or empty($_SESSION['id']))
    {
    // Если пусты, то мы не выводим ссылку
    //echo "Вы вошли на сайт, как гость<br><a href='http://1gbfiz-ru.1gb.ru'>Эта ссылка  доступна только зарегистрированным пользователям</a>";
    //  echo "Вы вошли на сайт, как гость";   
   }
    else
    {
 
    // Если не пусты, то мы выводим ссылку
    echo "Вы вошли на сайт, как ".$_SESSION['login']."<br><a  href='http://1gbfiz.ru/usr/js_php.php'>Эта ссылка доступна только  зарегистрированным пользователям</a>";
    }
    ?>
    </body>
    </html>