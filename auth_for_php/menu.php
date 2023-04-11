<DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Menu</title>
 <link rel="stylesheet" href="css/style.css">
 </head>
 <body>
<?php
$mysql = new mysqli('localhost','root','root','vnk');

$menu=$mysql->query("SELECT * FROM `menu`");
$menu_main = $menu->fetch_assoc();

#print_r($menu_main['img']);

 ?>
      <ul>
        <?php
            for($i=1;$i<=$menu_main['id_menu'];$i++) {
              echo '<li>'.$menu_main['product'].'   '.$menu_main['decsription'].$menu_main['Price']." грн ".'</li>';
            }

         ?>
      </ul>
</body>
</html>
