const data = catalog;

const body = document.body;
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('.modal__block__close');

const modalBlock = document.querySelector('.modal__block');
const modalProduct = document.querySelector('.product');

const locpage = location.pathname.match(/[^/]*$/);
console.log(locpage[0]);

function init() {
  //let images = document.getElementsByTagName("img");
  let images = document.getElementsByClassName('item-image');
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = showModal;
  }
}

function showModal(eventObj) {
  let appDiv = document.getElementById('productImageModal');
  appDiv.innerHTML = '';
  let eventElement = eventObj.target;

  let imageNameParts = eventElement.id.split('-');

  let src = '../assets/catalog/' + 'image' + '-' + imageNameParts[1] + '.png';

  if (!(locpage == 'index.html')) {
    src = src;
  } else {
    src = src.replace('../', '');
  }

  let imageDomElement = document.createElement('img');
  imageDomElement.src = src;

  if (locpage === 'index.html') {
    imageDomElement.src.replace('../', '');
  }

  appDiv.appendChild(imageDomElement);

  let headDiv = document.getElementById('productTitleModal');
  headDiv.innerHTML = '';
  let srcHead = data[imageNameParts[1] - 1].name;
  let headDomElement = document.createElement('p');
  headDomElement.classList.add('product-title-modal');
  headDiv.appendChild(headDomElement);
  headDomElement.innerHTML = srcHead;

  let weightDiv = document.getElementById('productWeightModal');
  weightDiv.innerHTML = '';
  let srcWeight = data[imageNameParts[1] - 1].weight;
  let srcUnits = data[imageNameParts[1] - 1].units;
  let weightDomElement = document.createElement('p');
  weightDomElement.classList.add('product-weight-modal');
  weightDiv.appendChild(weightDomElement);
  weightDomElement.innerHTML = srcWeight + ' ' + srcUnits;

  let resumeDiv = document.getElementById('productResumeModal');
  resumeDiv.innerHTML = '';
  let srcResume = data[imageNameParts[1] - 1].resume;
  let resumeDomElement = document.createElement('p');
  resumeDomElement.classList.add('product-resume-modal');
  resumeDiv.appendChild(resumeDomElement);
  resumeDomElement.innerHTML = srcResume;

  let priceDiv = document.getElementById('productPriceModal');
  priceDiv.innerHTML = '';
  let srcCurrency = data[imageNameParts[1] - 1].currency;

  let srcPriceOrigin = data[imageNameParts[1] - 1].priceOrigin;
  let priceOriginDomElement = document.createElement('p');
  priceOriginDomElement.classList.add('product-price-origin-modal');
  priceDiv.appendChild(priceOriginDomElement);
  priceOriginDomElement.innerHTML = srcPriceOrigin + ' ' + srcCurrency;

  //   let srcPriceDiscount = data[imageNameParts[1] - 1].priceDiscount;
  //   let priceDiscountDomElement = document.createElement("p");
  //   priceDiscountDomElement.classList.add("product-price-discount");
  //   priceDiv.appendChild(priceDiscountDomElement);
  //   priceDiscountDomElement.innerHTML =
  //     "Discount: " + srcPriceDiscount + " " + srcCurrency;

  let srcPriceActive = data[imageNameParts[1] - 1].priceActive;
  let priceActiveDomElement = document.createElement('p');
  priceActiveDomElement.classList.add('product-price-active-modal');
  priceDiv.appendChild(priceActiveDomElement);
  priceActiveDomElement.innerHTML = srcPriceActive + ' ' + srcCurrency;

  //  check prices
  if (srcPriceActive == srcPriceOrigin) {
    priceOriginDomElement.style.display = 'none';
  } else {
    priceOriginDomElement.style.textDecoration = 'line-through';
  }

  // open modal
  modal.classList.add('modal--open');
  body.classList.add('lock');

  modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--open');
    body.classList.remove('lock');
    //  any function for modal closing, if needed
  });
}

window.onload = init;
