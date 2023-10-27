const addcart = document.querySelectorAll('.assortment_total-btn')

addcart.forEach(el =>{
  el.addEventListener('click', ev => {
    el.style.display = 'none'
    el.nextElementSibling.style.display = 'flex'
  })
})


let greu = 55
