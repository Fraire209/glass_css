const images = [
  './images/pexels-rpnickson-2559941.jpg',
  './images/rbUCFdO.jpg',
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
// Fade downward on initial render
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll(".panel").forEach(panel => {
      panel.classList.remove("hidden"); 
    });
  }, 500);
});

// Button logic
const buttons = document.querySelectorAll(".dismissBtn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.closest(".panel");
    if (!panel) return;

    panel.classList.add("hidden"); 

    // Force Chrome to remove focus from button to show button back in closed state
    btn.blur();

    // Bring it back after 2s for demo purposes
    setTimeout(() => {
      // Use requestAnimationFrame to force repaint
      requestAnimationFrame(() => {
        panel.classList.remove("hidden");
      });
    }, 2000);
  });
});


//********************************************************** Border animation ************************************************* */
const danger_panel = document.querySelector('.glass-panel-danger');
const warning_panel = document.querySelector('.glass-panel-warning');
const info_panel = document.querySelector('.glass-panel-info');
const success_panel = document.querySelector('.glass-panel-success');
let angle = 0;

function animateGradient() {
  angle += 1; // degrees per frame
  danger_panel.style.setProperty('--angle', `${angle}deg`);
  warning_panel.style.setProperty('--angle', `${angle}deg`);
  info_panel.style.setProperty('--angle', `${angle}deg`);
  success_panel.style.setProperty('--angle', `${angle}deg`);
  requestAnimationFrame(animateGradient);
}

animateGradient();
