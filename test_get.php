<?php
session_start();
if(!isset($_SESSION['id'])) {
	header('Location: http://1gbfiz.ru');
    // можно добавить ошибку параметром
    // например
    // header('Location: http://1gbfiz.ru?unauthorized=true');
	exit;
}
header('Content-Type: text/html; charset=utf-8');
//header('Content-type: application/json');

include_once('func.php');

$yuo=$_SESSION['login'];

$num_tema = $_POST['tema'];
$klass=$_POST['klass'];
$sql_num=$_POST['sql_num'];
$predmet=$_POST['predmet'];
$result = array();

switch($sql_num) {
case 1:				// это тренировочные тесты
$query="SELECT identic.Дубликат FROM identic WHERE identic.name = '".$yuo."'";
$field="Дубликат";
$dublikat=value_fld($query,$field);
$dublikat=0;		// в тренировочном тесте вариант всегда=0
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
	case 2:				// это зачетные тесты, надо поменять только файл задач!!!
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
	$result["error"] = "Нет параметра";
	print json_encode($result);
	exit;
}
$rows = array();
$rec = array();
//$sqlResult = mysql_query($query);
//while($r = mysql_fetch_assoc($sqlResult)) {
 //   $rows['task'][] = $r;
//}
//$result["data"] = $rows;
//echo json_encode($result);
//print json_encode($result);
//exit;
$dim_my_tbl=parc_tbl($query);			// это обязательно, сама функция находится func.php
if($dim_my_tbl){
//  весь код
$keys = array_keys($dim_my_tbl[0]);  
//echo isset($keys)."Массив";
//exit;
$name_fld="";
$value_fld="";
$i=0;
foreach ($dim_my_tbl as $rez_col){
//       $rec["record"][]= $i;
		foreach ($rez_col as $Value){
		$rows["fld"][]=$Value; 		
		$value_fld=$value_fld.$Value."#";
	}
	 	$rec["record"][]=$rows;
//	$rec["record"][]
		$value_fld=$value_fld.";"; 
//$i=$i+1;		
}
$result["data"] = $rec;
//$result["data"] = $rows;
if ($_SESSION['id']==26) {
print json_encode($result,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);  // тогда здесь строка JSON
//header('Content-type: application/json');
//print $rezult;
} else {
//echo $name_fld.$value_fld;
echo $value_fld;
}
} else {
 echo "Тест недоступен";				//$result_vipoverrides = mysql_query ("INSERT INTO vip_overrides (`user_id`,
 exit;										//`server_id`, `group`, `expires`) VALUES ('".$chek['user_id']."', '$servid', '$typebp', '$timebp')");
}