<?php
// надо $host, $db_user, $db_pass, $db_name переменные перенести в .php в файл connect_1GB.php 
$ppp=$_SERVER['DOCUMENT_ROOT'];
$ogr=ini_get('open_basedir'); // оказываются, что существуют ограничения, которые не позволят назначить путь для include в любое место ...
//echo $ogr;  // если есть вывод, то это ограничения здесь оказалось нет ограничений см файл хостинга phpinfo2.php
$p_include=substr($ppp,0,strlen($ppp)-4).'.php/';
set_include_path($p_include);
include $p_include.'connect.php'; // c  учетом этого устанавливаем путь для include и пользуемся...
if (mysqli_query($mysqli, $query)) {
 //     echo "New record created successfully";
	  $result2='TRUE';
} else {
//      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	  $result2='FALSE';
}
mysqli_close($mysqli);


?>