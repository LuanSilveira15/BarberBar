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

// Pagina do Card
const openCard = document.querySelector("#card-compra");
const openProdutos = document.querySelector(".card-produtos");

openCard.addEventListener("click", function () {
  openProdutos.classList.toggle("active");
});

openCard.addEventListener = () => {
  openProdutos.classList.remove("active");
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

//Animação //
if (window.SimpleAnime) {
  new SimpleAnime()
}



// etapa de produtos feito com javascript importando informações de um arquivo json ! //
// exibir produtos com json//

let cart = [];
let modalQt = 1
let modalkey = 0



// Produtos//
produtosJson.map((item, index) => {
  let containerProduto = document.querySelector(".modelo-produto .produtos").cloneNode(true);
  containerProduto.setAttribute("data-key", index);
  containerProduto.querySelector(".imagem-produtos img").src = item.img;
  containerProduto.querySelector(".titulo-modelo").innerHTML = item.name;
  containerProduto.querySelector(".descricao-modelo").innerHTML = `R$ ${item.price.toFixed(2)}`;
  containerProduto.querySelector(".bx").addEventListener("click", (e) => {
    e.preventDefault();
    let key = e.target.closest(".produtos").getAttribute("data-key");
    modalkey = key
    let identifier = produtosJson[modalkey].id+'@';
    let product = cart.findIndex((item)=>item.identifier == identifier);
    if(product > -1) {
     //cart[key].qt += modalQt
    } else {
      cart.push({
        identifier,
        id:produtosJson[modalkey].id,
        qt:modalQt
      })
    }
    atualizarCard()
    
  });
  document.querySelector(".container-produtos").append(containerProduto);
});



// Atualização do carrinho//

function atualizarCard() {
  document.querySelector('.itens-carrinhos-compra span').innerHTML = cart.length

  if(cart.length < 1) {
    openProdutos.classList.remove("active");
  }
 
  document.querySelector('.carrinho-de-compra').innerHTML = '';

  let total = 0;

  for(let i in cart) {
    let produtosAdicionado = produtosJson.find((item)=>item.id == cart[i].id)
    total += produtosAdicionado.price * cart[i].qt;
    console.log(produtosAdicionado)
    let ItemDoCart = document.querySelector('.modelo-produto .container-cards-produtos').cloneNode(true);
     
    ItemDoCart.querySelector('img').src = produtosAdicionado.img;
    ItemDoCart.querySelector('.card-produto-nome').innerHTML = produtosAdicionado.name;
    ItemDoCart.querySelector('.card-item-quantidade').innerHTML = cart[i].qt;
    ItemDoCart.querySelector('.quantidade-menos').addEventListener('click', ()=>{
      if(cart[i].qt > 1) {
        cart[i].qt--;
      } else {
        cart.splice(i, 1)
      }
      atualizarCard()
    })

    ItemDoCart.querySelector('.quantidade-mais').addEventListener('click', ()=>{
      cart[i].qt++
      atualizarCard()
    })

     document.querySelector('.carrinho-de-compra').append(ItemDoCart);
  }

  document.querySelector('.total span:last-child').innerHTML = `R$: ${total.toFixed(2)}`;
}

















