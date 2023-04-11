<?php
$connection = mysqli_connect('localhost','root','root','vnk');
if ($connection ==false){
  echo"Не вбалось приєднатись до бд";
  echo mysqli_connect_error();
  exit();
}
 ?>
