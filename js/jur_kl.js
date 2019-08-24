var old_val;
var global_table;
//============================================================================================вызываем журнал определенного класса ==================
$('td.open').click(function(){
$('.ajax').html($('.ajax input').val());
//удаляем все классы ajax
$('.ajax').removeClass('ajax');
//Нажатой ячейке присваиваем класс ajax
$(this).addClass('ajax');
//внутри ячейки создаём input и вставляем текст из ячейки в него
$(this).html('<input id="editbox1" size="'+ $(this).text().length+'" type="text" value="' + $(this).text() + '" />');
//устанавливаем фокус на созданном элементе
$('#editbox1').focus();
old_val=$('.ajax input').val();
global_table=old_val;
var tbl_proga;
tbl_proga="7_программа";
//alert (global_table);
var post_jurnal;
var post_proga;
post_jurnal="jurnal";
post_proga="proga";
//$( "#middle" ).load( "http://u715138.s26.wh1.su/usr/7_programm.php" );
//var str=old_val.substr(1,1)+"_programm.php";
$( "#middle" ).load( "/usr/7_programm.php",{'table':old_val,'param':post_jurnal} );
//$( "#right" ).load( "/usr/7_programm.php",{'table':old_val,'param':post_jurnal} );
//$( "#right" ).load( "/usr/7_programm.php",{'table':tbl_proga,'param':post_proga} );
//$( "#middle" ).load( "/usr/7_programm.php" );
//$('.ajax input').val(old_val);
//$('.ajax').removeClass('ajax');
});
// Восстанавливаем значение
$(document).on('blur', '#editbox1', function(){
$('.ajax input').val(old_val);
old_val="";
});
