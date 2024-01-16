class Cart {
  products;
  constructor() {
    this.products = [];
  }
  get count() {
    return this.products.length;
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(index) {
    this.products.splice(index, 1);
    location.reload();
  }
  get cost() {
    const prices = this.products.map((product) => {
      return product.priceOrigin;
    });
    const sum = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum;
  }
  get costDiscount() {
    const prices = this.products.map((product) => {
      return product.priceOrigin - product.priceActive;
    });
    const sum = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum;
  }
  get costTotal() {
    return this.cost - this.costDiscount;
  }
}

class Product {
  id;
  name;
  image;
  weight;
  units;
  resume;
  description;
  priceOrigin;
  priceActive;
  currency;
  category;
  type;
  isPopular;
  isVegan;
  constructor(cardId) {
    this.id = cardId; // card.getAttribute("data-id").value;
    this.name = dataTest[this.id - 1].name;
    this.image = dataTest[this.id - 1].image;
    this.weight = dataTest[this.id - 1].weight;
    this.units = dataTest[this.id - 1].units;
    this.resume = dataTest[this.id - 1].resume;
    this.description = dataTest[this.id - 1].description;
    this.priceOrigin = dataTest[this.id - 1].priceOrigin;
    this.priceActive = dataTest[this.id - 1].priceActive;
    this.currency = dataTest[this.id - 1].currency;
    this.category = dataTest[this.id - 1].category;
    this.type = dataTest[this.id - 1].type;
    this.isPopular = dataTest[this.id - 1].isPopular;
    this.isVegan = dataTest[this.id - 1].isVegan;
  }
  render() {
    return `<div class="cart-item">
    <div class="image-box">
      <img
        src="${this.image}"
        id="image-${this.id}"
        alt="photo"
      />
    </div>
    <div class="name-box">
      <p class="name-box__name">${this.name}</p>
      <p class="name-box__weight">${this.weight}&nbsp;${this.units}</p>
    </div>
    <div class="price-box">
      <p class="price-origin">${this.priceOrigin}&nbsp;${this.currency}</p>
      <p class="price-active">${this.priceActive}&nbsp;${this.currency}</p>
    </div>
    <div class="counter-box">
      <div class="counter">
        <button class="counter-minus" onclick="counterMinus()">
          -
        </button>
        <input
          class="counter-value"
          id="counter-${this.id}"
          type="text"
          value="1"
          readonly
        />
        <button class="counter-plus" onclick="counterPlus()">
          +
        </button>
      </div>
    </div>
    <div class="total-box">
      <p class="total-origin">620&nbsp;${this.currency}</p>
      <p class="total-active">495&nbsp;${this.currency}</p>
    </div>
    <div class="button-box">
      <button class="button-delete">
        <img src="../assets/icons/delete.png" alt="to-cart" />
      </button>
    </div>
  </div>`;
  }
}

const cardAddArr = Array.from(document.querySelectorAll(".to-cart"));

const cartNum = document.querySelector("#cartBtnNum"); //счетчик товаров в корзине
const cartBtn = document.querySelector("#cartBtn"); //кнопка открытия корзины

const myCart = new Cart();
if (localStorage.getItem("cartTest") == null) {
  localStorage.setItem("cartTest", JSON.stringify(myCart));
}

const savedCart = JSON.parse(localStorage.getItem("cartTest"));

myCart.products = savedCart.products;
cartNum.textContent = myCart.count;

// console.log(myCart);
// //  начальный массив количества товаров
// let savedProductsNum = [];
// function productsNum() {
//   for (i = 0; i < myCart.products.length; i++) {
//     savedProductsNum[i] = [
//       {
//         id: myCart.products[i].id,
//         productNum: 1,
//       },
//     ];
//   }
//   return savedProductsNum;
// }
// savedProductsNum = productsNum();
// console.log(savedProductsNum);

// //  сохранение массива количества товаров
// if (localStorage.getItem("productsNumTest") == null) {
//   localStorage.setItem("productsNumTest", JSON.stringify(savedProductsNum));
// }
// const myProductsNum = JSON.parse(localStorage.getItem("productsNumTest"));
// console.log(myProductsNum);

// добавление товара в корзину
myCart.products = cardAddArr.forEach((cardAdd) => {
  cardAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest(".item-box");
    //const cardId = e.target.getAttribute("data-id");
    const cardId = card.getAttribute("data-id");

    console.log(cardId);

    const product = new Product(cardId);
    const savedCart = JSON.parse(localStorage.getItem("cartTest"));
    myCart.products = savedCart.products;
    myCart.addProduct(product);
    localStorage.setItem("cartTest", JSON.stringify(myCart));
    cartNum.textContent = myCart.count;
  });
});

////функция перехода на страницу корзины
const cartPage = function () {
  window.location.href = "../pages/cartTest.html";
  cartContainerFill();
};

////    открытие страницы корзины
cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cartPage();
});
