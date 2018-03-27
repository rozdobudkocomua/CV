//var map; //Shoresh on map

function initMap() {
    var center = {lat: 31.7967, lng: 35.0609};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 13,
        zoomControl: true,
        scaleControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
    });
    var marker = new google.maps.Marker({
        position: center,
        map: map
    });

}