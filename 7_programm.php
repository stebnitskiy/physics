<?php
Include_once('func.php');
$table=$_POST['table'];
$param_case=$_POST['param'];
$table=stripslashes($table);
$param_case=stripslashes($param_case);
$tbl=$table;
//echo $table;
//echo $param_case;
//exit;
//$tbl="7А";
switch ($param_case) {
		case 'jurnal':
				$query= "SELECT * FROM ".$tbl;
				$f_sort=1;
				$klass_proga="edit";
				$ret=out_div_tbl($tbl,$query,$f_sort,$klass_proga);
			break;
		case 'proga':
				$query= "SELECT * FROM ".$tbl;
				$f_sort=0;
				$klass_proga="edit";
				$ret=out_div_tbl($tbl,$query,$f_sort,$klass_proga);
				
			break;	
        case 'sort':
			        $name_fld=$_POST['namefld'];
					$name_fld=stripslashes($name_fld);
			        $query= "SELECT * FROM `".$tbl."` ORDER BY `".$tbl."`.`".$name_fld."` ASC";
					$f_sort=1;
					$klass_proga="edit";
					$ret=out_div_tbl($tbl,$query,$f_sort,$klass_proga);
					
//					SELECT * FROM `7А` ORDER BY `7А`.`14-11` ASC
//					echo $query;
//					exit;
			break;
		 default:	
		 echo "нет запроса"."//".$param_case;
		 exit;
}		

function out_div_tbl($tbl,$query,$sort,$klass_edit) {  
$dim_my_tbl=array();  // массив
$dim_my_tbl=parc_tbl($query);  // массив данных
$keys=array();  // массив
$keys=array_keys($dim_my_tbl[0]);   // получили наименование полей
				// формируем html для редактирования данных
echo "<table id=`".$tbl."`>";
	foreach ($keys as $title) {
	if ($title!='id') 		
	 switch ($sort) {
		 case 0:
		    echo "<th>{$title}</th>";
		 break;
		 case 1:
		    echo "<th class='sort ".$title."'>{$title}</th>";
		 break;
		 default:
		 echo "<th>{$title}</th>";
	 }	 
//     echo "<th class='sort ".$title."'>{$title}</th>";
}
	$idx_rows=0;		
	foreach ($dim_my_tbl as $rez_col){
    echo "<tr>";
	$idx_keys=0;
		foreach ($rez_col as $Value){
		$field=$keys[$idx_keys];
		$idx=$dim_my_tbl[$idx_rows]['id'];
				if ($field!='id') {
				echo "<td class='".$klass_edit." ".$tbl." ".$field." ".$idx." '>{$Value}</td>";
				}
				$idx_keys=$idx_keys+1;
	//<td class="edit phone '.$rows['id'].'">'.$rows['phone'].'</td>
		}
		$idx_rows=$idx_rows+1;;
		echo "</tr>";
	}
echo "</table>";
}			  
?>
<script src="./js/jur_pr.js"></script>
<?php
//<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
//<script src="//u715138.s26.wh1.su/usr/js/jur_servis.js"></script>
?>
