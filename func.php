<?php
// подключаем переменные
function permis($query_str) {
//echo $query_str;
	$prm_tbl=parc_tbl($query_str);
//	$prm_row = mysqli_fetch_array($prm_tbl);
	if ($prm_tbl[0]['perm'] == 999) {
        return 0;
      } else {
	return -1;
	  }
}
function dir_folder($backward) {
// возращает путь к папке от корневой при смещении backward	
$ppp=$_SERVER['DOCUMENT_ROOT'];
$ogr=ini_get('open_basedir'); // оказываются, что существуют ограничения, которые не позволят назначить путь для include в любое место ...
//echo $ogr;  // если есть вывод, то это ограничения здесь оказалось нет ограничений см файл хостинга phpinfo2.php
$p_include=substr($ppp,0,strlen($ppp)-$backward).".php/";
//set_include_path($p_include);
return	$p_include;
}

function parc_tbl($query_str) {
// возращает результат запроса в массиве
include(substr($_SERVER['DOCUMENT_ROOT'],0,strlen($_SERVER['DOCUMENT_ROOT'])-4)).'.php/connect.php';
$dim_tbl=array();  // массив
$query= $query_str;
//echo $query;
if ($result = $mysqli->query($query)) {
	$num_rows = mysqli_num_rows($result);	
	while ($obj = $result->fetch_assoc()) {
 		$dim_tbl[]=$obj;  
	}
	$result->close();
 // var_dump($dim_tbl);              // для отладки
 // echo $dim_tbl[0]["psw"];         // значение столбца psw с 0 строки
 // echo  $num_rows;   // количество строк в ответе для отладки
	return $dim_tbl;
} else {
  echo "Нет набора записей (parc_tbl)";
   exit;
}
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
  $query="UPDATE `".$table."` SET `".$field."`='".$value."' WHERE id=".$id;
         break;
   case 8:
//строка 
 $query="UPDATE `".$table."` SET `".$field."`='".$value."' WHERE id=".$id;
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
		 $query="UPDATE `".$table."` SET `".$field."`='".$value."' WHERE id=".$id;
 
}
//return "-1/". $query;
//exit;
if (mysqli_query($mysqli, $query)) {
 //     echo "New record created successfully";
	   // return "0:".$type_field."::".$query;;   // Эта строчка для отладки
	    return 0;
} else {
//      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	  //return "-1/".mysqli_error($mysqli)."//".$type_field."::".$query;  // Эта чтрочка для отладки
	  return -1;
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
return $valu_return; // вернула тип поля
}
//возвращает массив имен полей таблицы (это мне нужно для того, что бы строить select с выбранными полями (поля, которые не нужны в запросе, в отдельной таблице 
function get_column_names($table) {
 include(substr($_SERVER['DOCUMENT_ROOT'],0,strlen($_SERVER['DOCUMENT_ROOT'])-4)).'.php/connect.php'; 
 $sql = "DESCRIBE `".$table."`";
 //echo $sql;
 $result = mysqli_query($mysqli, $sql);

  $rows = array();
 // $i=0;
  while($row = mysqli_fetch_assoc($result)) {
 //   $i=$i+1;
	$rows[] = $row['Field'];
//	echo $i;
  }

  return $rows;  // массив имен полей
}

function fldLength($table,$field) {
// Возвращает массив характеристик поля таблицы
//include dir_folder(4).'connect.php'; // c  учетом этого устанавливаем путь для include и пользуемся...

include(substr($_SERVER['DOCUMENT_ROOT'],0,strlen($_SERVER['DOCUMENT_ROOT'])-4)).'.php/connect.php';
$query="select ".$field." from ".$table. " LIMIT 5";
$valu_return=0;
if ($result = mysqli_query($mysqli, $query)) {

    /* получение метаданных столбца 'SurfaceArea' */
    $finfo = mysqli_fetch_field_direct($result, 0);

 // printf("Имя:         %s\n", $finfo->name);
 //   printf("Таблица:     %s\n", $finfo->table);
//  printf("макс. длина: %d\n", $finfo->max_length);
//   printf("Флаги:       %d\n", $finfo->flags);
//  printf("Тип:         %d\n\n", $finfo->type);
//   printf("Длина:         %d\n\n", $finfo->length);
     $valu_return=$finfo->max_length;
 //   mysqli_free_result($result);
}
 
//   mysqli_free_result($result);
/* закрываем подключение */
mysqli_close($mysqli);
return $valu_return;  // вернула максимальную длину поля
}
function excepFLD($tbl) {
// возвращает строку полей, которую надо исключить из запроса  select
$query="select * from `excep_fld` where tbl='".$tbl."'"; 
$dim_my_tbl=parc_tbl($query);  // массив
foreach ($dim_my_tbl as $keys=>$value){
  return $value['list_fld'];
}
}
function FORdim_del_str($FORdim,$FROMstr,$rzd){
// есть массив FORdim из которого надо удалить элементы, которые в строке и разделены запятыми
// надо преобразовать строку к одномерному массиву
//	$dim_str=[];
	$dim_str=explode($rzd,$FROMstr);  // получили одномерный массив из строки
	$dim_ret=array();  // объявили массив, куда будем складывать исключения
	$k=0;
//echo count($FORdim);
//echo "::".count($dim_str);
//$stroka_ret="";
	for ($i = 0; $i <= count($FORdim)-1; $i++){
	//	return 1;
		for ($j = 0; $j <= count($dim_str)-1; $j++) {
			$res_cmp=strcmp($FORdim[$i], $dim_str[$j]);
			//return $res_cmp."//".$FORdim[$i]."???".$dim_str[$j];
			if  ($res_cmp==0)  {
		      $FORdim[$i]="-1";
			//  return "Да";
			  
			} else {
			//	return $res_cmp."//".$FORdim[$i]."???".$dim_str[$j];
			}	
		}	
	}
//return 0;
// получили массив $FORdim, у которого есть -1 )
// теперь в цикле перепишем $FORdim в  $dim_ret
for ($i = 0; $i <= count($FORdim)-1; $i++){
		if ($FORdim[$i]!=="-1")  {
		     $dim_ret[$k]="`".$FORdim[$i]."`";
			 $k=$k+1;
		} 
			
	}
 $comma_separated = implode(",",$dim_ret);
 return $comma_separated;
}

function selectFIELDS($tbl) {
//echo $tbl;
$rzd=",";
$stroka=excepFLD($tbl); // получили строку исключений
$name_fld_tbl=get_column_names($tbl);  // получили одномерный массив имен полей таблицы
//echo count($name_fld_tbl);
$stroka_fld_select=FORdim_del_str($name_fld_tbl,$stroka,$rzd);	
return 	$stroka_fld_select;
//return $tbl."/Отладка";
}

// получить значение поля из набора записей
function value_fld($zpr,$field) {
  $result=parc_tbl($zpr);  // массив
  $row = array_keys($result[0]);   // получили наименование колонок
 
    foreach ($result as $value){    // перебираем записи
        
		 foreach ($row as $title) {
    	if ($title==$field) {      // поле
			return  $value[$title];
		}
   }
  }
}	
?>