document.addEventListener("DOMContentLoaded", function () {
    const circleContainer = document.getElementById("circle-container");
    const flame = document.getElementById("flame");
    const moon = document.getElementById("moon");
    const sun = document.getElementById("sun");
    const lightModeButton = document.getElementById("light-mode");
    const darkModeButton = document.getElementById("dark-mode");
    const mainContent = document.getElementById("main-content");
    const textContainer = document.getElementById("text-container");
  
    textContainer.classList.remove("hidden");
    textContainer.classList.add("fade-in");
  
    lightModeButton.addEventListener("click", function () {
      flame.classList.remove("hidden");
      flame.classList.add("fade-in"); 
      sun.classList.remove("hidden");
      sun.classList.add("fade-in"); 
      setTimeout(() => {
        circleContainer.classList.add("fade-out"); 
        textContainer.classList.add("fade-out"); 
        setTimeout(() => {
          circleContainer.style.display = "none"; 
          textContainer.style.display = "none"; 
          mainContent.classList.remove("hidden"); 
          document.body.style.backgroundColor = "#f0f0f0"; 
        }, 1000);
      }, 1000);
    });
  
    darkModeButton.addEventListener("click", function () {
        flame.classList.remove("hidden");
        flame.classList.add("fade-in"); 
        moon.classList.remove("hidden");
        moon.classList.add("fade-in");
        setTimeout(() => {
            circleContainer.classList.add("fade-out"); 
            textContainer.classList.add("fade-out"); 
            setTimeout(() => {
              circleContainer.style.display = "none"; 
              textContainer.style.display = "none";
              mainContent.classList.remove("hidden"); 
              document.body.style.backgroundColor = "#333"; 
              document.body.style.color = "#fff"; 
            }, 1000); 
          }, 1000); 
  });
});