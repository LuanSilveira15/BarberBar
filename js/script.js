//  Menu Mobile

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
};

//  Campos de Busca

const buscar = document.querySelector("#icon-busca");
const efetuar = document.querySelector(".campo-busca");

buscar.addEventListener("click", function () {
  efetuar.classList.toggle("active");
});

window.onscroll = () => {
  efetuar.classList.remove("active");
};

// Pagina de Login

const admin = document.querySelector("#campo-login");
const login = document.querySelector(".container-login");

admin.addEventListener("click", function () {
  login.classList.toggle("active");
});

window.onscroll = () => {
  login.classList.remove("active");
};
