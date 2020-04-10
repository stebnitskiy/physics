<?php
header('Content-Type: text/html; charset=utf-8');
Include_once('func.php');
session_start();
if(isset($_SESSION['login'])) { 
//echo "Yes"; 
}
else { 
//session_destroy();
echo "Войдите заново на сайт:"."<a href='http://1gbfiz.ru'>Вход/Регистрация</a>";
exit;
}
$yuo=$_SESSION['login'];
$sql_num= $_POST['sql_num'];
$predmet = $_POST['predmet'];
$klass=$_POST['klass'];
switch($sql_num) {
 case 1:
	
	$query="SELECT
	s_класс.Наименование,
	s_класс.Класс
	FROM s_предмет s_предмет
	LEFT OUTER JOIN s_класс s_класс
    ON s_предмет.Предмет = s_класс.Предмет
	WHERE s_предмет.Предмет = ".$predmet;
//	echo $query;
 break;
    case 2:
  $komu="Всем";
  $query="SELECT
  s_разделы.Наименование AS Раздел,
  s_темы.Наименование,
  s_темы.Тема
  FROM s_разделы
  INNER JOIN s_темы
    ON s_разделы.Раздел = s_темы.Раздел
    AND s_разделы.Предмет = s_темы.Предмет
    AND s_разделы.Класс = s_темы.Класс
  WHERE s_разделы.Предмет =".$predmet."
  AND s_разделы.Класс =".$klass." 
  AND s_темы.Разрешение = 1  
  AND s_темы.Кому = 'Всем' 
  ORDER BY s_темы.Раздел, s_темы.Тема";
// потом для индивидуальной работы надо 
//будет организовать логику проверки поля Кому на наличие в этом поле name
//echo $query;
	break;
 default:
 echo "Нет параметра";
 
 exit;
 break;
}
//echo $query;
$dim_my_tbl=parc_tbl($query);  // массив
$keys = array_keys($dim_my_tbl[0]);   // получили наименование колонок
// будем возвращать имена полей: "имя1/имя2/имя3/"   три поля , две записи
// записи                      : "12/2/1/;23/2/2/;"
//echo "<table>";
$name_fld="";
$value_fld="";
foreach ($keys as $title) {
//   	echo "<th>{$title}</th>";
		$name_fld=$name_fld.$title."/";
}		
foreach ($dim_my_tbl as $rez_col){
//        echo "<tr>";
        foreach ($rez_col as $Value){
 		  $value_fld=$value_fld.$Value."/";
//		echo "<td>{$Value}</td>";	
        }
//        echo "</tr>";
		$value_fld=$value_fld.";";    // это конец записис
}
//echo "</table>";
echo $name_fld."<>".$value_fld;
//echo "<script>onload_inic();</script>";  // когда с сервера загрузиться, то запускается это скрипт на клиенте
?>
<?php
//<script src="./js/jur_kl.js"></script>   адресация от текущей папки (. это текущая)
//<script src="//u715138.s26.wh1.su/usr/js/jur_servis.js"></script>
?>

