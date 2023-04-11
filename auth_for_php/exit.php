<?php
setcookie('user',$user['name_user'],time()-3000,"/");
header('location:/index.php');
 ?>
