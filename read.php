<!DOCTYPE html>
<html xml:lang="ru" lang="ru">
<meta http-equiv="Content-Type" content="text/html; UTF-8" lang="ru"/>
<meta charset="utf-8" />
<body>
<?php
//                       отладка вывода таблицы
include_once('func.php');
//$ppp=$_SERVER['DOCUMENT_ROOT'];
//$ogr=ini_get('open_basedir'); // оказываются, что существуют ограничения, которые не позволят назначить путь для include в любое место ...
//echo $ogr;  // если есть вывод, то это ограничения здесь оказалось нет ограничений см файл хостинга phpinfo2.php
//exit;
//$p_include=substr($ppp,0,strlen($ppp)-4).'.php/';
//set_include_path($p_include);
//echo $p_include;
//=======================

$tbl="7А";
$fld="list_fld";
$rzd=",";
$stroka=excepFLD($tbl); // получили строку исключений
$name_fld_tbl=get_column_names($tbl);  // получили одномерный массив имен полей таблицы
//echo count($name_fld_tbl);
$stroka_fld_select=FORdim_del_str($name_fld_tbl,$stroka,$rzd);
echo $stroka_fld_select;  // получили строку для select
 //$comma_separated = implode($rzd,$name_fld_tbl);
 //echo $comma_separated;
// теперь получить строку имен полей
//echo $stroka_fld_select;
//$dim_my_tbl=excepFLD($tbl);
$query= "SELECT * FROM `7_программа`";
//$query="select * from `excep_fld` where tbl=".$tbl; 
//$query="select * from `excep_fld` where tbl='".$tbl."'"; 
$dim_my_tbl=parc_tbl($query);  // массив
foreach ($dim_my_tbl as $keys=>$value){
// echo $value[$fld];
//}
//echo $row['list_fld'];
//exit;
$keys = array_keys($dim_my_tbl[0]);   // получили наименование колонок
echo "<table>";
foreach ($keys as $title) {
    	echo "<th>{$title}</th>";
}		
foreach ($dim_my_tbl as $rez_col){
       echo "<tr>";
        foreach ($rez_col as $Value){
                echo "<td>{$Value}</td>";
        }
        echo "</tr>";
}

exit;
//========================================
$row=0;   // индекс массива
$query= "SELECT * FROM `7_программа`";
$dim_my_tbl=parc_tbl($query);  // массив
  "Ок1";
$keys = array_keys($dim_my_tbl[0]);   // получили наименование колонок
echo "<table>";
foreach ($keys as $title) {
    	echo "<th>{$title}</th>";
}		
foreach ($dim_my_tbl as $rez_col){
       echo "<tr>";
        foreach ($rez_col as $Value){
                echo "<td>{$Value}</td>";
        }
        echo "</tr>";
}
echo "</table>";
$col_names=get_column_names("7_программа");
echo  $col_names[4];
?>
</body>
</html>