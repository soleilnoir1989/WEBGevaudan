
//sprite souris

// mouse.mouseMove = function(mouseMovement){
//   const sour= page_carte.getElementById('mouse');
//   let xPosition;
//   let yPosition;
//   if (mouseMovement){
//     xPosition=mouseMovement.pageX;
//     yPosition=mouseMovement.pageY;
//     sour.style.top= yPosition +1 + 'px';
//     sour.style.left= xPosition + 'px';
//   }
// }


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
var traces= new Icon_Map({iconUrl: 'images/moulin.png'})
var buisson= new Icon_Map({iconUrl: 'images/moulin.png'})



//marqueurs villages
var etie = L.marker([380, 690], {icon: village}).bindPopup("St_Etienne de Lugdares");
    rieu = L.marker([350, 415], {icon: village}).bindPopup("Rieutort de Randon ");
    saug=L.marker([600, 445], {icon: village}).bindPopup("Saugues");
    chely=L.marker([490, 300], {icon: village}).bindPopup("St-Chély");
    marv=L.marker([280, 290], {icon: cite}).bindPopup("Marvejols");
    mend=L.marker([260, 410], {icon: cite}).bindPopup("Mende");

//marqueurs zone 1
    egli=L.marker([390, 682], {icon: church}).bindPopup("Eglise de St-Etienne");
    enfa1=L.marker([395, 694], {icon: church}).bindPopup("Bonjour monsieur");
    pret=L.marker([388, 684], {icon: church}).bindPopup("Loué soit le seigneur");
    crim=L.marker([392, 679], {icon: church}).bindPopup("Scène du meurtre");
    buch=L.marker([380, 645], {icon: church}).bindPopup("Bucheron");
//marqueurs zone 2
    pays1=L.marker([371, 415], {icon: church}).bindPopup("Mère désespérée");
    mendiant=L.marker([364, 413], {icon: church}).bindPopup("Une pièce pour un vieil homme..");
    pays2=L.marker([368, 418], {icon: church}).bindPopup("Vers le nord je crois!");
    meun=L.marker([432, 397], {icon: church}).bindPopup("J'ai remarqué une grotte au nord de mon moulin.");
    moul=L.marker([430, 400], {icon: moulin}).bindPopup("Moulin");
    grot=L.marker([443, 416], {icon: moulin}).bindPopup("Tannière lugubre");
//marqueurs zone 3
    pist=L.marker([505, 292], {icon: village}).bindPopup("Pisteur");
    tave=L.marker([502, 295], {icon: village}).bindPopup("Tavernier");

//marqueurs zone 4
    mait=L.marker([625, 445], {icon: village}).bindPopup("Maître-chien");
    detr=L.marker([629, 438], {icon: village}).bindPopup("Détroussé");
    atta=L.marker([627, 403], {icon: village}).bindPopup("Traces d'attaque");
    buis=L.marker([634, 385], {icon: village}).bindPopup("Un buisson étrange");

    debu=L.marker([260, 410], {icon: cite}).bindPopup("Mende");

//couches

var cities = L.layerGroup([etie,rieu, saug, chely, marv, mend]);
var lieux = L.layerGroup([egli,moul,enfa1,pret,crim,buch, pays1,mendiant,pays2,meun,pist,tave,mait,detr,atta,buis]);


//événements popups
meun.addEventListener("click", function(event){
    map.addLayer(grot);
    map.on('zoomend', function() {
    var zoomlevel = map.getZoom();
        if (zoomlevel  < 3){
            if (map.hasLayer(grot)) {
                map.removeLayer(grot);
            }
          else {
                console.log("no point layer active");
            }
        }
        if (zoomlevel >= 3){
            if (map.hasLayer(grot)){
                console.log("layer already added");
            } else {
                map.addLayer(grot);
            }
        }

    console.log("Current Zoom Level =" + zoomlevel)
    });
});


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

//événements
