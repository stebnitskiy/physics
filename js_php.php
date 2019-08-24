<?php
//https://basicweb.ru/jquery/jquery_event_scroll.php   УЧЕБНИК JQUERY
//https://metanit.com/web/jquery/2.1.php    УЧЕБНИК JQUERY
// Палитра цветов HTML https://colorscheme.ru/html-colors.html
include_once('func.php');
//<script src="//u715138.s26.wh1.su/usr/js/jur_servis.js"></script>
?>
<html >
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<head>
<title>Школа102.Физика</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
<script src="/usr/js/menu.js"></script>
<link href="style.css" rel="stylesheet" type="text/css"/>

</head>
 <BODY>
    <div class="header"> Шапка
        <div class="maxw">
        <table id="table_m">
         <tr>
            <td id="td_m" class='tdm' onMouseOver="className='Default2'" onMouseOut="className='td_m'" onClick="tes()">Журнал</td>
            <td id="td_m" class='tdm' onMouseOver="className='Default2'" onMouseOut="className='td_m'" onClick="tes()">Календарный план</td>
            <td id="td_m" onMouseOver="className='Default2'" onMouseOut="className='td_m'" onClick="location='http://1gbfiz-ru.1gb.ru/index.php?numPage=3'">Задание</td>
    		<td id="td_m" onMouseOver="className='Default2'" onMouseOut="className='td_m'" onClick="location='http://1gbfiz-ru.1gb.ru/index.php?numPage=4'">Тесты</td>
         </tr>
    	</table>
        </div>
    </div>

	<div id="wrapper" class="maxw">
    	<div id="left" ></div>
    	<div id="middle"></div>
    	<div id="right"></div>
	</div>
  </div>
</BODY>
</HTML>

  