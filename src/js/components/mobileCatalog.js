// catalog-menu

const btnMenu = document.querySelector('.btn-menu')
const catalogMenu = document.querySelector('.catalog-menu')

btnMenu.addEventListener('click', ev => {
  catalogMenu.classList.toggle('catalog-menu-active')
})

catalogMenu.addEventListener('click', ev => {
  const target = [...ev.target.classList]
  target.find(el => {
    if(el === 'catalog-menu-link') {
      catalogMenu.classList.toggle('catalog-menu-active')
    }
  })
})
