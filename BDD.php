<?php
$link = mysqli_connect("localhost:3306", "roots", "roots", "objects");
mysqli_set_charset($link,"utf8");

if (!$link) {
  die('Erreur de connexion');
  } else {
    echo 'Succès... ';
  }


if (isset($_GET['buch'])){
  $var = $_GET['buch'];
  }
  /**ajout de MaJ d'items**/
  $sql  = "SELECT nom, url FROM objects WHERE nom LIKE '% ".$var." %' ";
  $result = mysqli_query($link,$sql);

  if ($result) {
    while($ligne=mysqli_fetch_assoc($result)){
      echo "<img classe=\"spotlight\" src=\"".$ligne["url"]."\" id=\"".$ligne["nom"]."\">";
    }
  }

  else {
    echo "Erreur de requête de base de données."
  }



?>
