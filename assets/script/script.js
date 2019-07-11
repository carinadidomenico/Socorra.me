// MENU

let menuHamburguer = document.querySelector (".nav__menu-hamburguer");
let menu = document.querySelector (".nav__menu");

menuHamburguer.addEventListener ('click', function () {
    if (menu.style.height){
        menu.style.height = null;        
    } else {
        menu.style.height = menu.scrollHeight + "px";
    }
    
})


// FORM

let search = document.querySelector (".search");
let lista = card.caso

search.addEventListener('submit', function(e) {
    e.preventDefault();
    lista.forEach(element => {
        console.log ("oi")
    });

}) 
