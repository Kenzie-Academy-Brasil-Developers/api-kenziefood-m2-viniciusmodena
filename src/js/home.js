import { Api } from "../controller/api.js";
import { Vitrine } from "../modules/vitrine.js";
import { Carrinho } from "../modules/carrinho.js";

const user = {
  name: "Modena",
  email: "modena@gmail.com",
  password: "equipe1",
};
const token = await Api.userLogin(user);

const allProducts = await Api.getMyProducts(token);
console.log(allProducts);

const vitrine = document.querySelector(".vitrine");

Vitrine.createCards(allProducts, vitrine);

vitrine.addEventListener("click", async (evt) => {
  if (evt.target.tagName === "BUTTON" || evt.target.tagName === "I") {
    const productId = {
      product_id: Number(evt.target.id),
    };

    await Api.addProductToCart(productId, token);

    const location = document.querySelector(".cart-full--cards");
    const products = await Api.getCart(token);

    Carrinho.createCardsCarrinho(products, location);
  }
});


const cart = document.querySelector(".cart-full--cards");

cart.addEventListener("click", async (evt) => {
  if (evt.target.tagName === "BUTTON" || evt.target.tagName === "I") {
    let cardProductId = evt.target.id;
    await Api.deleteProductFromCart(cardProductId, token);

    const card = evt.target.parentElement.parentElement.parentElement;
    //const card = evt.target.parentNode.closest(".card-full--card")
    card.remove();
  }
});
