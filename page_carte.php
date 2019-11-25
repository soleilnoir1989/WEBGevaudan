<?php

    $link = mysqli_connect('localhost:3306', 'root', 'root', 'objects');

    if (!$link) {
      die('Erreur de connexion');
    } else {
      echo 'Succès... ';
    }

  $req1= "INSERT INTO `objects` (`id`, `nom`, `x`, `y`, `lock`) VALUES ('1', 'griffe', '600', '400', '0')";
  $req2= "DELETE FROM `objects` WHERE id=1";
   mysqli_query($link, $req1);

 ?>

