const dataTest = catalog;

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
    isVegan
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

class RelatedList {
  constructor() {
    this.ccatalog = [];
  }
  fetchRelated() {
    this.ccatalog = catalog.filter((catalog) => catalog.type == productType);
  }
  render() {
    let listHtml = '';

    this.ccatalog.forEach((ccatalog) => {
      const catalogItem = new CatalogItem(
        ccatalog.id,
        ccatalog.name,
        //ccatalog.image.replace('../', ''),
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
      //listHtml += catalogItem.render();
    });
    document.querySelector('.catalog__block').innerHTML = listHtml;
  }
}

const list = new RelatedList();
list.fetchRelated();
list.render();
