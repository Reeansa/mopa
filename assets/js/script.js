// loading spinner
const spinnerWrapperE1 = document.querySelector('.spinner-wrapper');
window.addEventListener('load', () => {
    spinnerWrapperE1.style.opacity = '0';
    setTimeout(() => {
        spinnerWrapperE1.style.display = 'none';
    }, 200)
})

// Maps
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        document.getElementById('navbar__top').classList.add();
        document.getElementById('navbar_top').classList.add('fixed-top', 'bg-white');
        // tambahkan padding top untuk menampilkan konten di belakang navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // menghapus padding top pada body
        document.body.style.paddingTop = '0';
      } 
  });
});

// Add active class to the current button (highlight it)
var header = document.getElementById("navbarText");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("text-white active");
  current[0].className = current[0].className.replace("text-white active", " ");
  this.className += " text-white active";
  });
}