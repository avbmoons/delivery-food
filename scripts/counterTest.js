//  события по клику на кнопки плюс и минус
document.onclick = (event) => {
  //console.log(event.target.classList);
  let countId = event.target.getAttribute("data-id");
  //console.log(countId);
  let countEls = document.querySelectorAll("input[data-id]");
  let costEls = document.querySelectorAll("p[data-id]");
  console.log(costEls);
  console.log(countEls);
  needInput = inputFunction(countEls, countId);

  //priceFunction(costEls, countId);
  let priceOrigin = priceOriginFunction(costEls, countId);
  let priceOriginValue = priceOrigin.innerHTML;
  console.log("priceOrigin= " + priceOriginValue);

  let priceActive = priceActiveFunction(costEls, countId);
  let priceActiveValue = priceActive.innerHTML;
  console.log("priceActive= " + priceActive.innerHTML);

  let totalOrigin = totalOriginFunction(costEls, countId);
  let totalOriginValue = totalOrigin.innerHTML;
  console.log("totalOrigin= " + totalOriginValue);

  let totalActive = totalActiveFunction(costEls, countId);
  let totalActiveValue = totalActive.innerHTML;
  console.log("totalActive= " + totalActive.innerHTML);
  //console.log(priceOrigin, priceActive, totalOrigin, totalActive);
  //console.log(needInput.dataset.id);
  if (event.target.classList.contains("counter-plus")) {
    plusFunction(needInput);
  } else if (event.target.classList.contains("counter-minus")) {
    //console.log(event.target.dataset.id);
    minusFunction(needInput);
  }
  let quantity = needInput.value;
  console.log("quantity= " + quantity);
  totalOriginValue = quantity * priceOriginValue;
  console.log("totalOriginValue= " + totalOriginValue);
  totalOrigin.innerHTML = toFixed(totalOriginValue, 2);

  totalActiveValue = quantity * priceActiveValue;
  console.log("totalActiveValue= " + totalActiveValue);
  //totalActive.innerHTML = totalActiveValue;
  totalActive.innerHTML = toFixed(totalActiveValue, 2);
};

function inputFunction(arr, needId) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    let countId = arr[i].getAttribute("data-id");
    if (countId == needId) {
      return arr[i];
    }
  }
}

function priceOriginFunction(arr, needId) {
  for (i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    let countId = arr[i].getAttribute("data-id");
    let attrClass = arr[i].className;
    if (countId == needId && attrClass == "price-origin") {
      return arr[i];
    }
  }
}

function priceActiveFunction(arr, needId) {
  for (i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    let countId = arr[i].getAttribute("data-id");
    let attrClass = arr[i].className;
    if (countId == needId && attrClass == "price-active") {
      return arr[i];
    }
  }
}

function totalOriginFunction(arr, needId) {
  for (i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    let countId = arr[i].getAttribute("data-id");
    let attrClass = arr[i].className;
    if (countId == needId && attrClass == "total-origin") {
      return arr[i];
    }
  }
}

function totalActiveFunction(arr, needId) {
  for (i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    let countId = arr[i].getAttribute("data-id");
    let attrClass = arr[i].className;
    if (countId == needId && attrClass == "total-active") {
      return arr[i];
    }
  }
}

function toFixed(num, size) {
  return Math.round(num * Math.pow(10, size)) / Math.pow(10, size);
}

function priceFunction(arr, needId) {
  let priceOrigin;
  let priceActive;
  let totalOrigin;
  let totalActive;

  console.log(arr.length);

  for (i = 0; i < arr.length; i++) {
    let countId = arr[i].getAttribute("data-id");
    let attrClass = arr[i].className;
    //console.log(attrClass);
    if (countId === needId) {
      switch (attrClass) {
        case "price-origin":
          priceOrigin = arr[i].innerHTML;
          //console.log("priceOrigin= " + priceOrigin);
          console.log("priceOrigin= " + arr[i].innerHTML);
        case "price-active":
          priceActive = arr[i].innerHTML;
          console.log("priceActive= " + priceActive);
        case "total-origin":
          totalOrigin = arr[i].innerHTML;
          console.log("totalOrigin= " + totalOrigin);
        case "total-active":
          totalActive = arr[i].innerHTML;
          console.log("totalActive= " + totalActive);
      }
    }
  }
  return priceOrigin, priceActive, totalOrigin, totalActive;
  //return console.log(priceOrigin, priceActive, totalOrigin, totalActive);
}

//  увеличение количества товара
function plusFunction(countInput) {
  //let quantity;
  let counterId = countInput.dataset.id;
  console.log(counterId);
  let count = countInput.value;
  //console.log(count);
  if (count >= 1) {
    count++;
    countInput.value = count;
    countInput.innerHTML;
    //quantity = count;
    //console.log("quantity= " + quantity);
    console.log(count);
  }
}

// const plusFunction = (id) => {
//   let countInput = document.querySelector(".counter-value");
//   console.log(countInput);
//   let counterId = countInput.dataset.id;
//   console.log(counterId);
//   if (counterId == id) {
//     let count = countInput.value;
//     console.log(count);
//     if (count >= 1) {
//       count++;
//       countInput.value = count;
//       countInput.innerHTML;
//     }
//   }

//   //
//   //renderCart();
// };

// function counterPlus() {
//   let countInput = document.querySelector(".counter-value");
//   let count = countInput.value;
//   console.log(count);
//   if (count >= 1) {
//     count++;
//     countInput.value = count;
//     countInput.innerHTML;
//   }
// }

//  уменьшение количества товара
const minusFunction = (countInput) => {
  let counterId = countInput.dataset.id;
  console.log(counterId);
  let count = countInput.value;
  //console.log(count);
  if (count > 1) {
    count--;
    countInput.value = count;
    countInput.innerHTML;
  }
};

// function counterMinus() {
//   let countInput = document.querySelector(".counter-value");
//   let count = countInput.value;
//   if (count > 1) {
//     count--;
//     countInput.value = count;
//     countInput.innerHTML;
//   }
// }

// //  обновление полей
// const renderCart = () => {
//   //
// };

let cartBtnNum = document.querySelector("#cartBtnNum");
let headingCounter = document.querySelector("#headingCounter");
let headingNum = headingCounter.textContent;

headingNum = cartBtnNum.textContent;
//console.log(headingNum);

headingCounter.textContent = headingNum;
headingCounter.innerHTML;
