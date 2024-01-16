var imgInd = 0;

const slides = [
  {
    id: 1,
    image: "assets/slides/slide-1.png",
  },
  {
    id: 2,
    image: "assets/slides/slide-2.png",
  },
  {
    id: 3,
    image: "assets/slides/slide-3.png",
  },
  {
    id: 4,
    image: "assets/slides/slide-4.png",
  },
];

var slide = document.createElement("img");
slide.className = "poster__slide__image";
slide.setAttribute("id", "image");
slide.src = "assets/slides/slide-1.png";

document.querySelector(".poster__slide").appendChild(slide);

var imgNum = [];
var imgSlides = [];

slidesLength = slides.length;
console.log(slidesLength);

for (var i = 1; i <= slidesLength; i++) {
  imgNum.push(i);
}

for (var j = 0; j < slidesLength; j++) {
  imgSlides.push("slide-" + imgNum[j] + ".png");
}

slideShow();

// событие для кнопки Вперед
function slideShow(id) {
  //var slide = document.getElementById(id);
  var slide = imgSlides;
  console.log(slide);
  for (i = 0; i < slidesLength; i++) {
    slide[i].style.display = "none";
  }
  imgInd++;
  if (imgInd > slidesLength) {
    imgInd = 1;
  }
  slide.src = "assets/slides/" + imgSlides[imgInd];
  slide[imgInd - 1].style.display = "block";
  setTimeout(slideShow, 3000);

  // if (imgInd == imgSlides.length - 1) {
  //   imgInd = 0;
  // } else {
  //   imgInd++;
  // }
  // slide.src = "assets/slides/" + imgSlides[imgInd];
}
