export class Vitrine {
    static vitrine = document.querySelector('.content');
    static createCard(obj,ul){
        //object={id,nome,preco,categoria,descricao,imagem,}
        const li =document.createElement("li")
        li.classList.add("card-dashboard")
        li.id = obj.id
        li.innerHTML= `
                        <div class="card-product">
                            <img src="${obj.imagem}" alt="${obj.nome}">
                            <p class="card-name">${obj.nome}</p>
                        </div>
                        <div class="card-categories">
                            <span>${obj.categoria}</span>
                        </div>
                        <div class="card-description">
                            <p>${obj.descricao}</p>
                        </div>
                        <div class="card-actions">
                            <button class="action-button edit-product"><img src="./../img/edit-icon.png" alt="Edit Icon"></button>
                            <button class="action-button delete-product"><img src="./../img/delete-icon.png" alt="Trash Icon"></button>
                        </div>
        `
        ul.appendChild(li)
    }
    static createVitrini(list,ul){
        list.forEach((object)=>{
            this.createCard(object,ul)
        })
    }
}