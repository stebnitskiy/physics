<?php
Include_once('func.php');
$tb1Ks="классы";
//echo "hghghghgghg".$tb1Ks;
$strokaSelect=selectFIELDS($tb1Ks);
//echo "select:".$strokaSelect.":";
$query= "SELECT ".$strokaSelect." FROM ".$tb1Ks;
//$query= "SELECT * FROM ".$tb1Ks;	
$dim_my_tbl=parc_tbl($query);  // массив
//exit;
//echo  $tb1;
$keys = array_keys($dim_my_tbl[0]);   // получили наименование колонок

echo "<table id=`".$tb1Ks."` klass='tbl'>";
foreach ($keys as $title) {
    	echo "<th>{$title}</th>";
}		
foreach ($dim_my_tbl as $rez_col){
       echo "<tr>";
        foreach ($rez_col as $Value){
 		//echo "<td class='open ".$tb1Ks." ".$Value."'  onMouseOver=\"className='Default2'\">{$Value}</td>";
			//echo "<td class='open ".$tb1Ks." ".$Value."'>{$Value}</td>";	
		echo "<td class='open ".$tb1Ks." ".$Value."'  onMouseOver=\"className='Default2'\" onMouseOut=\"className='td_m'\">{$Value}</td>";	
				
        }
        echo "</tr>";
}
echo "</table>";

?>
<script src="./js/jur_kl.js"></script>
<?php
//<script src="./js/jur_kl.js"></script>   адресация от текущей папки (. это текущая)
//<script src="//u715138.s26.wh1.su/usr/js/jur_servis.js"></script>
?>

