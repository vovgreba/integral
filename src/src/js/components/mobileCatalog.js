// catalog-menu

const btnMenu = document.querySelector('.btn-menu')
const btnSearch = document.querySelector('.btn-search')
const catalogMenu = document.querySelector('.catalog-menu')
const searchMenu = document.querySelector('.search-menu')


btnMenu.addEventListener('click', () => {
  if (searchMenu.classList.contains('search-menu-active')) {
    searchMenu.classList.remove('search-menu-active');
    searchMenu.style.display = 'none';
  }
  catalogMenu.classList.toggle('catalog-menu-active');
});

btnSearch.addEventListener('click', () => {

  if (searchMenu.classList.contains('search-menu-active')) {
    searchMenu.classList.remove('search-menu-active');
    searchMenu.style.display = 'none';
  } else {
    searchMenu.style.display = 'block';
    setTimeout(() => {
      searchMenu.classList.add('search-menu-active');
    }, 10);
  }
  catalogMenu.classList.remove('catalog-menu-active');
});

catalogMenu.addEventListener('click', ev => {
  const target = [...ev.target.classList]
  target.find(el => {
    if(el === 'catalog-menu-link') {
      catalogMenu.classList.toggle('catalog-menu-active')
    }
  })
})
searchMenu.addEventListener('click', ev => {
  const target = [...ev.target.classList]
  const value = ev.target.innerText
  target.find(el => {
    if(el === 'catalog-menu-link') {
      searchMenu.classList.toggle('search-menu-active')
      btnSearch.innerText = value
      searchMenu.style.display = 'none';
    }
  })
})
