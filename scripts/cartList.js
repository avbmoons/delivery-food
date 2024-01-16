//// функция преобразования цен в числа
function toNum(str) {
  const num = Number(str.replace(/ /g, ""));
  return num;
}

////    считывание элементов корзины
const cartContainer = document.querySelector("#cartBlock"); //блок список+тотал
const cartProductList = document.querySelector("#cartList"); //список товаров в корзине
const cartCostTotal = document.querySelector("#cartCostTotal");

////    заполнение корзины
function cartContainerFill() {
  cartProductList.innerHTML = null;
  const savedCart = JSON.parse(localStorage.getItem("foodCart"));
  myCart.products = savedCart.products;

  let totalCart = document.querySelector("#cartCostTotal");
  let totalCartValue = totalCart.textContent;

  function total() {
    let totalValue = Number(totalCartValue);
    for (i = 0; i < myCart.products.length; i++) {
      totalValue = totalValue + Number(myCart.products[i].priceActive);
    }
    return toFixed(totalValue, 2);
  }

  totalCart.innerHTML = total();

  const productsHTML = myCart.products.map((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("cart-item");

    const productImageBox = document.createElement("div");
    productImageBox.classList.add("image-box");
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImageBox.appendChild(productImage);

    const productNameBox = document.createElement("div");
    productNameBox.classList.add("name-box");
    const productName = document.createElement("p");
    productName.classList.add("name-box__name");
    const productWeight = document.createElement("p");
    productWeight.classList.add("name-box__weight");
    productNameBox.appendChild(productName);
    productNameBox.appendChild(productWeight);
    productName.innerHTML = product.name;
    productWeight.innerHTML = product.weight;

    const productPriceBox = document.createElement("div");
    productPriceBox.classList.add("price-box");
    const productPriceOriginBox = document.createElement("div");
    productPriceOriginBox.classList.add("price-origin-box");
    const productPriceActiveBox = document.createElement("div");
    productPriceActiveBox.classList.add("price-active-box");
    productPriceBox.appendChild(productPriceOriginBox);
    productPriceBox.appendChild(productPriceActiveBox);
    const productPriceOrigin = document.createElement("p");
    productPriceOrigin.classList.add("price-origin");
    productPriceOrigin.dataset.id = product.id;
    const productPriceActive = document.createElement("p");
    productPriceActive.classList.add("price-active");
    productPriceActive.dataset.id = product.id;
    const currencyPriceOrigin = document.createElement("p");
    currencyPriceOrigin.classList.add("currency");
    currencyPriceOrigin.innerHTML = product.currency;
    productPriceOrigin.innerHTML = product.priceOrigin;
    productPriceActive.innerHTML = product.priceActive;
    const currencyPriceActive = document.createElement("p");
    currencyPriceActive.classList.add("currency");
    currencyPriceActive.innerHTML = product.currency;
    productPriceOriginBox.appendChild(productPriceOrigin);
    productPriceOriginBox.appendChild(currencyPriceOrigin);
    productPriceActiveBox.appendChild(productPriceActive);
    productPriceActiveBox.appendChild(currencyPriceActive);

    const counterBox = document.createElement("div");
    counterBox.classList.add("counter-box");
    const counter = document.createElement("div");
    counter.classList.add("counter");
    counterBox.appendChild(counter);
    const counterMinus = document.createElement("button");
    counterMinus.classList.add("counter-minus");
    counterMinus.value = "-";
    counterMinus.dataset.id = product.id;
    counterMinus.onclick = "minusFunction()";
    const counterPlus = document.createElement("button");
    counterPlus.classList.add("counter-plus");
    counterPlus.value = "+";
    counterPlus.dataset.id = product.id;
    counterPlus.onclick = "plusFunction()";
    const counterValue = document.createElement("input");
    counterValue.classList.add("counter-value");
    counterValue.value = "1";
    counterValue.readOnly = true;
    counterValue.dataset.id = product.id;
    counter.appendChild(counterMinus);
    counter.appendChild(counterValue);
    counter.appendChild(counterPlus);
    counterMinus.innerHTML = "-";
    counterValue.innerHTML = "1";
    counterPlus.innerHTML = "+";

    const productTotalBox = document.createElement("div");
    productTotalBox.classList.add("total-box");
    const productTotalOriginBox = document.createElement("div");
    productTotalOriginBox.classList.add("total-origin-box");
    const productTotalActiveBox = document.createElement("div");
    productTotalActiveBox.classList.add("total-active-box");
    productTotalBox.appendChild(productTotalOriginBox);
    productTotalBox.appendChild(productTotalActiveBox);
    const productTotalOrigin = document.createElement("p");
    productTotalOrigin.classList.add("total-origin");
    productTotalOrigin.dataset.id = product.id;
    const currencyTotalOrigin = document.createElement("p");
    currencyTotalOrigin.classList.add("currency");
    currencyTotalOrigin.innerHTML = product.currency;
    const productTotalActive = document.createElement("p");
    productTotalActive.classList.add("total-active");
    productTotalActive.dataset.id = product.id;
    const currencyTotalActive = document.createElement("p");
    currencyTotalActive.classList.add("currency");
    currencyTotalActive.innerHTML = product.currency;
    productTotalOrigin.innerHTML = product.priceOrigin;
    productTotalActive.innerHTML = product.priceActive;
    //currency.innerHTML = product.currency;
    productTotalOriginBox.appendChild(productTotalOrigin);
    productTotalOriginBox.appendChild(currencyTotalOrigin);
    productTotalActiveBox.appendChild(productTotalActive);
    productTotalActiveBox.appendChild(currencyTotalActive);

    const productButtonBox = document.createElement("div");
    productButtonBox.classList.add("button-box");
    const productDelete = document.createElement("button");
    productDelete.classList.add("button-delete");
    productDelete.dataset.id = product.id;
    productButtonBox.appendChild(productDelete);
    productDelete.innerHTML = "&times;";

    productDelete.addEventListener("click", () => {
      let index = myCart.products.findIndex(
        (product) => product.id == productDelete.dataset.id
      );
      myCart.removeProduct(index);
      localStorage.setItem("foodCart", JSON.stringify(myCart));
      cartContainerFill();
    });

    productItem.appendChild(productImageBox);
    productItem.appendChild(productNameBox);
    productItem.appendChild(productPriceBox);
    productItem.appendChild(counterBox);
    productItem.appendChild(productTotalBox);
    productItem.appendChild(productButtonBox);

    //стили для priceOrigin
    if (product.priceOrigin == product.priceActive) {
      productPriceOrigin.style.display = "none";
      currencyPriceOrigin.style.display = "none";
      productTotalOrigin.style.display = "none";
      currencyTotalOrigin.style.display = "none";
    }

    return productItem;
  });

  productsHTML.forEach((productHTML) => {
    cartProductList.appendChild(productHTML);
  });

  cartNum.textContent = myCart.count;
  headingCounter.textContent = myCart.count;
}

cartContainerFill();
