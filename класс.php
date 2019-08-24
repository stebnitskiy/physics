<?php
Include_once('func.php');
$tb1="классы";
$query= "SELECT * FROM ".$tb1;	
$dim_my_tbl=parc_tbl($query);  // массив
//echo  $tb1;
$keys = array_keys($dim_my_tbl[0]);   // получили наименование колонок
echo "<table id=`".$tb1."` klass='tbl'>";
foreach ($keys as $title) {
    	echo "<th>{$title}</th>";
}		
foreach ($dim_my_tbl as $rez_col){
       echo "<tr>";
        foreach ($rez_col as $Value){
                echo "<td class='open ".$tbl." ".$Value."'>{$Value}</td>";
        }
        echo "</tr>";
}
echo "</table>";
?>
<script src="./js/jur_kl.js"></script>
<?php
//<script src="./js/jur_kl.js"></script>
//<script src="//u715138.s26.wh1.su/usr/js/jur_servis.js"></script>
?>
