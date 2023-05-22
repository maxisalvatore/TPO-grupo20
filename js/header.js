// Dropdown Menu del header
const toggleHeader = document.querySelector("#toggle-header")
const toggleIcon = document.querySelector("header i")
const dropDownMenu = document.querySelector(".nav-menu")
toggleHeader.onclick = function() {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")

    toggleIcon.classList = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars"
}
