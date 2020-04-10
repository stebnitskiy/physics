var arr1 = new Map();   // Это асоциативныйсоциативный массив, в котором хранится имя_поля,Значение.

//=========================================================================================================Блок 7_programma
function send_post(data_str){
 $.ajax({ type: "POST",
 url:"http://1gbfiz.ru/usr/update_cell.php",
   data:data_str,
//при удачном выполнении скрипта, производим действия
 success: function(data){
//находим input внутри элемента с классом ajax и вставляем вместо input его значение
// alert(data);
if (data==-1) {
	//   восстанавливаем данные
 
}	
//удаялем класс ajax
 },
 error: function(data){
//	 alert("Error:"+old_value);
//   восстанавливаем данные
 	$('.ajax input').val(old_value);
//	alert("Ошибка:" + data);
}});
}
function param_count(t_vvod)  {
 // расчет средней оценки
 // нам нужно сложить все ячеки журнала, у которых имя поля - числовое значение
 //Перебор ключей можно осуществить посредством итерируемого объекта MapIterator, возвращаемым методом keys:
//alert (t_vvod);
aver=0;
aver_sum=0;
aver_kol=0;
// надо проверить t_vvod на предмет число это или нет
var a=t_vvod.substr(0,1);
var nn=Number(a);
if (isFinite(nn) && nn !=0) { 
   aver_sum=nn;
   aver_kol=1;
}  
//if (t_vvod!=0) {
// aver_sum=Number(t_vvod);
 //aver_kol=1;
//}
for (let kl of arr1.keys ()) {
    var a = kl.substr(0,2);
    var nn=Number(a);
  if (isFinite(nn)) { 
    // это ячейка журнала, можно производить сложение чисел 
  // alert(nn);
   // значение
    Vfld=Number(arr1.get(kl));    // обязательно
	if (isFinite(Vfld) && Vfld !=0 ){
	aver_sum=aver_sum+Vfld;
	aver_kol=aver_kol+1;
}}}  
 if (aver_kol!=0) {
    var aver_N=aver_sum/aver_kol;
	aver= Math.round(aver_N * 100.0) / 100.0;
 }
 return aver;
}


$('#middle tr.tbl_str').click(function(){
row_tek=$(this).find('td:first').html();   //Значение первой ячейки работает
var row_idx=$(this).attr('id');;
//alert (row_idx);

//row_tek_idx=row_tek-1;
row_tek_idx=row_idx;
arr1.clear(); 
$("#" + row_tek_idx+">td").each(function (index, value){
// 
// var myOut={};
  var link = $(this).text();
  var  arr = $(this).attr('class').split( " " );
  var fldName=arr[2];
  arr1.set(fldName,link);
});

//alert(output[1][0] + ":"+ output[1][1]);
// получить значение, ассоциированное с ключом 'key4'
//alert(arr1.get('Место')); // 'value4'
 
// есть ли в массиве arr ключ key2
//arr1.has('key2'); // true
 
});

	
//========================================= шаг 1: входим в редактирование ------

$('#middle td.edit').click(function(){

$('.ajax').html($('.ajax input').val());
//удаляем все классы ajax
$('.ajax').removeClass('ajax');
//Нажатой ячейке присваиваем класс ajax
$(this).addClass('ajax');

//<td class='".$klass_edit." ".$tbl." ".$field." ".$idx." ".$fld_len."'>{$
table_edit.length=0;
table_edit= $(this).attr('class').split( " " );
var len_tbl;
len_tbl=table_edit[4];

if ($(this).text().length==0) {
	len_tbl=len_tbl/2;
} else {
	len_tbl=$(this).text().length;
	//len_tbl=10;
}
$(this).html('<input id="editbox" size="'+ len_tbl+'" style="font-size: 12px;" text value="' + $(this).text() + '" />');
//$(this).html('<input id="editbox" size="'+ $(this).text().length+'" style="font-size: 5px;" text value="' + $(this).text() + '" />');
old_value=$('.ajax input').val();
$('#editbox').focus();
});

// ==========================================ШАГ 2 - получили событие нажатия клавиатурыtty
//определяем нажатие кнопки на клавиатуре
$('#middle td.edit').keydown(function(event){
//alert (event.which);
//проверяем какая была нажата клавиша и если была нажата клавиша Enter (код 13)
   if(event.which == 192 || event.which == 13 )
   {
 // alert(param_count());   // подсчет среднего, надо еще количество "н"
  var resul = param_count($('.ajax input').val());
  // Надо подсчитать и записать Сред, Рейт
  $("#" + row_tek_idx + ">td:eq(4)").text(resul);    // записываем новое среднее значение в ячейку
  var field1="Сред";
 //----------------------------Отправляем в базу =====================
 var data_post;
 data_post= "value="+$('.ajax input').val()+"&id="+table_edit[3]+"&field="+table_edit[2]+"&table="+table_edit[1];
 var ret_post=send_post(data_post);
 var data_post1;
 data_post1= "value="+resul+"&id="+table_edit[3]+"&field="+field1+"&table="+table_edit[1];
 var ret_post=send_post(data_post1);
  
 $('.ajax').html($('.ajax input').val());
 $('.ajax').removeClass('ajax');
 table_edit.length=0;
}});
 
//===========================================================================================
$(document).on('blur', '#editbox', function(){
//$('.ajax').html($('.ajax input').val());
//   восстанавливаем данные
//alert ("Потеря фокуса");
$('.ajax input').val(old_value);
//$('.ajax').removeClass('ajax');
});


// работа с ЖУРНАЛОМ =======================
//при нажатии на наименование колонки  классом 'sort' сортировка записей
$('th.sort').click(function(){
//	alert ("Сортировка");
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
 $( "#middle" ).load( "/usr/7_programm.php",{'table':global_table,'param':operTbl,'namefld':nameFld} );
	
});







