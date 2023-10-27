const callMe = document.querySelector('.header_consultation-call-me')
const modalWrapp = document.querySelector('.modal-call')
const modalForm = document.querySelector('.modal-call_form')
const close = document.querySelector('.modal-call .close')
const btnFast = document.querySelector('.single-product_button-fast')


callMe.addEventListener('click', ev => {
  modalWrapp.classList.toggle('wrapp-active')
  modalForm.classList.toggle('form-active')
})

if(btnFast) {
  btnFast.addEventListener('click', ev => {
    modalForm.classList.toggle('form-active')
    modalWrapp.classList.toggle('wrapp-active')
  })
}

modalWrapp.addEventListener('click', ev => {
  const wrapp = ev.target.classList.contains('modal-call')
  const close = ev.target.classList.contains('close')
  if(wrapp || close) {
    modalForm.classList.toggle('form-active')
    modalWrapp.classList.toggle('wrapp-active')
  }

})


function other() {
  let x = 10
  function inner(x) {
    return x
  }
  return inner
}

const foo = other()
console.log(foo(5))
