let lat1=51.505,lag1=-0.09
let mymap = L.map('mapid');
mymap.setView([51.505, -0.09], 13);
var greenIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
    iconSize:     [38, 60], // size of the icon
    iconAnchor:   [22, 84], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
const setMap = () => {
    
    mymap.setView([lat1, lag1], 13)
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibHVpc2hpbGw0NzciLCJhIjoiY2t0ZWJmcjA0Mm9jdjJ1cGduMzhncXkwaiJ9.u2E9H8MY_FI5j75ilJmImw'
    }).addTo(mymap);
    


    L.marker([lat1, lag1], {icon: greenIcon}).addTo(mymap);
}
const changeMap = () => {
    mymap.setView([lat1, lag1], 13)
    L.marker([lat1, lag1], {icon: greenIcon}).addTo(mymap);
}
setMap()






