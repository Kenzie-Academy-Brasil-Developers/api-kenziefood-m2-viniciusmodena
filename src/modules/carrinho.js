 class Carrinho{
    
    static createCardsCarrinho(products, location){
        
        location.innerHTML = ''
        
        
        products.forEach( ({quantity, products:{categoria, id, imagem, nome, preco}}  ) => {

            preco = preco.toFixed(2)
            // {preco.replace('.',',')}
            
            
            const cardProduto = document.createElement("div")

            cardProduto.innerHTML = `
            <div class="cart-full--card">
                <div class="cart-full--divimg">
                    <img src="${imagem}" class="cart-full-img">
                </div>

                <div class="cart-full--divinfo">
                    <h3>${nome}</h3>
                    <span>${categoria}</span>
                    <h5>R$${preco.replace('.',',')}</h5>
                </div>

                <div class="cart-full--divtrash">
                    <button id="${id}" class="cart-full--trash"><i id="${id}" class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            `
        
            location.appendChild(cardProduto)
        });
    }

    static removeCardsCarrinho(){
        
    }
}

export { Carrinho }