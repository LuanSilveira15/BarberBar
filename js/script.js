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

buscar.addEventListener = () => {
  efetuar.classList.remove("active");
};

// Pagina de Login

const admin = document.querySelector("#campo-login");
const login = document.querySelector(".container-login");

admin.addEventListener("click", function () {
  login.classList.toggle("active");
});

admin.addEventListener = () => {
  login.classList.remove("active");
};

var swiper = new Swiper(".container-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".container-clientes", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
