const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const banner_img = document.querySelector("#banner img");
const banner_p = document.querySelector("#banner p");
const arrow_left = document.getElementsByClassName("arrow_left")[0];
const arrow_right = document.getElementsByClassName("arrow_right")[0];
const dots = document.getElementsByClassName("dot");

let activeSlide = 0;
let selectedDot = document.getElementsByClassName("dot_selected")[0];

function lastImage() {
  if (activeSlide == 3) {
    return ".png";
  } else {
    return ".jpg";
  }
}

function slideLeft() {
  if (activeSlide > 0) {
    selectedDot.classList.remove("dot_selected");
    activeSlide--;
    dots[activeSlide].classList.add("dot_selected");
    banner_img.setAttribute(
      "src",
      "./assets/images/slideshow/slide" + (activeSlide + 1) + lastImage()
    );
    banner_p.innerHTML = slides[activeSlide].tagLine;
    selectedDot = document.getElementsByClassName("dot_selected")[0];
  } else {
    selectedDot.classList.remove("dot_selected");
    activeSlide = 3;
    dots[activeSlide].classList.add("dot_selected");
    selectedDot = document.getElementsByClassName("dot_selected")[0];
    banner_img.setAttribute(
      "src",
      "./assets/images/slideshow/slide" + (activeSlide + 1) + lastImage()
    );
    banner_p.innerHTML = slides[activeSlide].tagLine;
  }
}
function slideRight() {
  if (activeSlide < 3) {
    selectedDot.classList.remove("dot_selected");
    activeSlide++;
    dots[activeSlide].classList.add("dot_selected");
    banner_img.setAttribute(
      "src",
      "./assets/images/slideshow/slide" + (activeSlide + 1) + lastImage()
    );
    banner_p.innerHTML = slides[activeSlide].tagLine;
    selectedDot = document.getElementsByClassName("dot_selected")[0];
  } else {
    selectedDot.classList.remove("dot_selected");
    activeSlide = 0;
    dots[activeSlide].classList.add("dot_selected");
    selectedDot = document.getElementsByClassName("dot_selected")[0];
    banner_img.setAttribute(
      "src",
      "./assets/images/slideshow/slide" + (activeSlide + 1) + lastImage()
    );
    banner_p.innerHTML = slides[activeSlide].tagLine;
  }
}

arrow_left.addEventListener("click", slideLeft);
arrow_right.addEventListener("click", slideRight);
