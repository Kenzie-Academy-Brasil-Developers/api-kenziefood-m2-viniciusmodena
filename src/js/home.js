import { Api } from "../controller/api.js";
import { Vitrine } from "../modules/vitrine.js";
import { Carrinho } from "../modules/carrinho.js";



const user = {
  name: 'Modena',
  email: 'modena@gmail.com',
  password: 'equipe1'
}

const novotoken = await Api.userLogin(user)

const stringnovotoken = JSON.stringify(novotoken)

localStorage.setItem('token', stringnovotoken)

// localStorage.removeItem('token')


const vitrine = document.querySelector(".vitrine");
const cart = document.querySelector(".cart")
const emptyCart = document.querySelector(".cart-full")
const cartItems = document.querySelector(".cart-full--cards");

const filterButtons = document.querySelector(".filters")
const searchInput = document.querySelector(".header-input")
const publicProducts = await Api.getProducts()


// const myproductstest = await Api.getMyProducts(novotoken)
//  myproductstest.forEach( async ({id}) => {
//   await Api.deleteProduct(id, novotoken)
// })

class Load {

  static async page() {

    const token = JSON.parse(localStorage.getItem('token'))

    if (token) {
      const allProducts = await Api.getMyProducts(token);
      Vitrine.createCards(allProducts, vitrine);

      const cartProducts = await Api.getCart(token)
      Carrinho.createCardsCarrinho(cartProducts, cartItems)
      this.updateTotal(cartProducts)


    } else {
      const allProducts = await Api.getProducts();
      Vitrine.createCards(allProducts, vitrine);

      const cartProducts = JSON.parse(localStorage.getItem('cart'))
      Carrinho.createCardsCarrinho(cartProducts, cartItems)
      this.updateTotal(cartProducts)
    }
  }

  static cart() {

    if (cartItems.childElementCount > 0) {
      cart.classList.add('hidden')
      emptyCart.classList.remove('hidden')
    } else {
      cart.classList.remove('hidden')
      emptyCart.classList.add('hidden')
    }
  }

  static updateTotal(cartList) {
    const totalObj = Carrinho.calculatePrice(cartList)
    const priceLocation = document.getElementById('total-cart')
    const amountLocation = document.getElementById('total-items')

    let {totalItems, totalPrice} = totalObj
    
    totalPrice = totalPrice.toFixed(2)

    amountLocation.innerText = totalItems
    priceLocation.innerText = `R$${totalPrice.replace('.', ',')}`
  }

  static async storageToApiCart() {

    const token = JSON.parse(localStorage.getItem('token'))
    
    let localCart = JSON.parse(localStorage.getItem('cart'))
    const myProducts = await Api.getMyProducts(token)

    if (localCart) {
      localCart.forEach(async item => {

        let productId

        const repeatedProduct = myProducts.find(({ nome }) => nome == item.products.nome)
        if (repeatedProduct) {
          const { id } = repeatedProduct
          productId = id
        } else {
          const myProduct = await Api.addMyProduct(item.products, token)
          const { id } = myProduct
          productId = id
        }

        const myProductInfo = {
          product_id: productId,
          quantity: item.quantity
        }


        await Api.addProductToCart(myProductInfo, token)

      })
    }
  }
}
// Load.cart()

// window.localStorage.removeItem('cart');

const token = JSON.parse(localStorage.getItem('token'))

if (token) {
  Load.storageToApiCart()
  const test = await Api.getCart(token)
  console.log(test)
}


Load.page()
setTimeout(Load.cart, 350)


vitrine.addEventListener("click", async (evt) => {
  if (evt.target.tagName === "BUTTON" || evt.target.tagName === "I") {

    const token = JSON.parse(localStorage.getItem('token'))

    if (!token) {

      let localCart = JSON.parse(localStorage.getItem('cart'))
      const productId = evt.target.id

      if (localCart) {
        const selectedProduct = publicProducts.find(({ id }) => id == productId)
        const localCartUpdated = Carrinho.localStorageCart(localCart, selectedProduct)

        const stringLocalCart = JSON.stringify(localCartUpdated)
        localStorage.setItem('cart', stringLocalCart)

      } else {
        const selectedProduct = publicProducts.find(({ id }) => id == productId)
        localCart = [{ quantity: 1, products: selectedProduct }]

        const stringLocalCart = JSON.stringify(localCart)
        localStorage.setItem('cart', stringLocalCart)
      }

      localCart = JSON.parse(localStorage.getItem('cart'))
      Carrinho.createCardsCarrinho(localCart, cartItems);
      Load.updateTotal(localCart)

      setTimeout(Load.cart, 200)

    } else {

      // Add product no cart da api
      const productId = {
        product_id: Number(evt.target.id),
      };

      await Api.addProductToCart(productId, token);

      const products = await Api.getCart(token);
      
      Load.updateTotal(products)

      Carrinho.createCardsCarrinho(products, cartItems);

      setTimeout(Load.cart, 200)
    }

  }
});



cartItems.addEventListener("click", async (evt) => {
  if (evt.target.tagName === "BUTTON" || evt.target.tagName === "I") {

    console.log('hi')

    const token = JSON.parse(localStorage.getItem('token'))
    const cardProductId = evt.target.id;

    if (token) {

      await Api.deleteProductFromCart(cardProductId, token);
      const cartApi = await Api.getCart(token) 

      Load.updateTotal(cartApi)


    } else {

      const localCart = JSON.parse(localStorage.getItem('cart'))

      console.log(localCart)

      const localCartUpdated = localCart.filter(({ products: { id } }) => {
        console.log(id)
        console.log(cardProductId)
        return id != cardProductId
      })

      console.log(localCartUpdated)


      const stringLocalCart = JSON.stringify(localCartUpdated)
      localStorage.setItem('cart', stringLocalCart)

      Load.updateTotal(localCartUpdated)

    }

    const card = evt.target.closest('.cart-full--card')
    card.remove();

    Load.cart()
  }
})


filterButtons.addEventListener("click", async (evt) => {

  const token = JSON.parse(localStorage.getItem('token'))

  let arrayProdutos

  if(token) {
    arrayProdutos = await Api.getMyProducts(token)
  } else {
    arrayProdutos = await Api.getProducts()
  }


  if (evt.target.id == "todos" || evt.target.parentElement.id == "todos"){
    Vitrine.createCards(arrayProdutos, vitrine)
  }

  if (evt.target.id == "panificadora" || evt.target.parentElement.id == "panificadora"){
    const arrayfiltradateste = Vitrine.filter(arrayProdutos, "panificadora")

    Vitrine.createCards(arrayfiltradateste, vitrine)
  }

  if (evt.target.id == "frutas" || evt.target.parentElement.id == "frutas"){
    const arrayfiltradateste = Vitrine.filter(arrayProdutos, "frutas")

    Vitrine.createCards(arrayfiltradateste, vitrine)
  }

  if (evt.target.id == "bebidas" || evt.target.parentElement.id == "bebidas"){
    const arrayfiltradateste = Vitrine.filter(arrayProdutos, "bebidas")

    Vitrine.createCards(arrayfiltradateste, vitrine)
  }

})

searchInput.addEventListener("input", async () => {

  const token = JSON.parse(localStorage.getItem('token'))

  let arrayProdutos

  if(token) {
    arrayProdutos = await Api.getMyProducts(token)
  } else {
    arrayProdutos = await Api.getProducts()
  }

  const found = Vitrine.search(arrayProdutos, searchInput.value)

  Vitrine.createCards(found, vitrine)
  
})
