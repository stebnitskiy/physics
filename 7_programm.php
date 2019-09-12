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
?>
<script src="./js/jur_jr.js"></script>
<?php		
// доделать в виде функции
			$fld="list_fld";
			$rzd=",";
			$stroka=excepFLD($tbl); // получили строку исключений
			$name_fld_tbl=get_column_names($tbl);  // получили одномерный массив имен полей таблицы
			//echo count($name_fld_tbl);
			$stroka_fld_select=FORdim_del_str($name_fld_tbl,$stroka,$rzd);
			$query= "SELECT ".$stroka_fld_select." FROM ".$tbl;
// =================================================				
				//$query= "SELECT * FROM ".$tbl;
				$f_sort=1;
				$klass_proga="edit";
				$ret=out_div_tbl($tbl,$query,$f_sort,$klass_proga);
			break;
		case 'proga':
?>
<script src="./js/jur_pr.js"></script>
<?php
// доделать в виде функции
			$fld="list_fld";
			$rzd=",";
			$stroka=excepFLD($tbl); // получили строку исключений
			//echo $stroka;
			$name_fld_tbl=get_column_names($tbl);  // получили одномерный массив имен полей таблицы
			//echo count($name_fld_tbl);
			$stroka_fld_select=FORdim_del_str($name_fld_tbl,$stroka,$rzd);
			$query= "SELECT ".$stroka_fld_select." FROM ".$tbl;
// =================================================			
			//	$query= "SELECT * FROM ".$tbl;
				$f_sort=0;
				$klass_proga="edit";
				$ret=out_div_tbl($tbl,$query,$f_sort,$klass_proga);
				
			break;	
        case 'sort':
?>
<script src="./js/jur_jr.js"></script>
<?php
			

					$name_fld=$_POST['namefld'];
					$name_fld=stripslashes($name_fld);
			        // доделать в виде функции
			$fld="list_fld";
			$rzd=",";
			$stroka=excepFLD($tbl); // получили строку исключений
			//echo $stroka;
			$name_fld_tbl=get_column_names($tbl);  // получили одномерный массив имен полей таблицы
			//echo count($name_fld_tbl);
			$stroka_fld_select=FORdim_del_str($name_fld_tbl,$stroka,$rzd);
			$query_pred = "SELECT ".$stroka_fld_select." FROM ".$tbl;
// =================================================
//    				$query= "SELECT * FROM `".$tbl."` ORDER BY `".$tbl."`.`".$name_fld."` ASC";
					$query=$query_pred." ORDER BY `".$tbl."`.`".$name_fld."` ASC";
				//	echo $query ;
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
$keys=array();  // массив имен полей
$keys=array_keys($dim_my_tbl[0]);   // получили наименование полей
				// формируем html для редактирования данных
echo "<table id=".$tbl.">";
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
    $sred='Среднее';
	$idx_keys=0;
	echo "<tr id = '".$idx_rows."' class='tbl_str'>";
		foreach ($rez_col as $Value){
		$field=$keys[$idx_keys];
		// желательно определить длину текстового поля при корректировке, так как jquery ничего об этом не знает....
		// получим максимальную длину поля
		$fld_len=fldLength($tbl,$field);
		$idx=$dim_my_tbl[$idx_rows]['id'];
				if ($field!='id') {
				$p_value=$Value;
				echo "<td class='".$klass_edit." ".$tbl." ".$field." ".$idx." ".strlen($field)." '>{$Value}</td>";
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

<?php
//<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
//<script src="./js/jur_pr.js"></script>
?>
