<?php
session_start();
if(!isset($_SESSION['id'])) {
    header('Location: http://1gbfiz.ru');
    // можно добавить ошибку параметром
    // например
    // header('Location: http://1gbfiz.ru?unauthorized=true');
    exit;
}
echo ($_SESSION['id']);
?>
