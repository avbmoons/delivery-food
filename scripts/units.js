let cart = {
  adsds: {
    name: "blabla",
    count: 3,
  },
  cvgdh: {
    name: "fhgfhg",
    count: 2,
  },
};

//  увеличение количества товара
//  уменьшение количества товара
//  удаление товара

document.onclick = (event) => {
  //console.log(event.target.classList);
  if (event.target.classList.contains("plus")) {
    //console.log(event.target.dataset.id);
    plusFunction(event.target.dataset.id);
  } else if (event.target.classList.contains("minus")) {
    //console.log(event.target.dataset.id);
    minusFunction(event.target.dataset.id);
  }
};

const plusFunction = (id) => {
  cart[id]["count"]++;
  renderCart();
};

const minusFunction = (id) => {
  if (cart[id]["count"] - 1 == 0) {
    deleteFunction(id);
    return true;
  }
  cart[id]["count"]--;
  renderCart();
};

const deleteFunction = (id) => {
  delete cart[id];
  renderCart();
};

const renderCart = () => {
  console.log(cart);
};

renderCart();
