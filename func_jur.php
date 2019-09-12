<?php
function select_fields($tbl)  {
// возвращает строку полей для запроса select 
//$fld - таблица, что позволяет получить все поля и строку полей, для исключения из запроса
$rzd=",";   // разделитель в строке
$stroka=excepFLD($tbl); // получили строку исключений
$name_fld_tbl=get_column_names($tbl);  // получили одномерный массив имен полей таблицы
//echo count($name_fld_tbl);
$stroka_fld_select=FORdim_del_str($name_fld_tbl,$stroka,$rzd);
return $stroka_fld_select;
}	

function select_fields($tbl)  {
// возвращает строку полей для запроса select 
//$fld - таблица, что позволяет получить все поля и строку полей, для исключения из запроса
$rzd=",";   // разделитель в строке
$stroka=excepFLD($tbl); // получили строку исключений
$name_fld_tbl=get_column_names($tbl);  // получили одномерный массив имен полей таблицы
//echo count($name_fld_tbl);
$stroka_fld_select=FORdim_del_str($name_fld_tbl,$stroka,$rzd);
return $stroka_fld_select;
}
?>