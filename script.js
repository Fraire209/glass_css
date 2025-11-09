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

//change every 10 seconds
setInterval(nextBackground, displayTime);

// ************************************************************ Banner animation demo **************************************************
const panel = document.getElementById("panel");
const buttons = document.querySelectorAll(".dismissBtn");

// Fade downward on initial render after half a second to make sure it is visible on page load
window.addEventListener("load", () => {
  setTimeout(() => {
    panel.classList.remove("hidden"); // triggers fade-down
  }, 500); 
});

// Button logic
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    panel.classList.add("hidden"); // fade up

    setTimeout(() => {
      panel.classList.remove("hidden"); // fade back down after 2s
    }, 2000);
  });
});
