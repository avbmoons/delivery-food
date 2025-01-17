//let data2 = catalog;

let arrCategory = document.querySelectorAll('.nav-item__button-box__button');

let arrCategoryMini = document.querySelectorAll('.menu-mini-item__link');

//console.log(arrCategory);
//console.log(arrCategoryMini);

arrCategory.forEach((arrCategory) => {
  //console.log(arrCategory.textContent);
  let el = arrCategory.textContent;
  let categoryEl;

  switch (el) {
    case 'HOTS':
      categoryEl = 'Hots';
      break;
    case 'COLDS':
      categoryEl = 'Colds';
      break;
    case 'BAKERY':
      categoryEl = 'Bakery';
      break;
    case 'DESSERTS':
      categoryEl = 'Desserts';
      break;
    case 'BEVERAGES':
      categoryEl = 'Beverages';
      break;
    case 'VEGAN':
      categoryEl = 'Vegan';
      break;
    case 'ALL DISHES':
      categoryEl = 'All';
      break;
    case 'PROMO':
      categoryEl = 'Promo';
      break;
  }

  arrCategory.href = 'pages/catalog.html?category=' + categoryEl;
});

arrCategoryMini.forEach((arrCategoryMini) => {
  //console.log(arrCategory.textContent);
  let el = arrCategoryMini.textContent;
  let categoryEl;

  switch (el) {
    case 'Hots':
      categoryEl = 'Hots';
      break;
    case 'Colds':
      categoryEl = 'Colds';
      break;
    case 'Bakery':
      categoryEl = 'Bakery';
      break;
    case 'Desserts':
      categoryEl = 'Desserts';
      break;
    case 'Beverages':
      categoryEl = 'Beverages';
      break;
    case 'Vegan':
      categoryEl = 'Vegan';
      break;
    case 'All dishes':
      categoryEl = 'All';
      break;
    case 'Promo':
      categoryEl = 'Promo';
      break;
  }

  arrCategoryMini.href = 'pages/catalog.html?category=' + categoryEl;
});
