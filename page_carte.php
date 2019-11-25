<?php

    $link = mysqli_connect('localhost:3306', 'root', 'root', 'objects');

    if (!$link) {
      die('Erreur de connexion');
    } else {
      echo 'Succès... ';
    }

  $req1= "INSERT INTO objects (id,nom,x,y,lock) VALUES (1, 'griffe',400,600, 'true')";
   mysqli_query($link, $req1);

 ?>
