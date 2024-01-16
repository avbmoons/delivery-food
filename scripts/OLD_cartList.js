//const dataTest = catalogTest;

const dataCart = savedCart;
dataCart.products = savedCart.products;
console.log(dataCart.products[0].name);

const locpage = location.pathname.match(/[^/]*$/);
console.log(locpage[0]);
// console.log(savedCart);
// console.log(dataCart.products.length);
// const dataIdArr = [];
// function dataIdToArr() {
//   for (i = 0; i < dataCart.products.length; i++) {
//     dataIdArr[i] = dataCart.products[i].id;
//   }
//   return dataIdArr;
// }
// dataIdToArr();
// console.log(dataIdArr);

// const dataCartListArr = [];
// function dataCartList() {
//   forEach((dataTest) => {
//     if (dataTest.id == dataIdToArr) {
//       dataCartListArr = dataTest;
//     }
//   });
//   //   for (j = 0; j <= dataIdArr.length; i++) {
//   //     dataCartListArr[j] = dataTest[j];
//   //   }
//   return dataCartListArr;
// }
// dataCartList();
// console.log(dataCartListArr);

class CartItem {
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
  constructor() {
    this.id = dataCart.products.id; // card.getAttribute("data-id").value;
    this.name = dataCart.products.name;
    this.image = dataCart.products.image;
    this.weight = dataCart.products.weight;
    this.units = dataCart.products.units;
    this.resume = dataCart.products.resume;
    this.description = dataCart.products.description;
    this.priceOrigin = dataCart.products.priceOrigin;
    this.priceActive = dataCart.products.priceActive;
    this.currency = dataCart.products.currency;
    this.category = dataCart.products.category;
    this.type = dataCart.products.type;
    this.isPopular = dataCart.products.isPopular;
    this.isVegan = dataCart.products.isVegan;
  }
  render() {
    return `<div item-id=${this.id} class="cart-item">
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
        <div class="price-origin-box">
            <p class="price-origin">${this.priceOrigin}</p>
            <p class="currency">${this.currency}</p>
        </div>
        <div class="price-active-box">
            <p class="price-active">${this.priceActive}</p>
            <p class="currency">${this.currency}</p>
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
          />
          <button class="counter-plus" onclick="counterPlus()">
            +
          </button>
        </div>
      </div>
      <div class="total-box">
        <div class="total-origin-box">
            <p class="total-origin">6.2</p>
            <p class="currency">&euro;</p>
        </div>
        <div class="total-active-box">
            <p class="total-active">4.95</p>
            <p class="currency">&euro;</p>
        </div>
      </div>
      <div class="button-box">
        <button class="button-delete">
          <img src="../assets/icons/delete.png" alt="to-cart" />
        </button>
      </div>
    </div>`;
  }
}

class CartList {
  constructor() {
    this.ccartTest = []; //массив товаров в корзине
  }
  fetchCartList() {
    //this.ccartTest = Array.from(dataCart);
    this.ccartTest = dataCart.products;
  }

  render() {
    let cartHTML = "";
    this.ccartTest.forEach((ccartTest) => {
      const cartItem = new CartItem(
        ccartTest.id,
        ccartTest.name,
        ccartTest.image,
        ccartTest.weight,
        ccartTest.units,
        ccartTest.resume,
        ccartTest.description,
        ccartTest.priceOrigin,
        ccartTest.priceActive,
        ccartTest.currency,
        ccartTest.category,
        ccartTest.type,
        ccartTest.isPopular,
        ccartTest.isVegan
      );
      cartHTML += cartItem.render();
    });
    window.document.querySelector(".cart-list").innerHTML = cartHTML;
  }
}

const cartList = new CartList();

cartList.products = savedCart.products;

cartList.fetchCartList();

// console.log(cartList);
// console.log(savedCart);

cartList.render();

// ////функция перехода на страницу корзины
// const cartPage = function () {
//   window.location.href = "../pages/cartTest.html";
//   cartContainerFill();
// };
