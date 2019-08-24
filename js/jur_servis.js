var old_val;
var global_table;

var old_value;
//=========================================================================================================Блок 7_programma
//========================================= шаг 1: входим в редактирование ------
//https://api.jquery.com/load/ - это описание jquery
//при нажатии на ячейку таблицы с классом edit
$('td.edit').click(function(){
//находим input внутри элемента с классом ajax и вставляем вместо input его значение
$('.ajax').html($('.ajax input').val());
//удаляем все классы ajax
$('.ajax').removeClass('ajax');
//Нажатой ячейке присваиваем класс ajax
$(this).addClass('ajax');
//внутри ячейки создаём input и вставляем текст из ячейки в него
$(this).html('<input id="editbox" size="'+ $(this).text().length+'" type="text" value="' + $(this).text() + '" />');
//устанавливаем фокус на созданном элементе
$('#editbox').focus();
old_value=$('.ajax input').val();
//alert (old_value);
});

// ==========================================ШАГ 2 - получили событие нажатия клавиатуры
//определяем нажатие кнопки на клавиатуре
$('td.edit').keydown(function(event){
//получаем значение класса и разбиваем на массив
//в итоге получаем такой массив - arr[0] = edit, arr[1] = наименование столбца, arr[2] = id строки
arr = $(this).attr('class').split( " " );
//проверяем какая была нажата клавиша и если была нажата клавиша Enter (код 13)
   if(event.which == 13)
   {
 //alert(arr[1]+'/'+arr[2]+'/'+arr[3]);
 //==============  идет ==================
 $.ajax({ type: "POST",
 url:"http://u715138.s26.wh1.su/usr/update_cell.php",
 data: "value="+$('.ajax input').val()+"&id="+arr[3]+"&field="+arr[2]+"&table="+arr[1],
//при удачном выполнении скрипта, производим действия
 success: function(data){
//находим input внутри элемента с классом ajax и вставляем вместо input его значение
  $('.ajax').html($('.ajax input').val());
  alert(data);
//удаялем класс ajax
 $('.ajax').removeClass('ajax');
 },
 error: function(data){
//	 alert("Error:"+old_value);
//   восстанавливаем данные
 	$('.ajax input').val(old_value);
	alert(data);
	$('.ajax').removeClass('ajax');
}});
}});
 
//===========================================================================================
$(document).on('blur', '#editbox', function(){
//$('.ajax').html($('.ajax input').val());
//   восстанавливаем данные
$('.ajax input').val(old_value);
//$('.ajax').removeClass('ajax');
});

// работа с ЖУРНАЛОМ =======================
//при нажатии на наименование колонки  классом 'sort' сортировка записей
$('th.sort').click(function(){
	alert ("Здесь");
	$('.ajax').html($('.ajax input').val());
    //удаляем все классы ajax
    $('.ajax').removeClass('ajax');
   //Нажатой ячейке присваиваем класс ajax
    $(this).addClass('ajax');
    var sort_fld;
    sort_fld=$(this).text();
    alert (sort_fld);
	alert (global_table);
 $( "#middle" ).load( "/usr/7_programm.php",{'table':global_table} );
	
});


// ================================ jur_kl.js
//var old_val;
//var global_table;
//============================================================================================вызываем журнал определенного класса ==================
$('td.open').click(function(){
$('.ajax').html($('.ajax input').val());
//удаляем все классы ajax
$('.ajax').removeClass('ajax');
//Нажатой ячейке присваиваем класс ajax
$(this).addClass('ajax');
//внутри ячейки создаём input и вставляем текст из ячейки в него
//$(this).html('<input id="editbox1" size="'+ $(this).text().length+'" type="text" value="' + $(this).text() + '" />');
//устанавливаем фокус на созданном элементе
//$('#editbox1').focus();
//old_val=$('.ajax input').val();
//old_val=$(this).addClass('ajax');
old_val=$(this).text();
global_table=old_val;
alert (global_table);
//$( "#middle" ).load( "http://u715138.s26.wh1.su/usr/7_programm.php" );
//var str=old_val.substr(1,1)+"_programm.php";
$( "#middle" ).load( "/usr/7_programm.php",{'table':old_val} );
//$( "#middle" ).load( "/usr/7_programm.php" );
//$('.ajax input').val(old_val);
//$('.ajax').removeClass('ajax');
});
// Восстанавливаем значение
$(document).on('blur', '#editbox1', function(){
$('.ajax input').val(old_val);
});

