<?php
//data: "value="+$('.ajax input').val()+"&id="+arr[2]+"&field="+arr[1]+"&table="+table,
// для изменения поля нужна другая функция
session_start();
$yuo=$_SESSION['login'];
//echo $yuo;
$query= "SELECT `perm`  FROM `identic` where name='".$yuo."'";
include_once ('func.php');
$yes_no=permis($query);
if ($yes_no==-1){
  echo -1;
  exit;  
}

$table=$_POST['table'];
$field=$_POST['field'];
$id=$_POST['id'];
$value=$_POST['value'];
$table=stripslashes($table);
$field=stripslashes($field);
$id=stripslashes($id);
$value=stripslashes($value);
$query="select * from `".$table."` where id=".$id;
//echo "Запрос:".$query;
//$dim_my_tbl=parc_tbl($query);  // массив данных
$ret=update_fld($table,$id,$field,$value);
echo $ret;
//echo "Запрос:".$query;
?>