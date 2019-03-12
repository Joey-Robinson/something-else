const openSlide = document.getElementById("openSlideMenu")
openSlide.addEventListener("click", () => {
  const slide = document.getElementById("slide");
  slide.style.width = "100vw";
});

const closeSlide = document.getElementById("closeSlideMenu")
closeSlide.addEventListener("click", () => {
  const slide = document.getElementById("slide");
  slide.style.width = "0";
});