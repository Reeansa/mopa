mapboxgl.accessToken = 'pk.eyJ1IjoicmVlYW5zYSIsImEiOiJjbGoxNXFoM2kwc3JqM2VvZHNqZmJidTJzIn0.mClOzY5VOS18EGxR9j6unw';

// Berfungsi untuk membuat marker dengan popup
function createMarker(lng, lat, description) {
    var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(description);
    new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(map);
}

// Inisialisasi peta
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [109.25015, -7.43500], // ubah kedalam koordinat default lokasi
    zoom: 12 // ubah kedalam zoom default lokasi
});

// Tunggu hingga peta dimuat
map.on('load', function () {
    // Dapatkan lokasi user
    navigator.geolocation.getCurrentPosition(function (position) {
        var lng = position.coords.longitude;
        var lat = position.coords.latitude;

        // Atur pusat peta ke lokasi user
        map.setCenter([lng, lat]);

        // Tambahkan penanda untuk lokasi user
        createMarker(lng, lat, "lokasi kamu");
        createMarker(109.24882, -7.41723, "bengkel 1")
        createMarker(109.24507, -7.41703, "bengkel 2")
        createMarker(109.23986, -7.40426, "bengkel 3")

        // Tambahkan penanda untuk Mopa dengan deskripsi yang disediakan
        var mopaLng = 109.25015; // Tetapkan longtitude Mopa di sini
        var mopaLat = -7.43500; // Tetapkan latitude Mopa di sini
        var mopaDescription = "Selamat datang di Mopa, sebuah platform pencarian bengkel terdekat yang dirancang khusus untuk membantu para rider mengatasi kendala dalam mencari bengkel ketika motor mereka mengalami masalah.";
        createMarker(mopaLng, mopaLat, mopaDescription);
    });
});

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);

function searchBengkel() {
    var searchTerm = document.getElementById("cari-bengkel").value;

    // Membuat permintaan geocoding ke Mapbox API
    fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + searchTerm + '.json?access_token=' + mapboxgl.accessToken)
        .then(response => response.json())
        .then(data => {
            // Mengambil koordinat hasil pencarian pertama
            var coordinates = data.features[0].geometry.coordinates;
            var lng = coordinates[0];
            var lat = coordinates[1];

            // Memperbarui peta dengan lokasi hasil pencarian
            map.flyTo({ center: [lng, lat], zoom: 12 });

            // Tambahkan marker pada lokasi hasil pencarian
            createMarker(lng, lat, searchTerm);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}
