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
<style type="text/css">


/*  ====================================== из примера =========================*/
html {
        	height: 100%;
        }
        
        header, nav, section, main, article, aside, footer {
        	display: block;
        }
        
        body {
                height: 100%;
                width: 100%;
                background:#fefefe;
        }
        .maxw {
        	margin: 0 auto;
        	min-width: 240px;
        	max-width: 1920px;
        }
       header {
            min-width:240px;
        	width: 100%;
        	height: 100px;
        	background: #74C9FF;
        }




#container {
   min-height: 100px; 
   width: 100%;
   height: 1px; /* Требуется, чтобы дочерний блок взял высоту 100% */
   display: table;
} 
#wrapper {
                position: relative;
                margin: 0 auto;
                height: auto !important;
                height: 100%;
                min-height: 100%;
                padding:5px 0;
        }

.section {
        	width: 100%;
        	padding: 0 0 100px;
        	position: relative;
        }
        
          .section:after {
        	content: '';
        	clear: both;
        	display: table;
        }
		
		
#middle {
    vertical-align: top;  
	overflow-x: auto;
	font-size:0.6em;
	background:Silver;  /* белые тона MintCream	#F5FFFA	245, 255, 250 */ /* Серые тона Silver	#C0C0C0	192, 192, 192*/
	margin-right:-400px;						
}
#left {
	height:100%; 
    float:left;
    background:Orange;  /*  желтые тона Moccasin	#FFE4B5	255, 228, 181/Khaki	#F0E68C	240, 230, 140//Orange	#FFA500	255, 165, 0 */
	font-size:0.6em;
 }		

 #right {
/*	float:right; */
    vertical-align: top;
    height:100%;
    width:550px;
    overflow-x: auto;
    background:Lime;
	font-size:0.6em;

}

#left, #middle, #right {
   display: table-cell; 

/* table { display: block; overflow-y: auto;overflow-x: hidden; white-space: nowrap; }  */
 

table {
     border-collapse: collapse; /* Отображать двойные линии как одинарные */
	 font-size:90%; 
    }
td, th {
     border: 1px solid #800; /* Параметры границы */
     padding: 2px; /* Поля в ячейках */
	 
}
/*=============================== Меню ==========================================

#table_m {
	width:100%;
	left:30%;
	background: Moccasin; /*Blue Цвет фона таблицы Moccasin	#FFE4B5	255, 228, 181 */
    color: BLACK ;  /* Цвет текста */
    border-spacing: 0px; /* Расстояние между ячейками */
	bordercolor:BLACK;
	text-align: center;

}	
#td_m {
	text-align: center;
	width: 20%;
	height: 40px;

}

.Default 
{ 
    font-family:Verdana; /**/
    font-size:20px; 
    color:#000000; 
    cursor: hand; 
} 
.Default2 
{ 
    background: DarkKhaki; /*MidnightBlue  Khaki	#F0E68C	240, 230, 140*/
    cursor: hand; 
} 
	
</style> 

</head>
 <BODY>
 <header> Шапка
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
 </header>
 
 
   <div id="wrapper"> 
     <div class="section maxw">   
	  
		<div id="left" ></div>
		<div id="middle"></div>
		<div id="right"></div>
	</div>  
  </div>
</BODY>
</HTML>

  