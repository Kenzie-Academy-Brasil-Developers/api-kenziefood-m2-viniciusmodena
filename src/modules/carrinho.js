class Carrinho {

    static createCardsCarrinho(products, location) {

        location.innerHTML = ''


        products.forEach(({ quantity, products: { categoria, id, imagem, nome, preco } }) => {

            preco = preco.toFixed(2)

            const cardProduto = document.createElement("div")
            cardProduto.classList.add('cart-full--card')

            cardProduto.innerHTML = `
                <div class="cart-full--divimg">
                    <img src="${imagem}" class="cart-full-img">
                </div>

                <div class="cart-full--divinfo">
                    <h3>${nome}</h3>
                    <span>${categoria}</span>
                    <h5>R$${preco.replace('.', ',')}</h5>
                </div>

                <div class="cart-full--divtrash">
                    <button id="${id}" class="cart-full--trash"><i id="${id}" class="fa-solid fa-trash-can"></i></button>
                    <p>Qtd:${quantity}</p> 
                </div>
            `

            location.appendChild(cardProduto)
        });
    }

    static localStorageCart(arrayToStore, product) {

        const checkProduct = arrayToStore.filter(item => {
            return item.products.id == product.id
        })

        if (checkProduct.length > 0) {

            arrayToStore = arrayToStore.map(item => {
                if (item.products.id == product.id) {

                    return {quantity: item.quantity + 1, products: item.products}
                } else {
                    return item
                }
            })

        } else {

            const newItem = {quantity: 1, products: product}
            arrayToStore.push(newItem)
        }

        return arrayToStore
    }

    static calculatePrice(cartProducts) {
        const totalPrice = cartProducts.reduce( (total ,{quantity, products:{preco}}) => {
            return total + quantity * preco
        }, 0)

        const totalItems = cartProducts.reduce( (total ,{quantity}) => {
            return total + quantity 
        }, 0)

        return {totalPrice: totalPrice, totalItems: totalItems}
    } 
}

export { Carrinho }