const searchInput = document.getElementsByClassName('search-box')[0];
const searchInputField = document.getElementById('inputSearch');

function showSearch() {
  searchInput.style.display = 'flex';
}
function closeSearch() {
  searchInput.style.display = 'none';
  searchInputField.value = '';
}
