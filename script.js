const images = [
  './images/pexels-rpnickson-2559941.jpg',
  './images/rbUCFdO.jpg',
  'images/new-york-city-5k-3840x2160-11837.jpg',
  './images/windows-11-stock-4k-23-09-2024-1727154299-hd-wallpaper.jpg',
];

const bgLayer = document.querySelector('.background-layer');
let index = 0;
const displayTime = 10000; // 10 seconds

// Preload all images
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

function nextBackground() {
    // fade out
    bgLayer.style.opacity = 0;

    // after fade out, switch image and fade in
    setTimeout(() => {
        bgLayer.style.backgroundImage = `url('${images[index]}')`;
        bgLayer.style.opacity = 1;
        index = (index + 1) % images.length;
    }, 500); // match the CSS transition duration
}

// initialize first image
bgLayer.style.backgroundImage = `url('${images[0]}')`;
index = 1;

// change every 10 seconds
setInterval(nextBackground, displayTime);
