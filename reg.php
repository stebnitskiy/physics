    <html xml:lang="ru" lang="ru">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" lang="ru"/>
    <head>
    <title>Регистрация</title>
    </head>
    <body>
    <h2>Регистрация</h2>
    <form action="/usr/save_user.php" method="post">
    <!--**** save_user.php - это адрес обработчика.  То есть, после нажатия на кнопку "Зарегистрироваться", данные из полей  отправятся на страничку save_user.php методом "post" ***** -->
<p>
    <label>Ваш e-mail, на который Вам будет отправлен пароль для входа на сайт:<br></label>
    <input name="login" type="text" size="40" maxlength="40">
    </p>
<!--**** В текстовое поле (name="login" type="text") пользователь вводит свой логин ***** -->
<p>
    <label>Ваше имя:<br></label>
    <input name="password" type="txt" size="40" maxlength="40">
    </p>
<!--**** В поле для паролей (name="password" type="password") пользователь вводит свой пароль ***** -->
<p>
    <input type="submit" name="submit" value="Зарегистрироваться">
<!--**** Кнопочка (type="submit") отправляет данные на страничку save_user.php ***** -->
</p></form>
    </body>
    </html>