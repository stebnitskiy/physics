<?php
// надо $host, $db_user, $db_pass, $db_name переменные перенести в .php в файл connect_1GB.php 
$ppp=$_SERVER['DOCUMENT_ROOT'];
$ogr=ini_get('open_basedir'); // оказываются, что существуют ограничения, которые не позволят назначить путь для include в любое место ...
//echo $ogr;  // если есть вывод, то это ограничения здесь оказалось нет ограничений см файл хостинга phpinfo2.php
$p_include=substr($ppp,0,strlen($ppp)-4).'.php/';
set_include_path($p_include);
//echo 'путь:' + $p_include;
include $p_include.'connect.php'; // c  учетом этого устанавливаем путь для include и пользуемся...
//$dim_tbl=array(array());  //создаем массив 
$row=0;
$dim_tbl=array();
if ($result = $mysqli->query($query)) {
  $num_rows = mysqli_num_rows($result);	
  while ($obj = $result->fetch_assoc()) {
 
	foreach ($obj  as $key=>$value ) {  

		$dim_tbl[$row][$key]=$value;   //номер строки row 
		}
   
//	 $dim_tbl[$row]=["id"=>$obj["id"],"name"=>$obj["name"],"psw"=>$obj["psw"]];  // для отладки
    $row++;
  }
  
  $result->close();
 // var_dump($dim_tbl);              // для отладки
 // echo $dim_tbl[0]["psw"];         // значение столбца psw с 0 строки
 // echo  $num_rows;   // количество строк в ответе для отладки
}


?>