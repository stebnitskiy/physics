var test = "Умножение";
var vopros_1 = "4*12 + 7 = ";
var vopros_2 = "7-8*2 = ";
var vopros_3 = "34*2 + 17 = ";
var vopros_4 = "35*2 + 17 = ";
var vopros_5 = "36*2 + 4 = ";
var vopros_6 = "37*8 + 7 = ";
var vopros_7 = "38*2 + 5 = ";
var vopros_8 = "39*12 + 19 = ";
var vopros_9 = "40*2 + 16 = ";
var vopros_10 = "41*4 + 3 = ";
var vopros_11 = "42*8 - 7 = ";
var vopros_12 = "43*6 - 5 = ";
var vopros_13 = "4*62 - 6 = ";
var vopros_14 = "45*9 - 9 = ";
var vopros_15 = "6 * (14 + 43) = ";
//-----------------------------ris - это вопрос в виде рисунка(изображения)------------------
var vopros_ris_1 = "да";
var vopros_ris_2 = "нет";
var vopros_ris_3 = "нет";
var vopros_ris_4 = "нет";
var vopros_ris_5 = "нет";
var vopros_ris_6 = "нет";
var vopros_ris_7 = "нет";
var vopros_ris_8 = "нет";
var vopros_ris_9 = "нет";
var vopros_ris_10 = "нет";
var vopros_ris_11 = "нет";
var vopros_ris_12 = "нет";
var vopros_ris_13 = "нет";
var vopros_ris_14 = "нет";
var vopros_ris_15 = "нет";
//----------------------------------------
var pr_otv_zadachi_1 = "NTU="; 
var pr_otv_zadachi_2 = "LTk=";
var pr_otv_zadachi_3 = "ODU=";
var pr_otv_zadachi_4 = "ODc=";
var pr_otv_zadachi_5 = "NzY=";
var pr_otv_zadachi_6 = "MzAz";
var pr_otv_zadachi_7 = "ODE=";
var pr_otv_zadachi_8 = "NDg3";
var pr_otv_zadachi_9 = "OTY=";
var pr_otv_zadachi_10 = "MTY3";
var pr_otv_zadachi_11 = "MzI5";
var pr_otv_zadachi_12 = "MjUz";
var pr_otv_zadachi_13 = "MjQy";
var pr_otv_zadachi_14 = "Mzk2";
var pr_otv_zadachi_15 = "MzQy";
function ready() {
    alert('DOM готов');
}
function onload() {
    //alert ("Загружаю данные");
    //alert("DOM готов!");
 if(vopros_ris_1 == "да"){
        vopros_1 = "<img src='./js/ris/01.jpg' class='rounded mx-auto d-block'><br>";  //+vopros_1;
    }
    if(vopros_ris_2 == "да"){
        vopros_2 = "<img src='data/02.jpg' class='rounded mx-auto d-block'><br>"+vopros_2;
    }
    if(vopros_ris_3 == "да"){
        vopros_3 = "<img src='data/03.jpg' class='rounded mx-auto d-block'><br>"+vopros_3;
    }
    if(vopros_ris_4 == "да"){
        vopros_4 = "<img src='data/04.jpg' class='rounded mx-auto d-block'><br>"+vopros_4;
    }
    if(vopros_ris_5 == "да"){
        vopros_5 = "<img src='data/05.jpg' class='rounded mx-auto d-block'><br>"+vopros_5;
    }
    if(vopros_ris_6 == "да"){
        vopros_6 = "<img src='data/06.jpg' class='rounded mx-auto d-block'><br>"+vopros_6;
    }
    if(vopros_ris_7 == "да"){
        vopros_7 = "<img src='data/07.jpg' class='rounded mx-auto d-block'><br>"+vopros_7;
    }
    if(vopros_ris_8 == "да"){
        vopros_8 = "<img src='data/08.jpg' class='rounded mx-auto d-block'><br>"+vopros_8;
    }
    if(vopros_ris_9 == "да"){
        vopros_9 = "<img src='data/09.jpg' class='rounded mx-auto d-block'><br>"+vopros_9;
    }
    if(vopros_ris_10 == "да"){
        vopros_10 = "<img src='data/10.jpg' class='rounded mx-auto d-block'><br>"+vopros_10;
    }
    if(vopros_ris_11 == "да"){
        vopros_11 = "<img src='data/11.jpg' class='rounded mx-auto d-block'><br>"+vopros_11;
    }
    if(vopros_ris_12 == "да"){
        vopros_12 = "<img src='data/12.jpg' class='rounded mx-auto d-block'><br>"+vopros_12;
    }
    if(vopros_ris_13 == "да"){
        vopros_13 = "<img src='data/13.jpg' class='rounded mx-auto d-block'><br>"+vopros_13;
    }
    if(vopros_ris_14 == "да"){
        vopros_14 = "<img src='data/14.jpg' class='rounded mx-auto d-block'><br>"+vopros_14;
    }
    if(vopros_ris_15 == "да"){
        vopros_15 = "<img src='data/15.jpg' class='rounded mx-auto d-block'><br>"+vopros_15;
    }
    voprosi = [[vopros_1,pr_otv_zadachi_1],[vopros_2,pr_otv_zadachi_2],[vopros_3,pr_otv_zadachi_3],[vopros_4,pr_otv_zadachi_4],[vopros_5,pr_otv_zadachi_5],[vopros_6,pr_otv_zadachi_6],[vopros_7,pr_otv_zadachi_7],[vopros_8,pr_otv_zadachi_8],[vopros_9,pr_otv_zadachi_9],[vopros_10,pr_otv_zadachi_10],[vopros_11,pr_otv_zadachi_11],[vopros_12,pr_otv_zadachi_12],[vopros_13,pr_otv_zadachi_13],[vopros_14,pr_otv_zadachi_14],[vopros_15,pr_otv_zadachi_15]];	
   document.getElementById('v_1').innerHTML = voprosi[0][0];
    document.getElementById('v_2').innerHTML = voprosi[1][0];
    document.getElementById('v_3').innerHTML = voprosi[2][0];
    document.getElementById('v_4').innerHTML = voprosi[3][0];
    document.getElementById('v_5').innerHTML = voprosi[4][0];
    document.getElementById('v_6').innerHTML = voprosi[5][0];
    document.getElementById('v_7').innerHTML = voprosi[6][0];
    document.getElementById('v_8').innerHTML = voprosi[7][0];
    document.getElementById('v_9').innerHTML = voprosi[8][0];
    document.getElementById('v_10').innerHTML = voprosi[9][0];
    document.getElementById('v_11').innerHTML = voprosi[10][0];
    document.getElementById('v_12').innerHTML = voprosi[11][0];
    document.getElementById('v_13').innerHTML = voprosi[12][0];
    document.getElementById('v_14').innerHTML = voprosi[13][0];
    document.getElementById('v_15').innerHTML = voprosi[14][0];
    document.getElementById('tema').innerHTML = test;
  
};
function sled_vopr(){
    //alert("Следующий");
	if(document.getElementById('vopros14').style.display == "block"){
        document.getElementById('vopros14').style.display = "none";
        document.getElementById('vopros15').style.display = "block";
        document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_pr').style.display = "block";
    }
    if(document.getElementById('vopros13').style.display == "block"){
        document.getElementById('vopros13').style.display = "none";
        document.getElementById('vopros14').style.display = "block";
    }
    if(document.getElementById('vopros12').style.display == "block"){
        document.getElementById('vopros12').style.display = "none";
        document.getElementById('vopros13').style.display = "block";
    }
    if(document.getElementById('vopros11').style.display == "block"){
        document.getElementById('vopros11').style.display = "none";
        document.getElementById('vopros12').style.display = "block";
    }
    if(document.getElementById('vopros10').style.display == "block"){
        document.getElementById('vopros10').style.display = "none";
        document.getElementById('vopros11').style.display = "block";
    }
    if(document.getElementById('vopros9').style.display == "block"){
        document.getElementById('vopros9').style.display = "none";
        document.getElementById('vopros10').style.display = "block";
    }
    if(document.getElementById('vopros8').style.display == "block"){
        document.getElementById('vopros8').style.display = "none";
        document.getElementById('vopros9').style.display = "block";
    }
    if(document.getElementById('vopros7').style.display == "block"){
        document.getElementById('vopros7').style.display = "none";
        document.getElementById('vopros8').style.display = "block";
    }
    if(document.getElementById('vopros6').style.display == "block"){
        document.getElementById('vopros6').style.display = "none";
        document.getElementById('vopros7').style.display = "block";
    }
    if(document.getElementById('vopros5').style.display == "block"){
        document.getElementById('vopros5').style.display = "none";
        document.getElementById('vopros6').style.display = "block";
    }
    if(document.getElementById('vopros4').style.display == "block"){
        document.getElementById('vopros4').style.display = "none";
        document.getElementById('vopros5').style.display = "block";
    }
    if(document.getElementById('vopros3').style.display == "block"){
        document.getElementById('vopros3').style.display = "none";
        document.getElementById('vopros4').style.display = "block";
    }
    if(document.getElementById('vopros2').style.display == "block"){
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('vopros3').style.display = "block";
    }
    if(document.getElementById('vopros1').style.display == "block"){
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('vopros2').style.display = "block";
    }
}
function proverit(){
otv_uch_1 = document.getElementById('z_1').value;
otv_ucgenika_1 = otv_uch_1;
otv_uch_1 = kodirov(otv_uch_1);
otv_uch_2 = document.getElementById('z_2').value;
otv_ucgenika_2 = otv_uch_2;
otv_uch_2 = kodirov(otv_uch_2);
otv_uch_3 = document.getElementById('z_3').value;
otv_ucgenika_3 = otv_uch_3;
otv_uch_3 = kodirov(otv_uch_3);
otv_uch_4 = document.getElementById('z_4').value;
otv_ucgenika_4 = otv_uch_4;
otv_uch_4 = kodirov(otv_uch_4);
otv_uch_5 = document.getElementById('z_5').value;
otv_ucgenika_5 = otv_uch_5;
otv_uch_5 = kodirov(otv_uch_5);
otv_uch_6 = document.getElementById('z_6').value;
otv_ucgenika_6 = otv_uch_6;
otv_uch_6 = kodirov(otv_uch_6);
otv_uch_7 = document.getElementById('z_7').value;
otv_ucgenika_7 = otv_uch_7;
otv_uch_7 = kodirov(otv_uch_7);
otv_uch_8 = document.getElementById('z_8').value;
otv_ucgenika_8 = otv_uch_8;
otv_uch_8 = kodirov(otv_uch_8);
otv_uch_9 = document.getElementById('z_9').value;
otv_ucgenika_9 = otv_uch_9;
otv_uch_9 = kodirov(otv_uch_9);
otv_uch_10 = document.getElementById('z_10').value;
otv_ucgenika_10 = otv_uch_10;
otv_uch_10 = kodirov(otv_uch_10);
otv_uch_11 = document.getElementById('z_11').value;
otv_ucgenika_11 = otv_uch_11;
otv_uch_11 = kodirov(otv_uch_11);
otv_uch_12 = document.getElementById('z_12').value;
otv_ucgenika_12 = otv_uch_12;
otv_uch_12 = kodirov(otv_uch_12);
otv_uch_13 = document.getElementById('z_13').value;
otv_ucgenika_13 = otv_uch_13;
otv_uch_13 = kodirov(otv_uch_13);
otv_uch_14 = document.getElementById('z_14').value;
otv_ucgenika_14 = otv_uch_14;
otv_uch_14 = kodirov(otv_uch_14);
otv_uch_15 = document.getElementById('z_15').value;
otv_ucgenika_15 = otv_uch_15;
otv_uch_15 = kodirov(otv_uch_15);
ball = 0;
document.getElementById('vopros15').style.display = "none";
document.getElementById('kn_pr').style.display = "none";
if(otv_uch_1 == pr_otv_zadachi_1){
    ball +=1;
    otveti = "<span id='vo'>Вопрос 1. Вы ответили верно. Ваш ответ: "+otv_ucgenika_1+"</span>";
} else {
    otveti = "<span id='nvo'>Вопрос 1. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_1+"</span>"; 
}
if(otv_uch_2 == pr_otv_zadachi_2){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 2. Вы ответили верно. Ваш ответ: "+otv_ucgenika_2+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 2. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_2+"</span>"; 
}
if(otv_uch_3 == pr_otv_zadachi_3){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 3. Вы ответили верно. Ваш ответ: "+otv_ucgenika_3+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 3. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_3+"</span>";
}
if(otv_uch_4 == pr_otv_zadachi_4){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 4. Вы ответили верно. Ваш ответ: "+otv_ucgenika_4+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 4. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_4+"</span>";
}
if(otv_uch_5 == pr_otv_zadachi_5){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 5. Вы ответили верно. Ваш ответ: "+otv_ucgenika_5+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 5. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_5+"</span>";
}
if(otv_uch_6 == pr_otv_zadachi_6){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 6. Вы ответили верно. Ваш ответ: "+otv_ucgenika_6+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 6. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_6+"</span>";
}
if(otv_uch_7 == pr_otv_zadachi_7){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 7. Вы ответили верно. Ваш ответ: "+otv_ucgenika_7+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 7. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_7+"</span>";
}
if(otv_uch_8 == pr_otv_zadachi_8){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 8. Вы ответили верно. Ваш ответ: "+otv_ucgenika_8+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 8. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_8+"</span>";
}
if(otv_uch_9 == pr_otv_zadachi_9){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 9. Вы ответили верно. Ваш ответ: "+otv_ucgenika_9+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 9. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_9+"</span>";
}
if(otv_uch_10 == pr_otv_zadachi_10){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 10. Вы ответили верно. Ваш ответ: "+otv_ucgenika_10+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 10. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_10+"</span>";
}
if(otv_uch_11 == pr_otv_zadachi_11){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 11. Вы ответили верно. Ваш ответ: "+otv_ucgenika_11+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 11. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_11+"</span>";
}
if(otv_uch_12 == pr_otv_zadachi_12){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 12. Вы ответили верно. Ваш ответ: "+otv_ucgenika_12+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 12. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_12+"</span>";
}
if(otv_uch_13 == pr_otv_zadachi_13){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 13. Вы ответили верно. Ваш ответ: "+otv_ucgenika_13+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 13. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_13+"</span>";
}
if(otv_uch_14 == pr_otv_zadachi_14){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 14. Вы ответили верно. Ваш ответ: "+otv_ucgenika_14+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 14. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_14+"</span>";
}
if(otv_uch_15 == pr_otv_zadachi_15){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 15. Вы ответили верно. Ваш ответ: "+otv_ucgenika_15+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 15. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_15+"</span>";
}
vsego_zadach = 15;
procent_vip = ball/vsego_zadach * 100;
procent_vip = procent_vip.toFixed();
document.getElementById('rezultat').innerHTML = "<span id='ot'>Задания выполнены верно на "+procent_vip+"%.</span><br><br>"+otveti;
}
function kodirov(stroka) { 
    var b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg'+ 
                   'hijklmnopqrstuvwxyz0123456789+/='; 
    var b64enc = ''; 
    var ch1, ch2, ch3; 
    var en1, en2, en3, en4; 
    for (var i=0; i<stroka.length;) { 
        ch1 = stroka.charCodeAt(i++); 
        ch2 = stroka.charCodeAt(i++); 
        ch3 = stroka.charCodeAt(i++); 
        en1 = ch1 >> 2; 
        en2 = ((ch1 & 3) << 4) | (ch2 >> 4); 
        en3 = isNaN(ch2) ? 64:(((ch2 & 15) << 2) | (ch3 >> 6)); 
        en4 = isNaN(ch3) ? 64:(ch3 & 63); 
        b64enc += b64ch.charAt(en1) + b64ch.charAt(en2) + 
                      b64ch.charAt(en3) + b64ch.charAt(en4); 
    } 
    return b64enc; 
}

