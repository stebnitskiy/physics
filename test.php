<head><title>Тест</title>
<meta charset="utf-8">
<style>


</style>
</head>
<body>
<script src="./js/test.js"></script>
<?php
header('Content-Type: text/html; charset=utf-8');
// Назначение: генерация html страницы теста
// на входе login, сложность выбранная учеником (все вопросы или по одному), если по одному, то порядковый номер вопроса?
// порядковый номер нужен для того, что бы по одному вопросу на экран, так как это усложняет задачу и при этом максимальная оценка 5..
// возможно надо будет предусмотреть все вопросы сразу...., при этом максимальная оценка 3 или 4
// структура запроса: login, режим, номер вопроса
// Номер вопроса 0 - это значит выдаем ТЕМУ теста  (нужна отдельная таблица тем)
include_once('func.php');
// номер вопроса если 0, то выдаем тему
// будет параметр: 
session_start();
if(isset($_SESSION['id'])) { 
//echo "Yes"; 
}
else { 
//session_destroy();
echo "Войдите заново на сайт:"."<a href='http://1gbfiz.ru'>Вход/Регистрация</a>";
exit;
}
$yuo=$_SESSION['login'];

$num_tema = $_POST['num_tema'];
$klass=$_POST['klass'];
$sql_num=$_POST['sql_num'];
$predmet=$_POST['predmet'];

$query = "SELECT
  s_темы.Наименование
  FROM s_разделы
  INNER JOIN s_темы
    ON s_разделы.Раздел = s_темы.Раздел
    AND s_разделы.Класс = s_темы.Класс
    AND s_разделы.Предмет = s_темы.Предмет
  WHERE s_темы.Класс = ".$klass."
  AND s_темы.Предмет = ".$predmet."
  AND s_темы.Тема = '".$num_tema."' 
  AND s_темы.Кому = 'Всем' 
  AND s_темы.Разрешение = 1";
 
		

//echo $query;
$tema=value_fld($query,'Наименование');    // получили ТЕМУ
$vzv=div_tema($tema); 
exit;
function div_tema($tema){       // формируем только тему
	echo "<div style='margin-left: auto;margin-right: auto;width: 1000px;text-align:center'>";
    echo "<p class='zagolovok_test'> Тема : <br><span class='zagolovok_test' id='tema'>".$tema."</span></p>";
	echo "</div>";
    echo "<div id='id_test' style='margin-left: auto;margin-right: auto;width: 990px;text-align:center'>";
    echo "<div style='height: 100px'><button class='inline' id='slojn_tst'  onclick=slojn();>Тесты для контроля</button>";
//	echo "<div style='height: 50px'><button class='inline' id='start_tst'  onclick=start();>Тесты для обучения</button></div>";
	echo "<button class='inline' id='start_tst'  onclick=start();>Тесты для обучения</button></div>";
	echo "</div>";
	echo "<div id='rezultat'></div>";
 }
//echo "<div style='margin-left: auto;margin-right: auto;width: 600px;text-align:center'>";
?>
