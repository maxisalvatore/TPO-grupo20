const toggleHeader = document.querySelector("#toggle-header")
const dropDownMenu = document.querySelector(".nav-menu")
toggleHeader.onclick = function() {
    dropDownMenu.classList.toggle("open")
}