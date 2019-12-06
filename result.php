<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
      <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/result.css">
  </head>
  <body>
    <div class="" id="picture">
      <img src="../images/bete1.png" id="imag">
    </div>
    <div class="" id="score">

      <p id="hall">Hall of fame</p>
<div id="tabscore">


      <?php

          $link = mysqli_connect('localhost:3306', 'root', 'root', 'objects');


      $req= "SELECT pseudo, score FROM joueurs ORDER BY score DESC LIMIT 3";
      $result= mysqli_query($link, $req);
      while($row = mysqli_fetch_assoc($result)) {
        $tab[]=$row;
      }

      $output = "<table>";
      $output .= "<td> pseudo &nbsp;  &nbsp;  score </td> ";
      foreach ($tab as $key) {
            $output .= "<tr>";
           $output .= "<td>".$key['pseudo']."  &nbsp;  &nbsp;    ".$key['score']."</td>";
           $output .= "</tr>";
            //$out .= "<option value='".$key['id']."' selected>".$key["region"]."</option>";
        //  }else{
        //    $out .= "<option value='".$key["id"]."'>".$key["region"]."</option>";
          }
          $output .= "</table>";



    //  $out .= "</select><input type='submit' value='OK'></form>";
      echo $output;
      // for($i=0;$i<sizeof($tab); $i++){
      //   $output .= "<tr>";
      //   foreach ($tab[$i] as $key => $value) {
      //     $output .= "<td>".$value."</td>";
      //   }
      //   $output .= "</tr>";
      // }
      // $output .= "</table>";
      // echo $output;

       ?>
     </div>
    </div>
    <div class="" id="texte">
<h1>Bien joué! Vous avez trouvé la bête!</h1>
<p>Après des jours et des jours de traque, vous réussissez à pousser la bête dans ses retranchements. C'est au fond d'une vallée étroite que vous et les quelques villageois à vous avoir suivi réussissent à l'appréhender.</p>
  </div>

  </body>
</html>
