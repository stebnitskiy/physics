var smena=0;
var p_div="<div id='id_test' style='margin-left: auto;margin-right: auto;width: 990px;text-align:center;line-height: 0;'>";
var p_button="<button class='inline' id='kn_sl' onclick='proverit();'>Самопроверка</button></div><br><br>";
var butПроверить="<button class='inline' id='kn_sl' onclick='mail_mne();'>Отправить на оценку в журнал</button>";
var m_nomer_po_poradku=new Map(); // номер по порядку, который высвечивается на сайте
var m_nomera_vopros=new Map();  // порядковый номер вопроса;
var m_voprosi=new Map();  // сюда принимаем имена файлов вопросы;
var m_otveti=new Map();  // сюда принимаем ответы правильные;
var m_ball=new Map();  // сюда принимаем баллы за ответ ;
var m_sposob=new Map(); // сюда принимаем способ вывода вопроса:0-картинка, 1-текст
var m_vopros_txt=new Map(); // сюда принимаем вопрос TXT
var m_skolko_otvetov=new Map(); // сюда записываем количество ответов задачи (вопроса)
var pictures=new Map() ;// Картинки

var m_vopros_variant_txt=new Map(); // сюда принимаем варианты ответов TXT
var m_otveti_usr=new Map();  // сюда принимаем ответы Пользователя;
var vsego_voprosov=0;       //  Всего вопросов в тесте. 
var arr=new Map();
var массив_картинки =new Map();  
let recField={"задачи_ответы":[]};  // правильные ответы: поле:ответ
let otvetiUsr={"user_ответы":[]};  // Ответы пользователей правильные ответы: поле:ответ
let RezultatUsrVoprosi={"user_результат_вопросы":[]};  // результат ответов по вопросам

var на_ОЦЕНКУ="Не оценивать";

function send_post(data_str){                      // отправляет запрос и получает ответ
 // alert("");
// m_voprosi[0]="1";
 $.ajax({ type: "POST", url:"http://1gbfiz.ru/usr/test_get.php", data:data_str, success: function(data){
 //при удачном выполнении скрипта, производим действия
//  alert(global_id);   // готов принимать JSON для отладки
if (global_id == 26) {
	// только для меня
	start_test(10);
	JStestGet(data);
} else {
//alert(data);
// alert(JSON.stringify(data));
  // надо разобрать: "0120312120,r;0120312121,q;0120312123,8";
  // и поместить в массив: номер вопроса,имя файла, правильный ответ
	arr=data.split(';');   // получаем массив 0120312120,r
								//    0120312121,q
 //  alert (arr[0]);
 //array.length - объем многомерности (количество уровней)
 // array[0].length - длина уровня	
	var zapis=(arr.length)-1;
	vsego_voprosov=zapis;
//  alert (arr[0].length); 
	let i=0;
  for ( i = 0; i < zapis; i++)   {
	 let stroka=arr[i];
//	 alert (stroka);
	 var arr_prom=stroka.split('#');
//	 alert (arr_prom[0]);
	 m_nomer_po_poradku[i]=i+1;        //номер по порядку для сайта
	 m_nomera_vopros[i]=i+1;           // порядковый номер вопроса в базе
	
 	m_voprosi[i]=arr_prom[0];         // имя файла
//  alert (m_voprosi[i]);	
	m_ball[i]=arr_prom[2];				//балл
	 m_sposob[i]=arr_prom[3];			// способ вывода вопроса:0-картинка с предоставлением вариантов ответа, 1-текст спредоставлением вариантов ответа, 2-текст без вариантов ответа.
										// 3 - картинка + текст с предоставлением вариантов ответа, 4 картинка + текст без вариантов ответа // 
	m_vopros_txt[i]=arr_prom[4];			// здесь текст на случай, что m_sposob[i]=1
	var telo_voprosa=arr_prom[4].split('!');
	m_vopros_txt[i]=telo_voprosa[0];
	var arr_otveti=arr_prom[1].split(',');    //  1,2 - два ответа, 12
	m_vopros_variant_txt[i]= telo_voprosa[1].replace(/\r|\n/g, '');	     // удаляем перевод строки в массиве m_vopros_variant_txt[i]   все варианты предлагаемых ответов
	let variants=m_vopros_variant_txt[i].split('|'); // получили массив вариантов ответов, надо перемешать.. c учетом номеров правильных ответв!!!.
	let skolko_variant=(variants.length);
	var meshat_da_net=0;     // 0 - не перемешивать, 1 - перемешать проставляем порядковые номера и не мешаем!!! ???
	 //peremeshat_variants_otvetov(arr_otveti,variants,meshat_da_net);  //arr_otveti[] массив с номерами правильных ответов 
	var stroka_otvetov='';
	var skolko_otvetov_v_voprose=(arr_otveti.length);
	m_skolko_otvetov[i]=skolko_otvetov_v_voprose;
	let m=0;
	let m_name_ответ=[];
	let m_value_ответ=[];
	for (m=0; m < skolko_otvetov_v_voprose;m++) {   // формируем строку правильного ответа 1,3   - два ответа, их значения 1 и 3. строка=13
		 stroka_otvetov=stroka_otvetov+arr_otveti[m];
//		 alert (arr_otveti[m]);
		 let tuta=arr_otveti[m].split(':');
//		 alert(tuta[0]);
//		 alert(tuta[1]);
		 m_name_ответ[m] =  tuta[0] ;
		 m_value_ответ[m]=  tuta[1] ;
		 
	}	
  // 	 
	 let meetup = {
			title:  m_name_ответ,
			value:m_value_ответ,
			count:  skolko_otvetov_v_voprose
};
//	alert ( JSON.stringify(meetup) );	
//	alert( meetup.title[0] ); // 1
	recField.задачи_ответы[i]=meetup;
//	alert (recField.задачи_ответы[i].title[0]);
//	alert(stroka_otvetov);
	//alert(строка_name_ответ);
	//alert(строка_value_ответ);
	// m_otveti[i]=stroka_otvetov;     // формируем строку правильного ответа !2,1,3   - два ответа, их значения 1 и 3. строка=13
    // m_otveti[i]=JSON.stringify(meetup);   // преобразовали  в строку
	m_otveti[i]=JSON.stringify(meetup);   // записали строку в массив
//		 m_otveti[i]=meetup;
	// alert (m_otveti[i]);	
	 let sposob=0;
     sposob=Number(m_sposob[i]);
  switch(sposob) {	 
    case 0:
	  m_otveti[i]=arr_prom[1];
	 break; 
    case 2:
	  m_otveti[i]=JSON.stringify(meetup);
	case 1:	
 
// ПОКА не ПЕРЕМЕШИВАЕМ
//     responseText.replace(/\r|\n/g, '')
     meshat_da_net=0;    
     let peremeshali=peremeshat_variants_otvetov(arr_otveti,variants,meshat_da_net);  //arr_otveti[] массив с номерами правильных ответов  
     variants=peremeshali; 
	 let kontrol=array_to_str(variants,'|');    // добавили разделители вариантов ответов
  //	 alert (kontrol);
   m_vopros_variant_txt[i]=kontrol;           // записали перемешанные вопросы
   m_otveti[i]=JSON.stringify(meetup);
    break;
	case 3:
	 // alert(global_predmet+'//'+global_klass+'//'+global_tema);  //1//1//60  физика//класс 7// тема 60
//	  var telo_voprosa=arr_prom[4].split('!');
//	  m_vopros_txt[i]=telo_voprosa[0];
	  m_otveti[i]=JSON.stringify(meetup);   // записали строку в массив
	  //m_otveti[i]=arr_prom[1];
	break;
  } 
 // alert (arr[i]);
 }	 													

 // качем картинки в массив
 массив_картинки=getImages(zapis);
 
 // Надо перемешать!!!!
 //  peremeshat_vse_voprosi(zapis);    // перемешиваем вопросы
  var p_html="";
  var nomer=0;
  var tegPAN={"вопросы":[]};    // Это <вопросы>
// document.getElementById("id_test").innerHTML+=p_div;
 for ( nomer = 0; nomer < zapis; nomer++)   {
	let p_odin= odin_vopros(nomer);
	p_html+=p_odin; 
//	document.getElementById("id_test").innerHTML+=p_odin;
	let SONpHTML = {
   		  Вопрос: p_odin
            };
	tegPAN.вопросы[nomer]=SONpHTML;
  }
 let divHTML={
	  Заголовок: p_div,
	  tegPAN,
	  Проверить: butПроверить,
	  НЕпроверять: p_button
  }
//document.getElementById("id_test").innerHTML+=butПроверить;
//document.getElementById("id_test").innerHTML+=p_button;
//  alert ( JSON.stringify(divHTML) );

document.getElementById("id_test").innerHTML=p_div +p_html+butПроверить+p_button;
 
// document.getElementById('div').innerHTML += header;
//document.getElementById('div').innerHTML += '<ul>' + list + '</ul>';

// Конечно, лучше создавать элементы через
// var div = document.createElement('div');
// наполнять через div.innerHTML = "text";
// и добавлять их через element.appendChild(div);
 
 
 
} 
if (data==-1) {    //   получен ответ, но ошибка
	alert ("Извините, тестирование невозможно");
}	

},
 error: function(data){     // ответ от сервера не получен
   alert(data);
}});
}
// ++++++++++++++++++++++++++++++скачиваем картинки -------------------  
 
 function getImages(n){
// alert ("Сколько картинок" + n);
 //let putImages=global_papka+global_predmet+"/"+global_klass+"/"+global_tema+ "/";  //+ m_voprosi[i] +'.PNG';
 let putImages=global_predmet+"/"+global_klass+"/"+global_tema+ "/";  //+ m_voprosi[i] +'.PNG';
 var arrayImage = new Map(); // определяете искомый массив объектов изображений
 let mi=0;
 for(mi = 0; mi < n; mi++ ){
      // массив картинок начинаем с индекса 1
	sposob=Number(m_sposob[mi]);
//  alert("Способ=" +sposob);
	switch(sposob) { 
	case 0:
	  arrayImage[mi] = new Image();
	  arrayImage[mi].src = putImages+m_voprosi[mi] +'.PNG';
	 break;
	 case 1:
	 break;
	 case 2:
	  arrayImage[mi] = new Image ();
	  arrayImage[mi].src = putImages+m_voprosi[mi] +'.PNG';
	 break;
	 case 3:
	arrayImage[mi] = new Image();
//	  alert("Путь="+ putImages +  m_voprosi[mi] +".PNG");
	let путь="";
	путь=putImages +  m_voprosi[mi] +".PNG";
	predmet=String(global_predmet);
	klass=String(global_klass);
	tema=String(global_tema);
	  //nf=String(m_voprosi[mi]);
//	  str_str=predmet+"/"+klass+"/"+tema+"/"+ m_voprosi[mi] +'.PNG';
//	  alert(str_str);
	arrayImage[mi].src = putImages+m_voprosi[mi] +'.PNG';                              //putImages +  m_voprosi[mi] +'.PNG';
	 // alert(arrayImage[mi]];
//	  alert ("SRC="+arrayImage[mi].src);
	 break;
  }
//   arrayImage [mi] = new Image ();

	
 //   arrayImage [mi].src = putImages +  m_voprosi[mi] +'.PNG';
	
 };
  return arrayImage;
}

// конец скачивания +++++++++++++++++++++++++

function slojn() {                  // это тесты на оценку
//	 if (smena==0) {
//		smena=1;
		//alert("Меняем на 1");
//		document.getElementById('slojn_tst').innerHTML = "Выводится по одному вопросу теста. Есть дополнительные баллы за выполнение теста. Изменить?"
//	 }
//	 else {
	 // alert("Меняем на 0");
//	  smena=0
//	  document.getElementById('slojn_tst').innerHTML = "Выводятся все вопросы теста. Нет дополнительных баллов за выполнение теста. Изменить?"
//	 }
	perem_sql_num=2;
	data_post= "&predmet="+global_predmet+"&sql_num="+perem_sql_num+"&klass="+global_klass+"&tema="+global_tema;
 //   alert (data_post);
    send_post(data_post);
}

function start() {  // это тест обучения
//	 alert("Старт");
//	var vpr= "<button id='start_tst' onclick=sled_vpr();>Следующий вопрос</button>";
// надо получить страничку с вопросами, но если вывод по одному вопросу, то выводим по одному, а если все, то выводим все 
// получаем:
//имена файлов вопросов, ответы к вопросам  и размещаем их в массив m_voprosi
//    login='login?';
//	 alert (login);
 //switch(global_predmet) {
//		case 1:
//		   global_papka="./";
//			break;
//		case 2:
//		   global_papka="./js/ris/";	
//			break;
//		   global_papka="./js/ris/";	
//        case 3:
//			break;
//	default:
 //   
 ////   break;
 

	
   
    perem_sql_num=1;
    data_post= "&predmet="+global_predmet+"&sql_num="+perem_sql_num+"&klass="+global_klass+"&tema="+global_tema;
 //   alert (data_post);
    send_post(data_post);
 }

function proverit() {
//   alert ("Проверяем...");
	for ( i = 0; i < vsego_voprosov; i++)   {        // Записываем ответы, на одном вопросе может быть несколько ответов
//		var num_z=i+1;
//		var otvet=document.getElementById('z_'+ m_nomera_vopros[i]).value;
//		var otvet=document.getElementById('z_10').value;
        let num1=1+i;
		let idx1=num1.toString();
		let num2=0;
		let idx2=num2.toString();
		let idx=idx1 + idx2;
//		alert (idx);
		var otvet=document.getElementById('z_'+idx).value;
		m_otveti_usr[i]=otvet;
//		alert(m_otveti_usr[i]);
        let m=0;
		var vsegoVoprosov=Number(recField.задачи_ответы[i].count);    // сколько ответов в текущей задаче
//	    alert(vsegoVoprosov + 'i=' + i );
	 let m_name_ответ=[];
	 let m_value_ответ=[];
	 for (m=0; m < vsegoVoprosov;m++) {   
         let idx2=m.toString();
		 let numKod=idx1 + idx2;
		 var otvet=document.getElementById('z_'+ numKod).value;
	     m_name_ответ[m] =  recField.задачи_ответы[i].title[m] ;
		 m_value_ответ[m]=  otvet ;
//		 m_name_ответ[m]=i;
//		 m_value_ответ[m]=m;
	 } 
	
	let recUsrOtvet = {
          title:  m_name_ответ,
          value:  m_value_ответ,
		  count:  recField.задачи_ответы[i].count
         };
//	alert ( JSON.stringify(recUsrOtvet) );	
//	alert( meetup.title[0] ); // 1
//recField.задачи_ответы[i]=meetup;
    otvetiUsr.user_ответы[i]=recUsrOtvet;  // Ответы пользователей правильные ответы: поле:ответ
	
} 
//  alert ( JSON.stringify(otvetiUsr) );	
//  alert ( JSON.stringify(recField) );
   var ball=0.0;
   var otveti="";     // строка для вывода на сайта
   var num=0; 
   var ball_vsego=0.0; 
   var vsegoOtvetov=0;
   var vsegoOtvetovvern=0;
   //alert ("Сравниваем");
   for ( i = 0; i < vsego_voprosov; i++)   {        // сравниваем m_otveti_usr (ответ ученика) с ответом m_otveti
	 num=i+1;
     var m=0;
//	 alert ("По полям");
    
	
	var vsego=recField.задачи_ответы[i].count;
	var z=0;
//	alert (otvetiUsr.user_ответы[i].value[0]);
//	alert (recField.задачи_ответы[i].value[0]);
//	alert (otvetiUsr.user_ответы[i].value[1]);
//	alert (recField.задачи_ответы[i].value[1]);
	var vern=0;
	for (m=0; m < recField.задачи_ответы[i].count; m++) {           //  цикл внутри вопроса по подответам
 //   alert ("Зашли");
//	if(m_otveti_usr[i] == m_otveti[i]){
   
   if(otvetiUsr.user_ответы[i].value[m]==recField.задачи_ответы[i].value[m]) {     // пока только проверим один ответ
//	alert (otvetiUsr.user_ответы[i].value[m]);
//	alert (recField.задачи_ответы[i].value[m]);
	vern=vern+1;
	vsegoOtvetovvern=vsegoOtvetovvern+1;
//	alert (vern);
	//a=+m_ball[i];
	//b=+ball;
	//ball=a+b;
 //   otveti = otveti +"<br><span id='vo'>Вопрос "+num+" . Вы ответили верно. Ваш ответ: "+m_otveti_usr[i]+"</span>";
	
	//otveti = otveti +"<br><span id='vo'>Вопрос "+num+" . Вы ответили верно.</span>";
}
 else {
//    otveti = otveti +"<br><span id='nvo'>Вопрос "+num+". Вы ответили не верно. Ваш ответ: "+m_otveti_usr[i]+"</span>"; 
//	otveti = otveti +"<br><span id='nvo'>Вопрос "+num+". Вы ответили не верно. </span>"; 
  
  }
   a=+(m_ball[i]);
   b=+ball_vsego;
   ball_vsego=a+b;
 }
    vsegoOtvetov=vsegoOtvetov+recField.задачи_ответы[i].count;
//  vsego=vsegoVoprosov;
  
  z=vern/vsego;  // сколько вопросов в задаче ответил правильно
  if (vern==vsego) {
//	alert ("a=" + m_ball[i] + "|vern="+ vern + "ответов в задаче=" + recField.задачи_ответы[i].count );
	otveti = otveti +"<br><span id='vo'>Вопрос "+num+" . Вы ответили ВЕРНО.</span>";  
	q=+m_ball[i];
	w=+ball;
	ball=q+w;
	let otvet_da="Верно";
	var rezultat_вопрос={
			 Номер : num,
			 Ответ : otvet_da
		};
//	otveti_результат={Результат:[]};
  } if (z!=0 && vern!=vsego){
	otveti = otveti +"<br><span id='von'>Вопрос "+num+" . Вы ответили ЧАСТИЧНО.</span>"; 
    s=+m_ball[i]*z;    
	t=+ball;
    ball=s+t;
    let otvet_danet="Частично";	
	var rezultat_вопрос={
			 Номер  : num,
			 Ответ  : otvet_danet
			};
  } if (z==0) {
    otveti = otveti +"<br><span id='nvo'>Вопрос "+num+". Вы НЕ ОТВЕТИЛИ. </span>";
	let otvet_net="Не ответили";
	var rezultat_вопрос={
			 Номер  : num,
			 Ответ  : otvet_net
		};
//		alert("Не ответили");
//        alert ( JSON.stringify(rezultat_вопрос) ); 
 }	
  
//    alert ( JSON.stringify(rezultat_вопрос) );	
//	 alert( rezultat_вопрос.Ответ[0] ); // 1
    RezultatUsrVoprosi.user_результат_вопросы[i]=rezultat_вопрос;    // Это резултат ответа одного вопроса
}
//alert ( JSON.stringify(RezultatUsrVoprosi) );	
vsego_zadach = vsego_voprosov;
//procent_vip = ball/vsego_zadach * 100;
//alert (ball_vsego);
if (ball_vsego==0) {    // ВСЕ ВЕРНО
	procent_vip=100;
	procent_vip = ball/ball_vsego * 100;
    procent_vip = procent_vip.toFixed(1);  
} else {	
procent_vip = vsegoOtvetovvern/vsegoOtvetov * 100;
procent_vip = procent_vip.toFixed(1);
}

ocenka=ocenka_f(procent_vip);
//document.getElementById("rezultat").innerHTML = "<span id='ot'>Задания выполнены верно на "+procent_vip+"%.</span><br><br>"+otveti;
document.getElementById("id_test").innerHTML = "<span id='ot'>Задания выполнены верно на "+procent_vip+"%. Ваша оценка: "+ocenka+"</span><br><br>"+otveti;
//и надо записать результаты теста, т.е. ведем статистику.... по тестам пользователя
// надо отправить на почту мне результат:
//для этого достаточно передать строчку:
//alert('Предмет:'+global_predmet+',Класс:'+global_klass+',Тема:'+global_tema);
//let otvetiUsr={"user_ответы":[]};  // зздесь ответы ученика
let posta="";
var rezultat_test={
                     Предмет:global_predmet,
					 Класс:global_klass,
					 Тема:global_tema,
					 Почта:posta,
					 Вопросов: vsego_voprosov,
					 Процент:procent_vip,
					 Оценка:ocenka,
					 Проверить:на_ОЦЕНКУ,     // если единица, то это на оценку в журнал
					 RezultatUsrVoprosi }; // Это заголовок теста ученика + ответы на вопросы
//alert ( JSON.stringify(rezultat_test));   
// передаем данные:
var url_server="http://1gbfiz.ru/usr/STAT_usr.php"
send_statistik(url_server,JSON.stringify(rezultat_test));   // передаем строку методом POST
//send_statistik(url_server,rezultat_test);  // передали JSON объект
}

function mail_mne() {
	 на_ОЦЕНКУ="Да";
	 proverit();
}
  
function ocenka_f(proc_vip){
	if (proc_vip<50) { return 2;}
	if(proc_vip>=50 &&  proc_vip<76) {return 3;}
	if(proc_vip>=76 &&  proc_vip<85) {return 4;}
	if(proc_vip>=86) {return 5;}
}

function peremeshat_vse_voprosi(dlina) {
 
//	alert("вызов");
	var iArr_lotto=lotto(1, dlina, dlina);


  for ( i = 0 ; i < dlina; i++) {
         var tmp=m_nomera_vopros[i];        
         m_nomera_vopros[i]=m_nomera_vopros[iArr_lotto[i]-1];
		 m_nomera_vopros[iArr_lotto[i]-1]=tmp;

		 var tmp=m_voprosi[i];
		 m_voprosi[i]=m_voprosi[iArr_lotto[i]-1];
		 m_voprosi[iArr_lotto[i]-1]=tmp;
 
         var tmp=m_otveti[i];
		 m_otveti[i]=m_otveti[iArr_lotto[i]-1];
		 m_otveti[iArr_lotto[i]-1]=tmp;
		 
		 var tmp=m_ball[i];
		 m_ball[i]=m_ball[iArr_lotto[i]-1];
		 m_ball[iArr_lotto[i]-1]=tmp;
		 
		 var tmp=m_sposob[i];
		 m_sposob[i]=m_sposob[iArr_lotto[i]-1];
		 m_sposob[iArr_lotto[i]-1]=tmp;
		 
		 var tmp=m_vopros_txt[i];
		 m_vopros_txt[i]=m_vopros_txt[iArr_lotto[i]-1];
		 m_vopros_txt[iArr_lotto[i]-1]=tmp;
		 
		 var tmp=m_otveti_usr[i];
		 m_otveti_usr[i]=m_otveti_usr[iArr_lotto[i]-1];
		 m_otveti_usr[iArr_lotto[i]-1]=tmp;
		 
    }


}

//peremeshat_variants_otvetov(arr_otveti,variants);  //arr_otveti[] массив с номерами правильных ответов  
 													//variants[] массив с номерами всех предлагаемых ответов
function peremeshat_variants_otvetov(otveti,varianti_voprosi, da_net) {
  let dlina_voprosov=(varianti_voprosi.length);
  let dlina_otvetov=(otveti.length);
  let i=0;
  let k=0;
  if (da_net==0)      {
  for (i=0; i< dlina_voprosov ; i++) {let numer = i; numer++; numer=numer + '.'; let zamena=numer+varianti_voprosi[i]; varianti_voprosi[i]=zamena;}
//  alert ('i='+i);
  return varianti_voprosi;}
//  alert (da_net); 

  let  iArr_lotto=lotto(1, dlina_voprosov, dlina_voprosov);   // в массиве iArr_lotto числа в случайном порядке от 1 до dlina
  let Arr_varianti_otveti=[];
   for ( i = 0 ; i < dlina_voprosov; i++) {Arr_varianti_otveti[i]=varianti_voprosi[i];}
// alert (dlina +"/" + dlina_otvetov);
//  return 0;
  for ( i = 0 ; i < dlina_voprosov; i++) {
	let tmp=varianti_voprosi[i];
	varianti_voprosi[i]=varianti_voprosi[iArr_lotto[i]-1];   // взяли вопрос с номером iArr_lotto[i]-1 и поместили в i
	varianti_voprosi[iArr_lotto[i]-1]=tmp;                     // а на его место поместили вопрос c i
//   alert ('i='+i); 
 }
 
 for (k=0; k < dlina_otvetov; k++) {
   let nomer_otv=otveti[k] ;
   let txt_otv=Arr_varianti_otveti[nomer_otv-1];
 //  alert (txt_otv);
 for (i=0; i< dlina_voprosov ; i++) {
	  if (txt_otv==varianti_voprosi[i]) {
	   otveti[k]=i+1 ;
//	   alert (otveti[k]);
	   break;
	   }
	 }
 }
 for (i=0; i< dlina_voprosov ; i++) {let numer = i; numer++; numer=numer + '.'; let zamena=numer+varianti_voprosi[i]; varianti_voprosi[i]=zamena;}

 
 }	

function array_to_str(sam_array,rzd)  {    // массив преобразуем в структуру  строка0 rzd строка1 
 let skolko=(sam_array.length);
 let i=0;
 let structura='';
 for (i=0; i<skolko-1; i++)  {structura=structura + sam_array[i] +'|';}
 structura=structura + sam_array[skolko-1];
 return structura;
}

function lotto(Bottom, Top, Amount)  {
	 let itog=[];
	 let iArr=[];
	 var j=0;
	 var i=0;
	for ( i = Bottom; i <= Top; i++)  {
		iArr[j] = i;
		j++;
 }	
 
	for (i = Top; i>=Bottom; i--) {
		 var r=(Math.random()*(i-Bottom+1))+Bottom;
		 r=r.toFixed(0);
		 if (r > Top){ r=Top;}
//		 alert ('случайное='+r);
		 var temp = iArr[r-1];
         iArr[r-1] = iArr[i-1];
         iArr[i-1] = temp;
	 }	
 return iArr;	 
}

function array_rec(str_sours,rzd) {                                         // получает строку и разделитель, возвращает массив <номер строки, значение>
 let array_table=[];
 let array_str=str_sours.split(rzd);
 let count_rec=(array_str.length);
 return array_str;
//let ii=0;
//for (ii=0; i<count_rec; ii++) {    // формируем массив строк записей  
//	    array_table[ii]=[];
//		array_table[ii][0]=ii+1;
//		array_table[ii][1]=array_str[ii];
 }
// return array_table;
//}

function send_statistik(url_server,data_str){                      // отправляет запрос и получает ответ
//  асинхронная передача данных, т.е. функция, которая вызвала эту функцию, продолжает работу
// а это значит, что если нам нужно что-то делать с ответом от сервера, то это надо делать только в этой функции!!!  
//alert (data_str);
 $.ajax({ type: "POST", url:url_server, data:data_str, success: function(data){
// alert(data);
if (data==-1) {    //   получен ответ, но ошибка
	alert ("Сервер дал ответ:" +data);
}	

},
 error: function(data){     // ответ от сервера не получен
   alert(data);
}});
}

function changeImage(страница)
{
//document.getElementById('banner').src = images[Math.round((Math.random() * 9))];
document.getElementById("id_test").innerHTML=страница;   // загрузили div и повесили кнопку Отправить на проверку,результат
}
// -------------------------------  Рагребаем
function odin_vopros(R) {
 // var p_html="";
 // var perv_kartinka=0;
//  let i=0;
//  for ( i = 0; i < zapis; i++)   {
     var div_вопрос_html="<div id='vopros"+m_nomera_vopros[R]+"'>";
	 var p_номер_вопроса_сайт="<p class='vopros_test'>Вопрос "+m_nomer_po_poradku[R]+"</p>";
     var sposob=0;
     sposob=Number(m_sposob[R]);
//	 alert("И:" + R + "/Способ:" +sposob+ "/Номер файла:" + m_voprosi[R]);
  switch(sposob)  {
 
	case 0:                      // картинка
	 var сам_вопрос=global_papka+m_voprosi[R]+'.PNG';
	 var текст_вопрос="<p><span id='v_" + m_nomera_vopros[R]+"'></span><img src=" +сам_вопрос+"></p>";     // поместили картинку
     var варианты_ответа="";
//	 let title_otvet="Ответ:<input type='text' id='z_"+m_nomera_vopros[i]+"'></p></div>";
			//<div id="vopros1" style="display:block;">
			//<p>Вопрос 1</p>
			//<p><span id="v_1"></span> <input type="text" id="z_1"></p>
			//</div>
	 var поле_ответ="<p class='otvet_test'>Ответ:<input type='text' id='z_"+m_nomera_vopros[R]+"'></p></div>";    
	 break;
	 case 3:  // картинка и текст
 //     var kartinka=global_papka+global_predmet+'/'+global_klass+'/'+global_tema+'/'+ m_voprosi[i] +'.PNG';	
      
//      alert("Вход case 3");
	  
	 // var kartinka=массив_картинки[i].src;
	  let k=R;   // это для массива картинок (с 0 индекса не тянутся?)
	//  alert ("Картинка SRC=" +массив_картинки[k].src);
	  var kartinka=массив_картинки[k].src;
	  var текст_вопрос="<p><span id='v_" + m_nomera_vopros[R]+"'></span><img src=" +kartinka+" align='right' alt='Картинка' /><p class='vopros_test'>" + m_vopros_txt[R].split(/\r?\n/).join('<br/>')+"</p></p>";     // поместили картинку
//	   alert(текст_вопрос);

//	  var текст_вопрос="<p><span id='v_" + m_nomera_vopros[i]+"'></span><img  name ='myImg' align='right'/><p class='vopros_test'>" + m_vopros_txt[i].split(/\r?\n/).join('<br/>')+"</p></p>";     // поместили картинку
//	  document.images["myImg"].src = массив_картинки[i].src;
	  var варианты_ответа="";
	  var title_otvet='';
//	  alert (recField.задачи_ответы[i].count);  
		let M=0;
		for (M=0; M < Number(m_skolko_otvetov[R]); M++){
//             alert(recField.задачи_ответы[i].title[m]);
			 title_otvet=title_otvet + recField.задачи_ответы[R].title[M] + ":<input type='text' id='z_" + m_nomera_vopros[R]+ M + "' class='fieldInput'>";
		 }
	 //var поле_ответ="<p class='otvet_test'>Ответ:<input type='text' id='z_"+m_nomera_vopros[i]+"'></p></div>";
	 var поле_ответ="<p class='otvet_test'>"+ title_otvet + "</p></div>";
	 break;
	case 2:
	    var текст_вопрос="<p><span id='v_" + m_nomera_vopros[R]+"'></span><p class='vopros_test'>" + m_vopros_txt[R].split(/\r?\n/).join('<br/>')+"</p></p>";     // поместили текст
 //       alert(текст_вопрос); 
		var варианты_ответа="";
//      var p_номер_вопроса_сайт="";
        var title_otvet='';
		let T=0;
	    for (T=0;T < Number(m_skolko_otvetov[R]); T++){
//            alert(recField.задачи_ответы[i].title[m]);
			 title_otvet=title_otvet + recField.задачи_ответы[R].title[T] + ":<input type='text' id='z_" + m_nomera_vopros[R] + T + "' class='fieldInput'>";
		 }
		 var поле_ответ="<p class='otvet_test'>"+ title_otvet + "</p></div>";
//		  alert(поле_ответ);
	 break;
	case 1:                    // вопрос текст
      var поле_ответ="<p class='otvet_test'>Ответ:<input type='text' id='z_"+m_nomera_vopros[R]+"0' class='fieldInput'></p></div>";
	  var текст_вопрос="<p><span id='v_" + m_nomera_vopros[R]+"'></span><p class='vopros_test'>" + m_vopros_txt[R].split(/\r?\n/).join('<br/>')+"</p></p>";     // поместили текст
 //     alert(текст_вопрос);
	  var варианты_ответа="";
	  let variants=m_vopros_variant_txt[R].split('|');
	  let dlina_variants=(variants.length);
	  let KK=0;
	  for (KK=0; KK < dlina_variants; KK++) {
      //"<p ><span id='v_otv'></span><p class='variant_vopros'>" + m_vopros_variant_txt[i]+"</p></p>";     // поместили текст	 
	    
		варианты_ответа=варианты_ответа + "<p ><span id='v_otv'></span><p class='variant_vopros'>" + variants[KK]+"</p></p>";     // поместили текст
	  // alert (варианты_ответа);
	  }
	  var title_otvet='';
	  for (N=0; N < Number(m_skolko_otvetov[R]); N++){
//             alert(recField.задачи_ответы[i].title[m]);
			 title_otvet=title_otvet + recField.задачи_ответы[R].title[N] + ":<input type='text' id='z_" + m_nomera_vopros[R] + N + "' class='fieldInput'>";
		 }
	  var поле_ответ="<p class='otvet_test'>"+ title_otvet + "</p></div>";
	  
	break;	
  } 																				//text.split(/\r?\n/).join('<br/>')
//  alert("Выход" + текст_вопрос) ; 
  //var поле_ответ="<p class='otvet_test'>" + title_otvet ;  // поместили поле для ответа 
 //   var поле_ответ="<p class='otvet_test'>Ответ:<input type='text' id='z_"+m_nomera_vopros[i]+"'></p></div>";
 //   p_html=p_html+div_вопрос_html+ p_номер_вопроса_сайт+текст_вопрос+варианты_ответа+поле_ответ;
   // p_html=p_html+div_вопрос_html+ p_номер_вопроса_сайт+текст_вопрос+варианты_ответа+поле_ответ;	
	//document.getElementById("id_test").innerHTML=p_div +p_html+butПроверить+p_button;   // загрузили div и повесили кнопку Отправить на проверку,результат
    var str_HTML=div_вопрос_html+ p_номер_вопроса_сайт+текст_вопрос+варианты_ответа+поле_ответ;
	//var str_HTML= p_div +p_html+butПроверить+p_button;   // загрузили div и повесили кнопку Отправить на проверку,результат
 //   alert (str_HTML);
 //   setTimeout('alert(1)', 2000);  // Через две секунды выскочит сообщение   
//   document.getElementById("id_test").innerHTML=str_HTML;
	return str_HTML;
//	changeImage(str_HTML);
//	var changeInterval = setInterval('changeImage(str_HTML)',10000);
// }
 }
 
 function start_test(skolko_minut) {
  document.documentElement.style.setProperty('--right-width', '50px');
  alert("Тута");
  var p_timer="<p>00</>";
  document.getElementById('#right').innerHTML=p_timer;
}
//========================== ОТЛАДКА JSON ===================================
function JStestGet(data){
 // формируем цикл по вопросам задачи
 //преобразуем 
	alert ("Зашли в анализ");
	alert (data);
//JSON_str=JSON.stringify(data); 
//alert(JSON_str);
//var a = JSON.parse(json);
var json=data;
	alert ("Сделали переменную json");
	alert (json);  // выдал строку туже строку
	var a=JSON.parse(json); 
	alert (a.data.record[0].fld[1]);  // не выдал
	alert("Финиш");
//var b="{"data":{"record":[{"fld":["as","bc"]},{"fld":["as","bc"]}]}}";
//alert(b);
//var c=JSON.parse(b); 
//var d=b.data.record[0].fld[1];
//alert(d);

//alert (b);   // не выдал!!!
//JSON_str=JSON.stringify(data);  
// alert (JSON_str);
//

// var json ='{"login0":"11","la0":"48.30369","lo0":"38.033502",
//"login1":"12","la1":"48.40369","lo1":"38.033502",
//"login2":"13","la2":"48.70369","lo2":"38.033502"}';

//Выполняя парсинг все работает корректно
//var a = JSON.parse(json);
//var b = a.login0;
//var c = a.lo2;
//document.write(b+c); // Выдает 1138.033502  - все ОК!

//Вопрос, как сформировать массив вида:
//[{login0:11, la0:значение[0], значение[0]}, 
}
