const botaoMenu = document.querySelector('.menu-buton')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () =>{
    menu.classList.toggle('menu-lateral-ativo')
})