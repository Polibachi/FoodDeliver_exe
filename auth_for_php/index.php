<DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Реєстрування</title>
 <link rel="stylesheet" href="css/style.css">
 </head>
 <body>
	<div class="container mt-4">
    <?php
    if($_COOKIE['user'] ==''):
      ?>
	 <div class="row">
     <div class="col">
       <h1>форма рєстрації</h1>
    	 <form action="chek.php" method="post">
    		<input type="text" class="form-control" name="login" id="login" placeholder="Введіть логін"><br><br>
    		<input type="text" class="form-control" name="name" id="name" placeholder="Введіть ім'я"><br><br>
    		<input type="password" class="form-control" name="pass" id="pass" placeholder="Введіть пароль"><br><br>
    		<button class="btn btn-succes" type="submit">Зареєструватись</button>
    	 </form>
     </div>
     <div class="col">
       <h1>форма авторизації</h1>
    	 <form action="auth.php" method="post">
    		<input type="text" class="form-control" name="login" id="login" placeholder="Введіть логін"><br><br>
    		<input type="password" class="form-control" name="pass" id="pass" placeholder="Введіть пароль"><br><br>
    		<button class="btn btn-succes" type="submit">Ввійти</button>
    	 </form>
     </div>
   <?php else:?>
     <p>Привіт <?=$_COOKIE['user']?>.Щоб вийти нажміть <a href="/exit.php">тут</a></p>
   <?php endif;?>
   </div>
	</div>
 </body>
 </html>
