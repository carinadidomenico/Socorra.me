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

const listaCasos = JSON.stringify(card)
const listaCasosJs = JSON.parse(listaCasos)
let search = document.querySelector (".search");
let searchText = document.querySelector (".search__text");

const insertCard = (card) => {

    let cards = ''
    card.forEach(caso => {
        
        cards += `
        <div>
        <h2>${caso.condicao}</h2>
          <p>${caso.grau}</p>
          <p>${caso.comoProceder}</p>
          <p>${caso.naoFazer}</p>
          </div>
          `
        });

        return cards
    }

    document.querySelector(".card").innerHTML = insertCard(listaCasosJs.caso)


search.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log (searchText.value)


    
}) 




        // const orderList = (caso1, caso2, propriedade) => {
        //     if(caso1[propriedade].toLowerCase() < caso2[propriedade].toLowerCase()){
        //       return -1
        //     }
        //     if(caso1[propriedade].toLowerCase() > caso2[propriedade].toLowerCase()){
        //       return 1
        //     }
        //     return 0
        //   }
          
        //   const ordenarCard = document.getElementById("ordenar-livro")
          
        //   ordenarCard.addEventListener("click", (e) => {
        //     const listaOrdenada = listaCasos.caso.sort((caso1, caso2) => orderList(caso1, caso2, "livro"))
        //     document.querySelector (".card").innerHTML = insertCard(listaOrdenada)
        //   })
          