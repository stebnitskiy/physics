var old_val;
var global_table;
//============================================================================================вызываем журнал определенного класса ==================
$(document).ready(function() {
$('td.open').click(function(){
$('.ajax').html($('.ajax input').val());
//alert("Классы");
//удаляем все классы ajax
$('.ajax').removeClass('ajax');
//Нажатой ячейке присваиваем класс ajax
$(this).addClass('ajax');
//внутри ячейки создаём input и вставляем текст из ячейки в него
//$(this).html('<input id="editbox1" size="'+ $(this).text().length+'" type="text" value="' + $(this).text() + '" />');
//устанавливаем фокус на созданном элементе
//$('#editbox1').focus();
//old_val=$('.ajax input').val();
old_val=$(this).text();  // получили значение ячейки td
global_table=old_val;
var tbl_proga;
//tbl_proga=parseInt(global_table)+"Программа";
tbl_proga=global_table;
//alert (tbl_proga);
//alert (global_table);
var post_jurnal;
var post_proga;
var post_prop;
post_jurnal="jurnal";
post_proga="proga";
post_prop="prop";
//$( "#middle" ).load( "http://u715138.s26.wh1.su/usr/7_programm.php" );
//var str=old_val.substr(1,1)+"_programm.php";
//$( "#middle" ).load( "/usr/7_programm.php",{'table':old_val,'param':post_jurnal} );
    //$( "#right" ).load( "/usr/7_programm.php",{'table':old_val,'param':post_jurnal} );
$( "#middle" ).load( "/usr/7_programm.php",{'table':tbl_proga,'param':post_prop} );
   //$( "#middle" ).load( "/usr/7_programm.php" );
   //$('.ajax input').val(old_val);
   //$('.ajax').removeClass('ajax');
});
// Восстанавливаем значение
$(document).on('blur', '#editbox1', function(){
$('.ajax input').val(old_val);
old_val="";
});
});

//var old_value;
//var table_edit=[];  // если на редактировании находится несколько таблиц, но редактируем какую либо одну, то по клику помещаем сюда значения класса edit
//var table_edit_tek; // текущая таблица редактирования
//=========================================================================================================Блок 7_programma
//========================================= шаг 1: входим в редактирование ------
//https://api.jquery.com/load/ - это описание jquery
//при нажатии на ячейку таблицы с классом edit
$('#middle td.edit').click(function(){
//alert("Программа");
$('.ajax').html($('.ajax input').val());
//удаляем все классы ajax
$('.ajax').removeClass('ajax');
//Нажатой ячейке присваиваем класс ajax
$(this).addClass('ajax');
// может быть несколько таблиц
//<td class='".$klass_edit." ".$tbl." ".$field." ".$idx." ".$fld_len."'>{$
arr = $(this).attr('class').split( " " );
//alert(arr[1]+":"+arr[2]+":"+arr[3]+":"+arr[4]);
table_edit.length=0;
table_edit= $(this).attr('class').split( " " );
var len_tbl;
len_tbl=table_edit[4];
if ($(this).text().length==0) {
	len_tbl=len_tbl/2;
} else {
	len_tbl=$(this).text().length;
}
$(this).html('<input id="editbox" size="'+ len_tbl+'" style="font-size: 12px;" text value="' + $(this).text() + '" />');
//$(this).html('<input id="editbox" size="'+ $(this).text().length+'" style="font-size: 5px;" text value="' + $(this).text() + '" />');
old_value=$('.ajax input').val();
$('#editbox').focus();
});

// ==========================================ШАГ 2 - получили событие нажатия клавиатурыtty
//определяем нажатие кнопки на клавиатуре
$('#middle td.edit').keydown(function(event){
//получаем значение класса и разбиваем на массив
//в итоге получаем такой массив - arr[0] = edit, arr[1] = наименование столбца, arr[2] = id строки
//arr = $(this).attr('class').split( " " );
//проверяем какая была нажата клавиша и если была нажата клавиша Enter (код 13)
   if(event.which == 13)
   {
 //alert(arr[1]+'/'+arr[2]+'/'+arr[3]);
 //==============  идет ==================

 var data_post;
 data_post= "value="+$('.ajax input').val()+"&id="+arr[3]+"&field="+arr[2]+"&table="+arr[1];
// alert(data_post);
 $.ajax({ type: "POST",
 url:"http://1gbfiz.ru/usr/update_cell.php",
 data: "value="+$('.ajax input').val()+"&id="+table_edit[3]+"&field="+table_edit[2]+"&table="+table_edit[1],
//при удачном выполнении скрипта, производим действия

 success: function(data){
//находим input внутри элемента с классом ajax и вставляем вместо input его значение
  $('.ajax').html($('.ajax input').val());
//  alert("Ок:" + data);
//удаялем класс ajax
 $('.ajax').removeClass('ajax');
 table_edit.length=0;
 },
 error: function(data){
//	 alert("Error:"+old_value);
//   восстанавливаем данные
 	$('.ajax input').val(old_value);
//	alert("Ошибка:" + data);
}});
}});
 
//===========================================================================================
$(document).on('blur', '#editbox', function(){
//$('.ajax').html($('.ajax input').val());
//   восстанавливаем данные
//alert ("Потеря фокуса");
$('.ajax input').val(old_value);
//$('.ajax').removeClass('ajax');
});

