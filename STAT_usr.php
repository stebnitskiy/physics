<?php
header('Content-Type: text/html; charset=utf-8');
include_once('func.php');
session_start();
if(isset($_SESSION['login'])) { 
//echo "Yes"; 
}
else { 
//session_destroy();
echo "Войдите заново на сайт:"."<a href='http://1gbfiz.ru'>Вход/Регистрация</a>";
exit;
}
#{
#                    Предмет:global_predmet,
#					 Класс:global_klass,
#					 Тема:global_tema,
#					 Почта:posta,
#					 RezultatUsrVoprosi }; // Это заголовок теста ученика + ответы на вопросы

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str);   // получили  объект
$json_obj->Почта=$_SESSION['login'];  // заполнили почту

//$rez=mail('a.stebnitskiy@1gbfiz.ru', 'My Subject', 'Line 1\nLine 2\nLine 3');
$headers=header('Content-type: text/html; charset=windows-1251 \r\n');
	$to  = "<a.stebnitskiy@1gbfiz.ru>, " ; 
	//$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
	$subject = "ТЕСТ:".$json_obj->Почта; 
	$subject=iconv("utf8", "windows-1251", $subject);
	//$message = '<p>Текст3 добавил перевод строки письма10</p><b>1-строчка </b></br><i>2-строчка \r\n </i></br>';
	$message = $json_str;
	//echo $message;
	$message=iconv("utf8", "windows-1251", $message);
	$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
	$headers .= "From: 1gbfiz.ru <a.stebnitskiy@1gbfiz.ru>\r\n"; 
	$headers .= "Reply-To: reply-to@example.com\r\n"; 
	$headers=iconv("utf8", "windows-1251", $headers);
	$rez=mail($to, $subject, $message , $headers); 
	echo $rez;
//json_decode — Декодирует строку JSON (из строки json-формата получает данные)
//json_encode — Возвращает JSON-представление данных (преобразует данные в json-строку)
# Получить JSON как строку
//$json_str = file_get_contents('php://input');
# Получить объект
//$json_obj = json_decode($json_str);

//$json_str = file_get_contents('php://input');
//$json_obj = json_decode($json_str);
//echo json_encode($json_str, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
//echo json_encode($json_str, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
//echo $json_str;
//$json_obj->Почта=$_SESSION['login'];
//echo $json_obj->Почта;
exit;

?>
