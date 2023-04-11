<?php
  $login = filter_var(trim($_POST['login']),
  FILTER_SANITIZE_STRING);

  $password = filter_var(trim($_POST['pass']),
  FILTER_SANITIZE_STRING);
  $password = md5($password."qweqwea");
  $mysql = new mysqli('localhost','root','root','vnk');


  $result=$mysql->query("SELECT * FROM `user` WHERE `login`
    ='$login' AND `password`='$password'");
  $user = $result->fetch_assoc();
  if(count($user)==0){
    echo "Такого користувача не знайдено";
    exit();
  }
  setcookie('user',$user['name_user'],time()+3000,"/");

  print_r($user['name']);
  $mysql->close();

  header('location:/');
  exit();


 ?>
