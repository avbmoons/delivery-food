const dataTest = catalog;
const dataTestLength = dataTest.length;
//console.log(dataTest);

let categoryName = new URLSearchParams(window.location.search).get('category');
console.log(categoryName);

let searchString = new URLSearchParams(window.location.search).get('search');
console.log(searchString);

let pageTitleText;
let pageCategory;
let pageSearch;

if (categoryName !== null) {
  for (let i = 0; i < dataTestLength; i++) {
    let thisCategory;
    if (dataTest[i].category == categoryName) {
      thisCategory = dataTest[i];
      pageTitleText = thisCategory.category;
      pageCategory = thisCategory.category;
    } else if (categoryName == 'All') {
      pageTitleText = 'All';
      pageCategory = 'All';
    } else if (categoryName == 'Vegan' && dataTest[i].isVegan == 'true') {
      thisCategory = dataTest[i];
      //console.log(dataTest[i]);
      pageTitleText = 'Vegan';
      pageCategory = 'Vegan';
    } else if (categoryName == 'Promo' && dataTest[i].isPromo == 'true') {
      thisCategory = dataTest[i];
      //console.log(dataTest[i]);
      pageTitleText = 'Promo';
      pageCategory = 'Promo';
    } else if (searchString !== null) {
      pageTitleText = searchString;
      pageSearch = searchString;
    } else {
      console.log('No category & no search');
    }
  }
}

let pageTitle = document.getElementById('headingPrime');
//console.log(pageTitleText);

if (
  pageTitleText == 'Hots' ||
  'Colds' ||
  'Bakery' ||
  'Desserts' ||
  'Beverages' ||
  'Vegan' ||
  'All' ||
  'Promo'
) {
  pageTitle.innerHTML = pageTitleText + ' ' + 'dishes';
}
// else {
//   console.log('No category & no search');
// }

console.log(searchString);
if (searchString !== null) {
  pageTitle.innerHTML = 'Search results ' + '"' + searchString + '"' + ':';
}

const reg = new RegExp(searchString, 'i');

class CatalogItem {
  constructor(
    id,
    name,
    image,
    weight,
    units,
    resume,
    description,
    priceOrigin,
    priceActive,
    currency,
    category,
    type,
    isPopular,
    isVegan,
    isPromo
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.weight = weight;
    this.units = units;
    this.resume = resume;
    this.description = description;
    this.priceOrigin = priceOrigin;
    this.priceActive = priceActive;
    this.currency = currency;
    this.category = category;
    this.type = type;
    this.isPopular = isPopular;
    this.isVegan = isVegan;
    this.isPromo = isPromo;
  }
  render() {
    return `<div data-id=${this.id} class="item-box">
      <div class="item-box__image">
        <img class="item-image"
          src="${this.image}"
          id="image-${this.id}"
          alt="item"
          title="${this.name}"
        />
      </div>
      <a class="item-box__heading" href="./product.html?id=" id="product${this.id}">${this.name}</a>
      <p class="item-box__weight">${this.weight}&nbsp;${this.units}</p>
      <p class="item-box__text">${this.resume}</p>
      <div class="item-box__shopping-box">
        <div class="item-box__shopping-box__price-box">
          <p class="item-box__shopping-box__price-box__origin">
            ${this.priceOrigin}&nbsp;${this.currency}</p>
          <p class="item-box__shopping-box__price-box__active">
            ${this.priceActive}&nbsp;${this.currency}</p>
        </div>
        <div class="item-box__shopping-box__button-box">
          <button type=""button" class="to-cart" id="toCart-${this.id}">
            <img src="../assets/icons/cart3.png" alt="to-cart" />
          </button>
        </div>
      </div>
    </div>`;
  }
  renderOnePrice() {
    return `<div data-id=${this.id} class="item-box">
      <div class="item-box__image">
        <img class="item-image"
          src="${this.image}"
          id="image-${this.id}"
          alt="item"
          title="${this.name}"
        />
      </div>
      <a class="item-box__heading" href="./product.html?id=" id="product${this.id}">${this.name}</a>
      <p class="item-box__weight">${this.weight}&nbsp;${this.units}</p>
      <p class="item-box__text">${this.resume}</p>
      <div class="item-box__shopping-box">
        <div class="item-box__shopping-box__price-box">
          <p class="item-box__shopping-box__price-box__active">
            ${this.priceActive}&nbsp;${this.currency}</p>
        </div>
        <div class="item-box__shopping-box__button-box">
          <button type=""button" class="to-cart" id="toCart-${this.id}">
            <img src="../assets/icons/cart3.png" alt="to-cart" />
          </button>
        </div>
      </div>
    </div>`;
  }
}

class CatalogList {
  constructor(cart) {
    this.ccatalog = []; //массив товаров
  }
  fetchCatalog() {
    this.ccatalog = catalog;
  }

  fetchCatalogFilter() {
    this.ccatalog = catalog.filter((catalog) =>
      catalog.category.includes(pageCategory)
    );
  }

  fetchVegan() {
    this.ccatalog = catalog.filter((catalog) => catalog.isVegan == 'true');
  }

  fetchPromo() {
    this.ccatalog = catalog.filter((catalog) => catalog.isPromo == 'true');
  }

  fetchSearch() {
    this.ccatalog = catalog.filter(
      (catalog) =>
        reg.test(catalog.name) ||
        reg.test(catalog.resume) ||
        reg.test(catalog.description) ||
        reg.test(catalog.priceActive)
    );
  }

  render() {
    let listHtml = '';
    this.ccatalog.forEach((ccatalog) => {
      const catalogItem = new CatalogItem(
        ccatalog.id,
        ccatalog.name,
        ccatalog.image,
        ccatalog.weight,
        ccatalog.units,
        ccatalog.resume,
        ccatalog.description,
        ccatalog.priceOrigin,
        ccatalog.priceActive,
        ccatalog.currency,
        ccatalog.category,
        ccatalog.type,
        ccatalog.isPopular,
        ccatalog.isVegan
      );
      if (catalogItem.priceActive == catalogItem.priceOrigin) {
        listHtml += catalogItem.renderOnePrice();
      } else {
        listHtml += catalogItem.render();
      }
    });
    document.querySelector('.catalog__block').innerHTML = listHtml;
  }

  // render() {
  //   let listHtml = '';
  //   this.ccatalog.forEach((ccatalog) => {
  //     const catalogItem = new CatalogItem(
  //       ccatalog.id,
  //       ccatalog.name,
  //       ccatalog.image,
  //       ccatalog.weight,
  //       ccatalog.units,
  //       ccatalog.resume,
  //       ccatalog.description,
  //       ccatalog.priceOrigin,
  //       ccatalog.priceActive,
  //       ccatalog.currency,
  //       ccatalog.category,
  //       ccatalog.type,
  //       ccatalog.isPopular,
  //       ccatalog.isVegan
  //     );
  //     listHtml += catalogItem.render();
  //   });
  //   document.querySelector('.catalog__block').innerHTML = listHtml;
  // }
}

const list = new CatalogList();

if (
  categoryName !== null &&
  categoryName !== 'All' &&
  categoryName !== 'Vegan' &&
  categoryName !== 'Promo'
) {
  list.fetchCatalogFilter();
} else if (categoryName == 'All') {
  list.fetchCatalog();
} else if (categoryName == 'Vegan') {
  list.fetchVegan();
} else if (categoryName == 'Promo') {
  list.fetchPromo();
} else {
  list.fetchSearch();
}

//list.fetchCatalog();

list.render();
