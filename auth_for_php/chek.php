<?php
  $login = filter_var(trim($_POST['login']),
  FILTER_SANITIZE_STRING);
  $name = filter_var(trim($_POST['name']),
  FILTER_SANITIZE_STRING);
  $password = filter_var(trim($_POST['pass']),
  FILTER_SANITIZE_STRING);

  if(mb_strlen($login)<5||mb_strlen($login)>50){
    echo"Розмір логіну не правильний ";
    exit();
  }else if(mb_strlen($name)<4||mb_strlen($name)>40){
    echo"Не правильний розмір ім'я ";
    exit();
  }else if(mb_strlen($password)<6||mb_strlen($password)>40){
    echo"Не правильний розмір пароля (від 5 до 40 символів)";
    exit();
  }
  $password = md5($password."qweqwea");
  $mysql = new mysqli('localhost','root','root','vnk');
  $mysql->query("INSERT INTO `user`(`login`,`name_user`,`password`)
  VALUES ('$login','$name','$password')");

  $mysql->close();

  header('location:/');
  exit();


 ?>
