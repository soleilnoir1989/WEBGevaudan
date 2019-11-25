// affichage map
var map = L.map('mapid', {
  crs: L.CRS.Simple
});

var bounds = [[0,0], [800,1200]];
var image = L.imageOverlay('images/Paris.png', bounds).addTo(map);

map.fitBounds(bounds);


//gestion marqueur bureau
var Icon_Map = L.Icon.extend({
    options: {
        iconSize:     [50, 50],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

var bureau = new Icon_Map({iconUrl: 'images/bureauimg.png'});

var bure = L.marker([400, 600], {icon: bureau}).bindPopup("Votre bureau");

//zoom bureau
map.on('zoomend', function() {
var zoomlevel = map.getZoom();
    if (zoomlevel  < 5){
        if (map.hasLayer(bure)) {
            map.removeLayer(bure);
        }
      else {
            console.log("no point layer active");
        }
    }
    if (zoomlevel >= 5){
        if (map.hasLayer(bure)){
            console.log("layer already added");
        } else {
            map.addLayer(bure);
        }
    }

console.log("Current Zoom Level =" + zoomlevel)
});


//direction vers suite
bure.addEventListener("click", function(event){
    window.location.href = "page_carte.html";
});
