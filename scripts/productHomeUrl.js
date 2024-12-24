function productUrl(address) {
  let arrProducts = document.querySelectorAll('.item-box__heading');

  arrProducts.forEach((arrProducts) => {
    let el = arrProducts.id;
    let numEl = parseInt(el.match(/\d+/));

    arrProducts.href = address + numEl;
  });
}

productUrl('pages/product.html?id=');
