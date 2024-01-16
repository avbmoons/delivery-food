var imgIndPorto = 0;
var slideRef = document.createElement("a");
var slidePorto = document.createElement("img");
slidePorto.className = "slide-porto";
slidePorto.setAttribute("id", "porto");
slidePorto.src = "assets/portfolio/img/porto-1.jpg";
slideRef.href = progs[0].ref;
document
  .querySelector(".images-porto")
  .appendChild(slidePorto)
  .addEventListener("click", function () {
    window.open(slideRef.href, "_blank");
  });

var pointIndPorto = 0;
var point = document.createElement("point-porto");
point.className = "point-porto-box";
point.setAttribute("id", "value");
point.src = "&#9633";
document.querySelector(".point-porto").appendChild(point);

//  Определяем массив слайдов с нумерацией в имени файлов, ссылки проектов и массив пунктов
var imgNumPorto = [];
var imgSlidesPorto = [];
var imgRefs = [];

var pointNumPorto = []; //
var pointSlidesPorto = []; //

for (var i = 1; i < 8; i++) {
  imgNumPorto.push(i);
  pointNumPorto.push(i); //
}

for (var j = 0; j < 7; j++) {
  imgSlidesPorto.push("porto-" + imgNumPorto[j] + ".jpg");
  imgRefs.push(progs[j].ref);
  pointSlidesPorto.push(point.src); //
}

// выводим поинты на страницу
var pointPorto = document.getElementById("point-porto");
var strPorto = " ";
for (var n = 0; n < pointSlidesPorto.length; n++) {
  if (n !== pointIndPorto) {
    pointSlidesPorto[n] = "&#9633";
  } else {
    pointSlidesPorto[n] = "&#9632";
  }
  strPorto += pointSlidesPorto[n] + " ";
}
pointPorto.innerHTML = strPorto;

// событие для кнопки Вперед
function toRightPorto(id) {
  var slidePorto = document.getElementById(id);
  if (imgIndPorto == imgSlidesPorto.length - 1) {
    imgIndPorto = 0;
    pointIndPorto = 0; //
  } else {
    imgIndPorto++;
    pointIndPorto++; //
  }
  slidePorto.src = "assets/portfolio/img/" + imgSlidesPorto[imgIndPorto];
  slideRef.href = progs[imgIndPorto].ref;
  var strPorto = " ";
  for (var n = 0; n < pointSlidesPorto.length; n++) {
    if (n !== pointIndPorto) {
      pointSlidesPorto[n] = "&#9633";
    } else {
      pointSlidesPorto[n] = "&#9632";
    }
    strPorto += pointSlidesPorto[n] + " ";
  }
  pointPorto.innerHTML = strPorto;
}

// событие для кнопки Назад
function toLeftPorto(id) {
  var slidePorto = document.getElementById(id);
  if (imgIndPorto == 0) {
    imgIndPorto = imgSlidesPorto.length - 1;
    pointIndPorto = pointSlidesPorto.length - 1;
  } else {
    imgIndPorto--;
    pointIndPorto--;
  }
  slidePorto.src = "assets/portfolio/img/" + imgSlidesPorto[imgIndPorto];
  slideRef.href = progs[imgIndPorto].ref;
  var strPorto = " ";
  for (var n = 0; n < pointSlidesPorto.length; n++) {
    if (n !== pointIndPorto) {
      pointSlidesPorto[n] = "&#9633";
    } else {
      pointSlidesPorto[n] = "&#9632";
    }
    strPorto += pointSlidesPorto[n] + " ";
  }
  pointPorto.innerHTML = strPorto;
}
