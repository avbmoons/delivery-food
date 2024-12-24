let data2 = catalog;
let dataLength = data2.length;

let productId = new URLSearchParams(window.location.search).get('id');

console.log(productId);

let pageTitleText;

let productImageLink;
let productDescriptionText;
let productNameText;
let productWeightText;
let productUnitsText;
let productPriceActiveText;
let productPriceOriginText;
let productCurrencyActiveText;
let productCurrencyOriginText;
let productType;

for (let i = 0; i < dataLength; i++) {
  if (data2[i].id == productId) {
    productShow = data2[i];

    pageTitleText = data2[i].name;
    console.log(pageTitleText);

    productImageLink = data2[i].image;
    productDescriptionText = data2[i].description;
    productNameText = data2[i].name;
    productWeightText = data2[i].weight;
    productUnitsText = data2[i].units;
    productPriceActiveText = data2[i].priceActive;
    productPriceOriginText = data2[i].priceOrigin;
    productCurrencyActiveText = data2[i].currency;
    productCurrencyOriginText = data2[i].currency;
    productType = data2[i].type;
  } else {
    console.log('No products');
  }
}

let pageTitle = document.getElementById('pageTitle');
pageTitle.textContent = pageTitleText;

let productImage = document.getElementById('productImage');
productImage.src = productImageLink;

let productDescription = document.getElementById('productDescription');
productDescription.textContent = productDescriptionText;

let productName = document.getElementById('productName');
productName.textContent = productNameText;

let productWeight = document.getElementById('productWeight');
productWeight.textContent = productWeightText;

let productUnits = document.getElementById('productUnits');
productUnits.textContent = productUnitsText;

let productPriceOrigin = document.getElementById('productPriceOrigin');
productPriceOrigin.textContent = productPriceOriginText;

let productPriceActive = document.getElementById('productPriceActive');
productPriceActive.textContent = productPriceActiveText;

let productCurrencyActive = document.getElementById('currencyActive');
productCurrencyActive.innerHTML = productCurrencyActiveText;
let productCurrencyOrigin = document.getElementById('currencyOrigin');
productCurrencyOrigin.innerHTML = productCurrencyOriginText;
