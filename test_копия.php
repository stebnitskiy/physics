<head><title>Тест</title>
<meta charset="utf-8">
<style>
p, span, input {
 font-size:24px;
}
button{
    font-size:18px;
}
#vo {
    color:green;
}
#nvo {
    color:red;
}
#ot {
    color:blue;
}
#table_test td:first-child {text-align: center;}  выравнивание по центру*/
</style>
</head>
<body>
<script src="./js/test.js"></script>
<?php
header('Content-Type: text/html; charset=utf-8');
// Назначение: генерация html страницы теста
// на входе login, сложность выбранная учеником (все вопросы или по одному), если по одному, то порядковый номер вопроса?
// порядковый номер нужен для того, что бы по одному вопросу на экран, так как это усложняет задачу и при этом максимальная оценка 5..
// возможно надо будет предусмотреть все вопросы сразу...., при этом максимальная оценка 3 или 4
// структура запроса: login, режим, номер вопроса
// Номер вопроса 0 - это значит выдаем ТЕМУ теста  (нужна отдельная таблица тем)
include_once('func.php');
// номер вопроса если 0, то выдаем тему
$tbl="задачи";
$query= "SELECT * from `Темы` where `login`='sti'";

$tema=value_fld($query,'Наименование');    // получили ТЕМУ
$vzv=div_tema($tema); 
exit;
function div_tema($tema){       // формируем только тему
	echo "<div style='margin-left: auto;margin-right: auto;width: 600px;text-align:center'>";
    echo "<p>Тест. Тема - <span id='tema'>".$tema."</span></p>";
	echo "</div>";
    echo "<div id='id_test' style='margin-left: auto;margin-right: auto;width: 600px;text-align:center'>";
    echo "<table id='table_test'><tr><td  style='padding-bottom:50px;'><button id='slojn_tst' onclick=slojn();>Выводятся все вопросы теста. Нет дополнительных баллов за выполнение теста. Изменить? </button></td></tr>";
	echo "<tr><td style='padding-bottom:50px;'><button id='start_tst' onclick=start();>Начало тестирования </button><td></tr>";
	echo "</table></div>";
}
?>
