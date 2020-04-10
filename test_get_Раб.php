<?php

header('Content-Type: text/html; charset=utf-8');

include_once('func.php');
session_start();
if(isset($_SESSION['id'])) { 
}
else { 
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

	break;
 default:
 echo "Нет параметра";
 
 exit;
 break;
} 
$dim_my_tbl=parc_tbl($query);  
$keys = array_keys($dim_my_tbl[0]);  

$name_fld="";
$value_fld="";
//foreach ($keys as $title) {

//}		
foreach ($dim_my_tbl as $rez_col){
        foreach ($rez_col as $Value){
 		  $value_fld=$value_fld.$Value."#";
        }
		$value_fld=$value_fld.";";   
}
//echo $name_fld.$value_fld;
print $name_fld.$value_fld;

?>
