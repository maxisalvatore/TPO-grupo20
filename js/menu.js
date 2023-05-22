// Dropdown Menu de los productos
const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const sBtn_text = optionMenu.querySelector(".sBtn-text");

const menuSecciones = document.querySelector(".section-menu");
const menu1 = menuSecciones.querySelector("#menu1");
const menu2 = menuSecciones.querySelector("#menu2");
const menu3 = menuSecciones.querySelector("#menu3");

const menu = {
  "Pizzas Especiales" : menu1,
  "Pizzas Clásicas": menu2,
  "Nuestras Pizzas": menu3,
};

menu2.classList.add("active");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");

    Object.values(menu).forEach(menu => {
      menu.classList.remove("active");
    });

    if (selectedOption in menu) {
      menu[selectedOption].classList.add("active");
    } else {
      menu.default.classList.add("active");
    }
  });
});