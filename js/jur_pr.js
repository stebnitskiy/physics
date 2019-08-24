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
 var data_post;
 data_post= "value="+$('.ajax input').val()+"&id="+arr[3]+"&field="+arr[2]+"&table="+arr[1];
 //alert(data_post);
 $.ajax({ type: "POST",
 url:"http://1gbfiz.ru/usr/update_cell.php",
 data: "value="+$('.ajax input').val()+"&id="+arr[3]+"&field="+arr[2]+"&table="+arr[1],
//при удачном выполнении скрипта, производим действия
 success: function(data){
//находим input внутри элемента с классом ajax и вставляем вместо input его значение
  $('.ajax').html($('.ajax input').val());
  alert("Ок:" + data);
//удаялем класс ajax
 $('.ajax').removeClass('ajax');
 },
 error: function(data){
//	 alert("Error:"+old_value);
//   восстанавливаем данные
 	$('.ajax input').val(old_value);
	alert("Ошибка:" + data);
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
//	alert ("Здесь");
	$('.ajax').html($('.ajax input').val());
    //удаляем все классы ajax
    $('.ajax').removeClass('ajax');
   //Нажатой ячейке присваиваем класс ajax
    $(this).addClass('ajax');
    var nameFld;
 //   nameFld=encodeURIComponent($(this).text());
 //   nameFld='11';
	 nameFld=$(this).text();
	var operTbl;
    operTbl='sort';
//	alert (global_table);
//	alert (operTbl);
//	alert (nameFld);
	$( "#middle" ).load( "/usr/7_programm.php",{'table':global_table,'param':operTbl,'namefld':nameFld} );
// $( "#middle" ).load( "/usr/7_programm.php",{'table':global_table,'param':operTbl,'nFld':nameFld} );
//$( "#middle" ).load( "/usr/7_programm.php",{'table':global_table,'param':postSort} );
	
});




