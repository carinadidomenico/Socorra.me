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


// CARDS

const listaCasos = card


listaCasos.caso.sort((caso1, caso2) => {


    if(caso1.condicao.toLowerCase() < caso2.condicao.toLowerCase()){
        return -1
    }
    if(caso1.condicao.toLowerCase() > caso2.condicao.toLowerCase()){
        return 1
    } else {
        return 0
    } 
    
})


const insertCard = (card) => {
    
    let cards = ''
    card.forEach(caso => {
        
        cards += `
        <div class="card__container">
        <div class= "card__content">
        <h2>${caso.condicao}</h2>
        <h3>Gravidade: ${caso.grau}</h3>
        <h3>O que fazer: </h3>
        <p>${caso.comoProceder}</p>
        <h3>Cuidado!</h3>
        <p>${caso.naoFazer}</p>
        </div>
        </div>
        `
    });
    return cards
}

document.querySelector(".card").innerHTML = insertCard(listaCasos.caso)


// BUSCAR

const search = document.querySelector (".search");
const searchText = document.querySelector (".search__text");
const searchButton = document.querySelector (".search__button")


searchText.addEventListener('keyup', function(e) {

    let filtro = listaCasos.caso.filter ((item) => {
        let searchInput = searchText.value.toLowerCase()
        return item.condicao.toLowerCase().includes(searchInput)
    })

    document.querySelector(".card").innerHTML = insertCard(filtro)    
})


searchButton.addEventListener('click', function(e){
    e.preventDefault()

    document.querySelector(".card").innerHTML = insertCard(listaCasos.caso)
})



