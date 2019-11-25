var inscription = document.getElementById("inscription");

inscription.addEventListener('submit', valider);

function valider(event){
  event.preventfault();


  inscription.addEventListener('submit', valider);

  var champ_nom = inscription.elements["nom"];
  var champ_prenom = inscription.elements["prenom"];
  var champ_telephone = inscription.elements["telephone"];
  var champ_email = inscription.elements["mail"];

  var form_OK = true;

  if(champ_telephone.value.length != 10 || isNaN(champ_telephone.value)){
    form_OK = false;
    alerte("Numéro téléphone non valide");
  }

  if(!form_OK){
    event.preventDefault();
  }

  var regex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/ ;
  if (regex.exec(champ_email.value) == null) {
    alerte("Email non valide");
    form_OK = false;
  }

  //...
  if(champ_nom.value == ""){
    form_OK = false;
    alerte("Champ nom est vide");
    champ_nom.classList.add("erreur");
  }else{
    champ_nom.classList.remove("erreur");
    alerte("Champ nom bizarre");
  }
  //...
  }
