<?php
$query= "SELECT * FROM классы";
$dim_my_tbl=parc_tbl($query);  // массив
//echo  "Ок1";
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
?>