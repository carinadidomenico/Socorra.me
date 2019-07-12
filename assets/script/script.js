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

const listaCasos = card
const search = document.querySelector (".search");
const searchText = document.querySelector (".search__text");

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


searchText.addEventListener('keyup', function(e) {
    e.preventDefault();
    let filtro = listaCasos.caso.filter ((item) => {
        let searchInput = searchText.value.toLowerCase()
        return item.condicao.toLowerCase().includes(searchInput)
    })

    document.querySelector(".card").innerHTML = insertCard(filtro)    
}) 


const orderList = (caso1, caso2, propriedade) => {

    if(caso1[propriedade].toLowerCase() < caso2[propriedade].toLowerCase()){
        return -1
    }
    if(caso1[propriedade].toLowerCase() > caso2[propriedade].toLowerCase()){
        return 1
    }
        return 0
}

          