<?php
// подключаем переменные

function dir_folder($backward) {
// возращает путь к папке от корневой при смещении backward	
$ppp=$_SERVER['DOCUMENT_ROOT'];
$ogr=ini_get('open_basedir'); // оказываются, что существуют ограничения, которые не позволят назначить путь для include в любое место ...
//echo $ogr;  // если есть вывод, то это ограничения здесь оказалось нет ограничений см файл хостинга phpinfo2.php
$p_include=substr($ppp,0,strlen($ppp)-$backward).'.php/';
//set_include_path($p_include);
 return	$p_include;
}

function parc_tbl($query_str) {
// возращает результат запроса в массиве
include(substr($_SERVER['DOCUMENT_ROOT'],0,strlen($_SERVER['DOCUMENT_ROOT'])-4)).'.php/connect.php';
$dim_tbl=array();  // массив
$query= $query_str;
if ($result = $mysqli->query($query)) {
  $num_rows = mysqli_num_rows($result);	
  while ($obj = $result->fetch_assoc()) {
 		$dim_tbl[]=$obj;  
   }
  
  $result->close();
 // var_dump($dim_tbl);              // для отладки
 // echo $dim_tbl[0]["psw"];         // значение столбца psw с 0 строки
 // echo  $num_rows;   // количество строк в ответе для отладки
}
 return $dim_tbl;
}


function update_fld($table,$id,$field,$value) {
// Корректировка одного поля таблицы. Таблица должна иметь уникальное поле id
//include dir_folder(4).'connect.php'; // c  учетом этого устанавливаем путь для include и пользуемся...
//$mysqli=connect_sql();
include(substr($_SERVER['DOCUMENT_ROOT'],0,strlen($_SERVER['DOCUMENT_ROOT'])-4)).'.php/connect.php';
$type_field=obj_fld($table,$field);

switch ($type_field) {

   case 253:
//строка 
  $query="UPDATE ".$table." SET `".$field."`='".$value."' WHERE id=".$id;
         break;
   case 8:
//строка 
 $query="UPDATE ".$table." SET `".$field."`='".$value."' WHERE id=".$id;
         break;
   case 3;	
// целое
  $query="UPDATE ".$table." SET `".$field."`=".$value." WHERE id=".$id; 
         break;
   case 10:
 // дата
         $query="UPDATE ".$table." SET "."'".$field."'"."=".date($value)."' WHERE id=".$id;
         break;
 
   default:	
		 $query="UPDATE ".$table." SET ".$field."=".$value." WHERE id=".$id;
 
}
//return "-1/". $query;
//exit;
if (mysqli_query($mysqli, $query)) {
 //     echo "New record created successfully";
	  return "0:".$type_field."::".$query;;
} else {
//      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	  return "-1/".mysqli_error($mysqli)."//".$type_field."::".$query;
}
mysqli_close($mysqli);
}

function obj_fld($table,$field) {
// Возвращает массив характеристик поля таблицы
//include dir_folder(4).'connect.php'; // c  учетом этого устанавливаем путь для include и пользуемся...

include(substr($_SERVER['DOCUMENT_ROOT'],0,strlen($_SERVER['DOCUMENT_ROOT'])-4)).'.php/connect.php';
$query="select ".$field." from ".$table. " LIMIT 5";
$valu_return=0;
if ($result = mysqli_query($mysqli, $query)) {

    /* получение метаданных столбца 'SurfaceArea' */
    $finfo = mysqli_fetch_field_direct($result, 0);

 //   printf("Имя:         %s\n", $finfo->name);
//    printf("Таблица:     %s\n", $finfo->table);
 //   printf("макс. длина: %d\n", $finfo->max_length);
//    printf("Флаги:       %d\n", $finfo->flags);
 //   printf("Тип:         %d\n\n", $finfo->type);
    $valu_return=$finfo->type;
    mysqli_free_result($result);
}
   
/* закрываем подключение */
mysqli_close($mysqli);
return $valu_return;
}
function get_column_names($table) {
 include(substr($_SERVER['DOCUMENT_ROOT'],0,strlen($_SERVER['DOCUMENT_ROOT'])-4)).'.php/connect.php'; 
 $sql = 'DESCRIBE '.$table;
 $result = mysqli_query($mysqli, $sql);

  $rows = array();
  while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row['Field'];
  }

  return $rows;
}

?>