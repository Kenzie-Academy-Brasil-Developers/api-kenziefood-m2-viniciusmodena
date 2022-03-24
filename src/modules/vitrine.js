class Vitrine {
  
  static createCards(products, location) {

    location.innerHTML = ''

    products.forEach( ({categoria, descricao, id, imagem, nome, preco}) => {

      preco = preco.toFixed(2)
      const cardProduto = document.createElement("div");

      cardProduto.innerHTML = `
        <div class="vitrine-card">
        <img class="vitrine-img" src="${imagem}">
        <h3>${nome}</h3>
        <p>${descricao}</p>
        <span>${categoria}</span>
        <div class="vitrine-buy">
        <h5>R$${preco.replace('.',',')}</h5>
        <button id="${id}"><i id="${id}" class="fa-solid fa-cart-arrow-down"></i></button>
        </div>
        `;

      location.appendChild(cardProduto);
    });
  }

  static filter(products, category) {
    const filtrados =  products.filter( ({ categoria }) => {

      return categoria.toLowerCase() == category.toLowerCase()
    })
    
    return filtrados
  }

  static search(products, text) {
    const found = products.filter( ({nome}) => {
      return nome.toLowerCase().includes(text.toLowerCase())
    })
    return found
  }
}

export { Vitrine }