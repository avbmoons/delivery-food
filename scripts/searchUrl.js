function searchAction() {
  let inputSearch = document.getElementById('inputSearch');

  inputSearch.addEventListener('input', () => {
    inputSearch.value;
  });

  let searchText = inputSearch.value;
  console.log(searchText);

  let pageResult;

  if (locPage == 'index.html') {
    pageResult = 'pages/catalog.html?search=' + searchText;
  } else {
    pageResult = '../pages/catalog.html?search=' + searchText;
  }

  if (searchText == 0) {
    console.log('поиск не определен');
  } else {
    //let pageResult = '../pages/catalog.html?search=' + searchText;
    window.open(pageResult, '_blank');
    //window.location = '../pages/catalog.html?search=' + searchText;
    inputSearch.value = '';
  }
}

function searchReset() {
  let inputSearch = document.getElementById('inputSearch');
  inputSearch.value = '';
}
