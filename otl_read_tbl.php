<?php
//                       отладка вывода таблицы

//$dir ='./js/ris/01.jpg'; // сохраним в переменную путь к нашей папке
//echo '<img src="'.$dir.'"width="300">'; // выводим картинку



include_once('func.php');

$tbl="задачи";

$query= "SELECT * from `задачи` where `login`='sti'";

$dim_my_tbl=parc_tbl($query);  // массив
$keys = array_keys($dim_my_tbl[0]);   // получили наименование колонок
$file="ris.txt";
$path = $_SERVER['DOCUMENT_ROOT'];
$papka="./js/ris/";

// папка

echo "<table>";
foreach ($keys as $title) {
    	echo "<th>{$title}</th>";
		 
}		
foreach ($dim_my_tbl as $rez_col){
       echo "<tr>";
	      $idx_keys=0;
		  foreach ($rez_col as $Value){
 			$zadanie=$Value;  
			if ($keys[$idx_keys]=='Задача') {
			  $num_file=$zadanie.".PNG";
	          $papka1=$papka.$num_file;	
			 // echo $papka1;
			 // $fd = file_get_contents($papka1);
               //читаем файл	
            // echo "<td>".$fd."</td>";	
			echo "<td><img src=".$papka1."></td>";
			}
			else {
			echo "<td>".$zadanie."</td>";	
			}   
		 $idx_keys=$idx_keys+1;	
        }
	   
       echo "</tr>";
}
echo "</table>";

?>