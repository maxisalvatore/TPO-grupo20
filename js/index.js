// Dropdown Menu
const toggleHeader = document.querySelector("#toggle-header")
const dropDownMenu = document.querySelector(".nav-menu")
toggleHeader.onclick = function() {
    dropDownMenu.classList.toggle("open")
}


//Carousel
const carousel    = document.querySelector('.carousel')
const punto     = document.querySelectorAll('.punto')

punto.forEach( ( listaPuntos , i )=> {
    punto[i].addEventListener('click',()=>{
        let posicion  = i
        let movimiento = posicion * -(100/3)

        carousel.style.transform = `translateX(${ movimiento }%)`

        punto.forEach( ( listaPuntos , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})
