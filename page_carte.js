

let item_select = "bourse";

// affichage map
var map = L.map('mapid', {
  crs: L.CRS.Simple
});

var bounds = [[0,0], [800,1200]];
var image = L.imageOverlay('images/cassini_fusion.png', bounds).addTo(map);

map.fitBounds(bounds);

// marqueurs

var Icon_Map = L.Icon.extend({
    options: {
        iconSize:     [50, 50],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
var ville = L.Icon.extend({
    options: {
        iconSize:     [70, 70],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76],
    }
});


//icones images
var church = new Icon_Map({iconUrl: 'images/christian_cross_PNG17.png'})
var village = new Icon_Map({iconUrl: 'images/clocher.png'})
var cite = new ville({iconUrl: 'images/cite.png'})
var moulin = new Icon_Map({iconUrl: 'images/moulin.png'})
var enfant= new Icon_Map({iconUrl: 'images/moulin.png'})
var paysan= new Icon_Map({iconUrl: 'images/moulin.png'})
var pretre= new Icon_Map({iconUrl: 'images/moulin.png'})
var tavernier= new Icon_Map({iconUrl: 'images/moulin.png'})
var bucheron= new Icon_Map({iconUrl: 'images/moulin.png'})
var crime= new Icon_Map({iconUrl: 'images/moulin.png'})
var mendiant= new Icon_Map({iconUrl: 'images/moulin.png'})
var meunier= new Icon_Map({iconUrl: 'images/moulin.png'})
var grotte= new Icon_Map({iconUrl: 'images/moulin.png'})
var pisteur= new Icon_Map({iconUrl: 'images/moulin.png'})
var maitrechien= new Icon_Map({iconUrl: 'images/moulin.png'})
var detrousse= new Icon_Map({iconUrl: 'images/moulin.png'})
var trace= new Icon_Map({iconUrl: 'images/moulin.png'})
var buisson= new Icon_Map({iconUrl: 'images/moulin.png'})



//marqueurs villages
var etie = L.marker([380, 690], {icon: village}).bindPopup("St_Etienne de Lugdares");
    rieu = L.marker([350, 415], {icon: village}).bindPopup("Rieutort de Randon ");
    saug=L.marker([600, 445], {icon: village}).bindPopup("Saugues");
    chely=L.marker([490, 300], {icon: village}).bindPopup("St-Chély");
    marv=L.marker([280, 290], {icon: cite}).bindPopup("Marvejols");
    mend=L.marker([260, 410], {icon: cite}).bindPopup("<dl><dt>Mende</dt><dt>nde</dt> ");

    debu=L.marker([260, 410], {icon: church}).bindPopup("Je vous attendais...");


//marqueurs zone 1
    egli=L.marker([390, 682], {icon: church}).bindPopup("Eglise de St-Etienne");
    enfa1=L.marker([395, 694], {icon: church}).bindPopup("Bonjour monsieur");
    pret=L.marker([388, 684], {icon: church}).bindPopup("Loué soit le seigneur");
    crim=L.marker([392, 679], {icon: church}).bindPopup("Scène du meurtre");
    buch=L.marker([380, 645], {icon: church}).bindPopup("texte1");


//marqueurs zone 2
    pays1=L.marker([371, 415], {icon: church}).bindPopup("Mère désespérée");
    mendiant=L.marker([364, 413], {icon: church}).bindPopup("Une pièce pour un vieil homme..");
    pays2=L.marker([368, 418], {icon: church}).bindPopup("Vers le nord je crois!");
    meun=L.marker([432, 397], {icon: church}).bindPopup("J'ai remarqué une grotte au nord de mon moulin.");
    moul=L.marker([430, 400], {icon: moulin}).bindPopup("Moulin");
    grot=L.marker([443, 416], {icon: moulin}).bindPopup("Tannière lugubre");


//marqueurs zone 3
    pist=L.marker([505, 292], {icon: church}).bindPopup("Pisteur");
    tave=L.marker([502, 295], {icon: church}).bindPopup("Tavernier");



//marqueurs zone 4
    mait=L.marker([625, 445], {icon: village}).bindPopup("Maître-chien");
    detr=L.marker([629, 438], {icon: village}).bindPopup("Détroussé");
    buis=L.marker([634, 385], {icon: village}).bindPopup("Un buisson étrange");

//traces de la bête
    atta1=L.marker([627, 403], {icon: village}).bindPopup("Traces d'attaque");



var zone1 = [egli,enfa1,pret,crim,buch];
var zone2 = [pays1,mendiant,pays2,meun,moul];
var zone3 = [pist,tave];
var zone4 = [mait,detr,buis];
var attaques = [atta1];

//couches

let cities = L.layerGroup([etie,rieu, saug, chely, marv, mend]);
let lieux = L.layerGroup([debu,pist,tave]);
let traces = L.layerGroup([atta1]);

//let lieux = L.layerGroup([egli,moul,enfa1,pret,crim,buch, pays1,mendiant,pays2,meun,pist,tave,mait,detr,atta,buis]);
let nbItem=0;


let inventaire = 0;

//événements popups


//zone0

debu.addEventListener("click", function(event){
  debu = L.marker([260, 410], {icon: church}).bindPopup("<dl><dt>Allez</dl><dl>Il est temps de commencer votre enquête.</dl>");
  debu.addTo(lieux);
  debu.addEventListener("click", function(event){
    if (document.getElementById("bourse")){
      console.log("item déjà présent dans l'inventaire");
    } else {
      inventaire = inventaire + 1;

      var item = document.createElement("img");
      item.setAttribute("id","bourse");
      item.setAttribute("src","images/bourse.png");
      item.setAttribute("class","spotlight");
      document.getElementById("bottom").appendChild(item);
      item.style.gridColumn = inventaire.toString();
      item.style.witdh = "100%";
      item.style.marginTop = "50px";
      item.style.marginBottom = "auto";
    }
    for (var i = 0; i < zone1.length; i++) {
      zone1[i].addTo(lieux)
    }
  })
});

//zone1

buch.addEventListener("click", function(event){
  if (item_select=="bourse"){
    buch=L.marker([380, 645], {icon: church}).bindPopup("texte2");
    buch.addTo(lieux);
    buch.addEventListener("click", function(event){
      for (var i = 0; i < zone2.length; i++) {
        zone2[i].addTo(lieux);
      }
    })

  }
});

//zone2

meun.addEventListener("click", function(event){
    meun=L.marker([432, 397], {icon: church}).bindPopup("Sinon allez vers St-Chély");
    meun.addTo(lieux);
    meun.addEventListener("click", function(event){
      grot.addTo(lieux);
      for (var i = 0; i < zone3.length; i++) {
        zone3[i].addTo(lieux);
      }
    })
});

//zone3

pist.addEventListener("click", function(event){
  if (item_select=="bourse"){
    pist=L.marker([505, 292], {icon: church}).bindPopup("La bête fuit au nord ... vers Saugres !");
    pist.addTo(lieux);
    pist.addEventListener("click", function(event){

      for (var i = 0; i < zone4.length; i++) {
        zone4[i].addTo(lieux);
      }
    })
  }
});

//zone 4

mait.addEventListener("click", function(event){
  if (item_select=="bourse"){
    mait=L.marker([625, 445], {icon: village}).bindPopup("Voilà vos chiens");
    mait.addTo(lieux);

    if (document.getElementById("chiens")){
      console.log("item déjà présent dans l'inventaire");
    } else {
      inventaire = inventaire + 1;

      var item = document.createElement("img");
      item.setAttribute("id","chiens");
      item.setAttribute("src","images/Moulin.png");
      item.setAttribute("class","spotlight");
      document.getElementById("bottom").appendChild(item);
      item.style.gridColumn = inventaire.toString();
      item.style.witdh = "100%";
      item.style.marginTop = "50px";
      item.style.marginBottom = "auto";
    }
  }
});

function vue_canine(){
  if (item_select="chiens") {
    map.addLayer(traces);
    map.on('zoomend', function() {
    var zoomlevel = map.getZoom();
        if (zoomlevel  >= 5){
            if (map.hasLayer(traces)) {
                map.removeLayer(traces);
            }
          else {
                console.log("no point layer active");
            }
        }
        if (zoomlevel < 5){
            if (map.hasLayer(traces)){
                console.log("layer already added");
            } else {
                map.addLayer(traces);
            }
        }

    console.log("Current Zoom Level =" + zoomlevel)
    });
  } else {
    map.removeLayer(traces);
  }
}

vue_canine();
//visionneuse d'images

// mend.addEventListener("click", function(event){
//   window.open("http://localhost/affichagepop.html","nom_popup","menubar=no, status=no, scrollbars=no, menubar=no, width=600, height=400");
// });


//zoom levels

map.addLayer(cities);
map.removeLayer(grot);
map.on('zoomend', function() {
var zoomlevel = map.getZoom();
    if (zoomlevel  >= 3){
        if (map.hasLayer(cities)) {
            map.removeLayer(cities);
        }
      else {
            console.log("no point layer active");
        }
    }
    if (zoomlevel < 3){
        if (map.hasLayer(cities)){
            console.log("layer already added");
        } else {
            map.addLayer(cities);
        }
    }

console.log("Current Zoom Level =" + zoomlevel)
});


map.on('zoomend', function() {
var zoomlevel = map.getZoom();
    if (zoomlevel  < 3){
        if (map.hasLayer(lieux)) {
            map.removeLayer(lieux);
        }
      else {
            console.log("no point layer active");
        }
    }
    if (zoomlevel >= 3){
        if (map.hasLayer(lieux)){
            console.log("layer already added");
        } else {
            map.addLayer(lieux);
        }
    }

console.log("Current Zoom Level =" + zoomlevel)
});

// compteur de jours
let jours = 70;
function MaJ(){
  let heure_actu = document.getElementById('timer');
  if (jours==1) {
    heure_actu.innerHTML = jours + " jour restant avant l'envoi des troupes royales.";
  }
  heure_actu.innerHTML = jours + " jours restants avant l'envoi des troupes royales.";
  if (jours <10){
    heure_actu.style.fontWeight = 'bolder';
  }
  if (jours==0) {
    window.location.href = "carteParis.html";
  }
  jours=jours-1;
  setTimeout(MaJ,13000);

}
setTimeout(MaJ,0);
