<?php
// формирует ответы на запросы. Запосов 2:
// 1 - запрос на login
// 2 - запрос  теста на полученный login(имена файлов, ответы)
header('Content-Type: text/html; charset=utf-8');
// Назначение: генерация html страницы теста
// на входе login, сложность выбранная учеником (все вопросы или по одному), если по одному, то порядковый номер вопроса?
// порядковый номер нужен для того, что бы по одному вопросу на экран, так как это усложняет задачу и при этом максимальная оценка 5..
// возможно надо будет предусмотреть все вопросы сразу...., при этом максимальная оценка 3 или 4
// структура запроса: login, режим, номер вопроса
// Номер вопроса 0 - это значит выдаем ТЕМУ теста  (нужна отдельная таблица тем)
include_once('func.php');


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

$num_tema = $_POST['tema'];
$klass=$_POST['klass'];
$sql_num=$_POST['sql_num'];
$predmet=$_POST['predmet'];

switch($sql_num) {
 case 1:
  //echo "0805030010100/в;0805030020100,а;0805030030100/в;0805030040100,б;0805030050100/б";
//  exit;
// надо получить значение Дубликат по login  value_fld($zpr,$field) - это функия
    $query="SELECT identic.Дубликат FROM identic WHERE identic.name = '".$yuo."'";
	$field="Дубликат";
    $dublikat=value_fld($query,$field);
	
	$query="SELECT
	s_задачи.Файл,
	s_задачи.Ответ,
	s_задачи.Балл,
	s_задачи.Способ, 
	s_задачи.Текст
    FROM s_темы
  INNER JOIN s_задачи
    ON s_темы.Класс = s_задачи.Класс
    AND s_темы.Предмет = s_задачи.Предмет
    AND s_темы.Тема = s_задачи.Тема
  WHERE s_темы.Предмет = ".$predmet."
  AND s_темы.Класс = ".$klass." 
  AND s_темы.Тема = '".$num_tema."'
  AND s_темы.Разрешение = 1  
  AND s_задачи.Дубликат = ".$dublikat."
  ORDER BY s_задачи.задача" ;
//  ORDER BY s_темы.Раздел, s_темы.Тема"
  
// 	AND s_темы.Дубликат = s_задачи.Дубликат

 // AND s_темы.Кому = 'Всем' 
//  FROM s_темы
 // INNER JOIN s_задачи
//    ON s_темы.Класс = s_задачи.Класс
//    AND s_темы.Предмет = s_задачи.Предмет
//    AND s_темы.Тема = s_задачи.Тема
//WHERE s_темы.Тема = '6.4'
//AND s_темы.Разрешение = 1
//AND s_задачи.Дубликат = 1
//AND s_темы.Класс = 2
//AND s_темы.Предмет = 1
  
                                           // потом для индивидуальной работы надо 
											//будет организовать логику проверки поля Кому на наличие в этом поле name	

 // echo $query;
//  exit;
	break;
 case 1:
    break;
 default:
 echo "Нет параметра";
 
 exit;
 break;
} 
$dim_my_tbl=parc_tbl($query);  // массив
$keys = array_keys($dim_my_tbl[0]);   // получили наименование колонок
// будем возвращать имена полей: "имя1/имя2/имя3/"   три поля , две записи
// записи                      : "12/2/1/;23/2/2/;"
//echo "<table>";
$name_fld="";
$value_fld="";
foreach ($keys as $title) {
//		$name_fld=$name_fld.$title."/";
}		
foreach ($dim_my_tbl as $rez_col){
        foreach ($rez_col as $Value){
 		  $value_fld=$value_fld.$Value."#";
        }
		$value_fld=$value_fld.";";    // это конец записис
}
echo $name_fld.$value_fld;
exit;

function div_tema($tema){       // формируем только тему
	echo "<div style='margin-left: auto;margin-right: auto;width: 1000px;text-align:center'>";
    echo "<p >Тест. Тема - <span id='tema'>".$tema."</span></p>";
	echo "</div>";
    echo "<div id='id_test' style='margin-left: auto;margin-right: auto;width: 990px;text-align:center'>";
    echo "<div style='height: 100px'><button id='slojn_tst'  onclick=slojn();>Выводятся все вопросы теста. Нет дополнительных баллов за выполнение теста. Изменить? </button></div>";
	echo "<div style='height: 50px'><button id='start_tst'  onclick=start();>Начало тестирования </button></div>";
	echo "</div>";
	
}
?>
