
//============================================================================================вызываем журнал определенного класса ==================
//Динамическая загрузка
// Ждем полной загрузки документа
$(document).ready(function() {
//  если дождались, то клик будет обрабатываться
 $('td.tdm').click(function(){
	var select= document.getElementById("metric");
	alert ("Здесь:");
	$('.ajax').html($('.ajax input').val());
    //удаляем все классы ajax
    $('.ajax').removeClass('ajax');
   //Нажатой ячейке присваиваем класс ajax
    $(this).addClass('ajax');
    var nameFld;
 //   nameFld=encodeURIComponent($(this).text());
 //   nameFld='11';
	 nameFld=$(this).text();  // получили значение ячейки td
//	 alert(nameFld);  


switch(nameFld) {
  case 'Журнал':  // if (x === 'value1')
    $( "#left" ).load( "/usr/класс.php");
    break;

  case 'Календарный план':  // if (x === 'value2')
    $( "#right" ).load( "/usr/класс.php");
    break;

  default:
    
    break;
}


//$( "#middle" ).load( "http://u715138.s26.wh1.su/usr/7_programm.php" );
//var str=old_val.substr(1,1)+"_programm.php";
//$( "#left" ).load( "/usr/класс.php");
//$( "#right" ).load( "/usr/7_programm.php",{'table':tbl_proga,'param':post_proga} );
//$( "#middle" ).load( "/usr/7_programm.php" );
//$('.ajax input').val(old_val);
//$('.ajax').removeClass('ajax');
});
});
