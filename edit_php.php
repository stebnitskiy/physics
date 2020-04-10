<?php
include 'func.php';
//$tbl="clients";
$tbl="7_программа";
$query= "SELECT * FROM ".$tbl;
//$query= "SELECT * FROM `7_программа`";
$dim_my_tbl=array();  // массив
$dim_my_tbl=parc_tbl($query);  // массив данных
$keys=array();  // массив
$keys=array_keys($dim_my_tbl[0]);   // получили наименование полей
// формируем html для редактирования данных
echo "<table id=`".$tbl."`>";
foreach ($keys as $title) {
			if ($title!='id') 	{
				echo "<th>{$title}</th>";
			}
}
$idx_rows=0;		
foreach ($dim_my_tbl as $rez_col){
       
	   echo "<tr>";
	    $idx_keys=0;
		
        foreach ($rez_col as $Value){
                $field=$keys[$idx_keys];
				$idx=$dim_my_tbl[$idx_rows]['id'];
				if ($field!='id') {
				echo "<td class='edit ".$field." ".$idx."'>{$Value}</td>";
				}
				$idx_keys=$idx_keys+1;
//<td class="edit phone '.$rows['id'].'">'.$rows['phone'].'</td>
        }
		$idx_rows=$idx_rows+1;
        echo "</tr>";
}
echo "</table>";

?>

 