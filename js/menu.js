var arr = new Array;   // Это  массив, в который складываем ....<>..... <>
var TBL_left = [];   // это так объявляется двумерный массив!!!!
var TBL_middle = [];   // это так объявляется двумерный массив!!!!
var global_table=[];
var arr_fld=new Array; // это наименования полей
var arr_rec=new Array;
var vsego_строк=0;
var vsego_столбцов=0;
var global_predmet=0;
var global_klass=0;
var global_tema="";
var global_papka="";   
var table_edit=[];  // если на редактировании находится несколько таблиц, но редактируем какую либо одну, то по клику помещаем сюда значения класса edit
//var table_edit_tek; // текущая таблица редактирования
var global_id="";
//============================================================================================вызываем журнал определенного класса ==================
var perem_div="";
var perem_data_post="";
var perem_url="";
var perem_sql_num=0;    // номер запроса, нам нужно по case здесь сделать div
// Ждем полной загрузки документа
$(document).ready(function() {
//  если дождались, то клик будет обрабатываться
 $('td.tdm').click(function(){
	var select= document.getElementById("metric");
//	alert ("Здесь:");
	$('.ajax').html($('.ajax input').val());
    //удаляем все классы ajax
    $('.ajax').removeClass('ajax');
   //Нажатой ячейке присваиваем класс ajax
    $(this).addClass('ajax');
    var nameFld;
 //   nameFld=encodeURIComponent($(this).text());
 //   nameFld='11';
	 nameFld=$(this).text();  // получили значение ячейки td
 //alert(nameFld);  


switch(nameFld) {
  case 'Журнал':  // if (x === 'value1')
	  // --right-width: 350px;
	//root.style.setProperty('--right-width', '350px');
    document.documentElement.style.setProperty('--right-width', '350px'); 
    $( "#middle" ).load( "/usr/pusto.php");
	$( "#right" ).load( "/usr/pusto.php");
	$( "#left1" ).load( "/usr/класс.php");
	
    break;
	
   case 'Резерв':  // if (x === 'value1')
	 
    //document.documentElement.style.setProperty('--right-width', '10px');  
    //$( "#middle" ).load( "/usr/pusto.php");
	//$( "#right" ).load( "/usr/pusto.php");
	//$( "#left1" ).load( "/usr/Меню_посещение.php");
    //alert("Посещение");
    break;	

   case 'Физика':  // if (x === 'value1')
  //   alert("Физика");
    document.documentElement.style.setProperty('--right-width', '10px');
    $( "#middle" ).load( "/usr/pusto.php");
	$( "#right" ).load( "/usr/pusto.php");
	//$( "#left1" ).load( "/usr/tst_класс.php");     // выводим объекты (классы)
    perem_sql_num=1;
	global_predmet=1;
	perem_div="left1";
	perem_data_post= "&div="+"left"+"&predmet="+global_predmet+"&sql_num="+perem_sql_num;
	perem_url="http://1gbfiz.ru/usr/test_predmet.php";
	global_table=TBL_left;
	global_papka=1;
	inic_global();
	
	send_recive();    // обращаемся на вывод в левый div
    break;	
    case 'Математика':  // if (x === 'value1')
 //   alert("Математика");
    document.documentElement.style.setProperty('--right-width', '10px');
    $( "#middle" ).load( "/usr/pusto.php");
	$( "#right" ).load( "/usr/pusto.php");
	//$( "#left1" ).load( "/usr/tst_класс.php");     // выводим объекты (классы)
    perem_sql_num=1;
	global_predmet=3;
	perem_div="left1";
	perem_data_post= "&div="+"left"+"&predmet="+global_predmet+"&sql_num="+perem_sql_num;
//	alert (perem_data_post);
	perem_url="http://1gbfiz.ru/usr/test_predmet.php";
	global_table=TBL_left;
	global_papka=3;
	inic_global();
	
	send_recive();    // обращаемся на вывод в левый div
    break;	
   case 'Календарный план':  // if (x === 'value2')
    //$( "#right" ).load( "/usr/класс.php");
    break;

  default:
    
    break;
}

});
});

function send_recive(){                      // отправляет запрос и получает div
//  асинхронная передача данных, т.е. функция, которая вызвала эту функцию, продолжает работу
// а это значит, что если нам нужно что-то делать с ответом от сервера, то это надо делать только в этой функции!!!  
//alert (data_str);
 $.ajax({ type: "POST", url:perem_url, data:perem_data_post, success: function(data){
	 
   onload_inic(data);
  //alert (data);
   getGlobal();
if (data==-1) {    //   получен ответ, но ошибка
	alert ("Сервер дал ответ:" +data);
}	

},
 error: function(data){     // ответ от сервера не получен
   alert(data);
}});
}
 
function onload_inic(data) {      // в массиве находится ответ от сервера. В этой функции происходит вывод в окно браузера
//	alert ("Загрузили");
//	alert (data);
	razobrat(data); // в двумерноммассиве TBL будут записи
	switch(perem_sql_num) {
   

   case 1:
      // нам надо вывести первый столбец всех строк, во втором столбце будет находиться ключ для следующего запроса 
    var kn="<p>Классы</p>";
	for (i=0; i<vsego_строк; i++) {	
//	  alert("0"+":"+i+"="+TBL[i][0]);
	  kn=kn+"<br><br><span><button id='kn_sl' style='width:60;' onclick='razdeli("+global_table[i][1]+");'>"+global_table[i][0]+"</button></span>";
	}   
	 document.getElementById(perem_div).innerHTML=kn;
	break;	
	 
	 
	 case 2:
	    var kn="<p>TEMЫ</p>";
	    var tg_tbl="<table id='tbl_temi' class='tbltemi'>";
	    var tg_td="";
	    var stroka_tr="";
	for (i=0; i<vsego_строк; i++) {	
       tg_td="";
	   tg_tr="<tr>";
	  for (j=0;j<vsego_столбцов;j++) {	 
        if (vsego_столбцов-1==j) {
//		   alert(global_table[i][j]);   // это наш номер теста, вставляем обработчик
		   tg_td=tg_td+"<td id='td_temi' class='tdtemi' onMouseOver=className='Default2' onMouseOut=className='tdtemi' onclick='clic_test("+global_table[i][j]+")';>"+global_table[i][j]+"</td>";
         //  tg_td=tg_td+"<td id='td_temi' class='tdtemi' onclick='clic_test("+i+")';>"+global_table[i][j]+"</td>";	//получим в функции номер строки	  
		} else {
		tg_td=tg_td+"<td>"+global_table[i][j]+"</td>";
		}
	   }
	  stroka_tr=stroka_tr + tg_tr+tg_td+"</tr>";
	}   
//	 alert (stroka_tr);
	 tg_tbl=tg_tbl+stroka_tr+"</table>";
	 document.getElementById(perem_div).innerHTML=tg_tbl;
	 break;
	default:
    
    break; 
//document.getElementById(perem_div).innerHTML=data; 
}}


function razobrat(data)   {
	
  // надо разобрать: "RE/TR/QWER/<>23/2/2/;23/2/2/;"
  // и поместить в массив: номер вопроса,имя файла, правильный ответ
    arr=data.split('<>');   // получаем массив 12//2//1//
  //alert (arr.length);							           23//2//2//;
  // array[0].length - длина уровня	
     // первая строка  - имена полей, вторая строка - это записи
   arr_fld=arr[0].split('/');   // в arr_fld имена полей 
   arr_rec=arr[1].split(';');    // строки записей 23//2//2//;23//2//2//;  ПРОБЛЕМА В ТОМ, что если 1/2/3/;, то последний / лишний
   var zapis=(arr_rec.length)-1;
  // alert(zapis);
   for (i=0; i<zapis; i++){
	 //   alert(arr_rec[i]);
	   
   }   
   vsego_строк=zapis;
   var count_fld=(arr_fld.length)-1;
   vsego_столбцов=count_fld;
//  alert ("Записей:"+zapis+"//Полей:"+count_fld);
   for (i=0; i<zapis;i++) {    // формируем массив строк записей  
	   var массив_записи=arr_rec[i].split('/');
	    global_table[i]=[];
	   for (j=0; j<(массив_записи.length)-1;j++) {    // формируем массив строк записей 
			global_table[i][j]=массив_записи[j];   // в arr_fld имена полей 
 //           alert(i+":"+j +global_table[i][j]);
	   }
   }	   
 	
}

function razdeli(razdel){   // загружаем раздел в средний div
//	alert (razdel);
	global_klass=razdel;
	perem_sql_num=2;
	perem_data_post= "&div="+"left"+"&predmet="+global_predmet+"&sql_num="+perem_sql_num+"&klass="+razdel;
	perem_url="http://1gbfiz.ru/usr/test_predmet.php";
	perem_div="middle";
	TBL_left=[];
	global_table=TBL_left;
	send_recive();    // обращаемся на вывод в средний div
}

function clic_test(num_tema1){   // загружаем раздел в средний div
     str=num_tema1;
	 str_num=Number(str);
//	 alert(str);
//	  alert(str_num);
	 
//    alert( num_tema1.split(/[^\d;]/g, ''));
//	global_tema=num_tema1;
    global_tema=str;
	perem_sql_num=1;
	
//	alert (global_klass+'/'+ num_tema);
//	stroka_GET='Класс':global_klass,'num_tema':num_tema;
	$( "#middle" ).load( "/usr/test.php", {'sql_num':perem_sql_num,'klass':global_klass,'num_tema':num_tema1,'predmet':global_predmet});                       // Это POST
//$( "#middle" ).load( "/usr/7_programm.php",{'table':old_val,'param':post_jurnal} );
//	alert (num_tema);
//	perem_sql_num=2;
//	perem_data_post= "&div="+"left"+"&Предмет="+global_predmet+"&sql_num="+perem_sql_num;
//	perem_url="http://1gbfiz.ru/usr/test_predmet.php";
//	perem_div="middle";
//	global_table=TBL_left;
//	send_recive();    // обращаемся на вывод в средний div
}

function inic_global() {
//	 alert("Старт");
//	var vpr= "<button id='start_tst' onclick=sled_vpr();>Следующий вопрос</button>";
// надо получить страничку с вопросами, но если вывод по одному вопросу, то выводим по одному, а если все, то выводим все 
// получаем:
//имена файлов вопросов, ответы к вопросам  и размещаем их в массив m_voprosi
//    login='login?';
//	 alert (login);
 //
 switch(global_predmet) {
		case 1:
		   global_papka="1gbfiz.ru/usr/";
			break;
		case 2:
		   global_papka="./js/ris/";	
			break;
		   global_papka="./js/ris/";	
        case 3:
			break;
	default:
    
    break;
}
}	
function getGlobal(){
 //   alert ("start");
	perem_data_post= "yuo="+"yuo";
	perem_url="http://1gbfiz.ru/usr/tik.php";
	get_data(); 
}	
    function get_data(){       
    $.ajax({ type: "POST", url:perem_url, data:perem_data_post, success: function(data){
//	alert (data);
	global_id=data;
if (data==-1) {    //   получен ответ, но ошибка
	alert ("Вы кто...:");
}	

},
 error: function(data){     // ответ от сервера не получен
   alert(data);
}});
}

