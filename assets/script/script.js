let menuHamburguer = document.querySelector (".nav__menu-hamburguer");
let menu = document.querySelector (".nav__menu");

menuHamburguer.addEventListener ('click', function () {
    console.log ('FUNCIONA OPORA');
    menu.style.display = "flex";
})