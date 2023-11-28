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
const arrow_left = document.getElementsByClassName("arrow_left");
const arrow_right = document.getElementsByClassName("arrow_right");
const dots = document.getElementsByClassName("dot");

let activeSlide = 0;
let selectedDot = document.getElementsByClassName("dot_selected");

function lastImage() {
  if (activeSlide == 3) {
    return ".png";
  } else {
    return ".jpg";
  }
}

function slideLeft() {
  if (activeSlide > 0) {
    selectedDot[0].classList.remove("dot_selected");
    activeSlide--;
    dots[activeSlide].classList.add("dot_selected");
    banner_img.setAttribute(
      "src",
      "./assets/images/slideshow/slide" + (activeSlide + 1) + ".jpg"
    );
    banner_p.innerHTML = slides[activeSlide].tagLine;
    console.log("clic gauche");
  } else {
	activeSlide = 3;
  }
}
function slideRight() {
  if (activeSlide < 3) {
    selectedDot[0].classList.remove("dot_selected");
    activeSlide++;
    dots[activeSlide].classList.add("dot_selected");
    banner_img.setAttribute(
      "src",
      "./assets/images/slideshow/slide" + (activeSlide + 1) + lastImage()
    );
    banner_p.innerHTML = slides[activeSlide].tagLine;
  } else {
	activeSlide = 0;
	
  }
}

console.log(arrow_left);

arrow_left[0].addEventListener("click", slideLeft());
arrow_right[0].addEventListener("click", slideRight());
