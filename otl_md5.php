<?php
header('Content-Type: text/html; charset=utf-8');
//                       РѕС‚Р»Р°РґРєР° md5
//$headers=header('Content-type: text/html; charset=windows-1251 \r\n'); 
include_once('func.php');
//$ppp=$_SERVER['DOCUMENT_ROOT'];
//$ogr=ini_get('open_basedir'); // РѕРєР°Р·С‹РІР°СЋС‚СЃСЏ, С‡С‚Рѕ СЃСѓС‰РµСЃС‚РІСѓСЋС‚ РѕРіСЂР°РЅРёС‡РµРЅРёСЏ, РєРѕС‚РѕСЂС‹Рµ РЅРµ РїРѕР·РІРѕР»СЏС‚ РЅР°Р·РЅР°С‡РёС‚СЊ РїСѓС‚СЊ РґР»СЏ include РІ Р»СЋР±РѕРµ РјРµСЃС‚Рѕ ...
//echo $ogr;  // РµСЃР»Рё РµСЃС‚СЊ РІС‹РІРѕРґ, С‚Рѕ СЌС‚Рѕ РѕРіСЂР°РЅРёС‡РµРЅРёСЏ Р·РґРµСЃСЊ РѕРєР°Р·Р°Р»РѕСЃСЊ РЅРµС‚ РѕРіСЂР°РЅРёС‡РµРЅРёР№ СЃРј С„Р°Р№Р» С…РѕСЃС‚РёРЅРіР° phpinfo2.php
//exit;
//$p_include=substr($ppp,0,strlen($ppp)-4).'.php/';
//set_include_path($p_include);
//echo $p_include;
//=======================
$pro=md5("был");
echo $pro;
echo "был";
//$rez=mail('a.stebnitskiy@1gbfiz.ru', 'My Subject', 'Line 1\nLine 2\nLine 3');
//$headers=header('Content-type: text/html; charset=windows-1251 \r\n');
$to  = "<a.stebnitskiy@1gbfiz.ru>, " ; 
//$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
$subject = "Кодировка 1251"; 
$subject=iconv("utf8", "windows-1251", $subject);
//$message = '<p>Текст3 добавил перевод строки письма10</p><b>1-строчка </b></br><i>2-строчка \r\n </i></br>';
$message = '<p>Текст3 добавил перевод строки письма11</p><b><p>1-строчка </p><b><p>  2-строчка</p><b> ';
echo $message;
$message=iconv("utf8", "windows-1251", $message);
$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
$headers .= "From: От меня <a.stebnitskiy@1gbfiz.ru>\r\n"; 
$headers .= "Reply-To: reply-to@example.com\r\n"; 
$headers=iconv("utf8", "windows-1251", $headers);
$rez=mail($to, $subject, $message , $headers); 
//mail($to, $subject, $message, $headers); 
echo $rez;
exit;

?>
