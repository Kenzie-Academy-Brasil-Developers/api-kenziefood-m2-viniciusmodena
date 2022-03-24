import { Api   }   from "../controller/api.js";
import { Modal } from "./modalAdmin.js";

export class Vitrine {
    
    static vitrine = document.querySelector('.content');
    static vitrineMaker ({nome, imagem, categoria, descricao}){

        const li        = document.createElement('li');
        const divCard   = document.createElement('div');
        const imgProd   = document.createElement('IMG');
        const textProd  = document.createElement('p');
        const divCat    = document.createElement('div');
        const spanCat   = document.createElement('span');
        const divDesc   = document.createElement('div');
        const pDesc     = document.createElement('p');
        const divBtn    = document.createElement('div');
        const btnEdit   = document.createElement('button');
        const imgBtnE   = document.createElement('img');
        const btnDlt    = document.createElement('button');
        const imgBtnD   = document.createElement('img');

        li.classList.add('card-dashboard');
        divCard.classList.add('card-product');
        imgProd.setAttribute('alt',nome);
        imgProd.setAttribute('src',imagem);
        textProd.classList.add('card-name');
        divCat.classList.add('card-categories');
        divDesc.classList.add('card-description');
        divBtn.classList.add('card-buttons');
        btnEdit.classList.add("edit-product");
        btnDlt.classList.add('delete-product');
        imgBtnE.setAttribute('alt','');
        imgBtnE.setAttribute('src','img');
        imgBtnD.setAttribute('alt','');
        imgBtnD.setAttribute('src','img');

        btnEdit.innerText = 'Edit';
        btnDlt.innerText = 'Delet';
        textProd.innerText = nome;
        spanCat.innerText = categoria;
        pDesc.innerText = descricao;
        
        divCard.appendChild(imgProd);
        divCard.appendChild(textProd);
        divCat.appendChild(spanCat);
        divDesc.appendChild(pDesc);
        btnEdit.appendChild(imgBtnE);
        btnDlt.appendChild(imgBtnD);
        divBtn.appendChild(btnEdit);
        divBtn.appendChild(btnDlt);
        li.appendChild(divCard);
        li.appendChild(divCat);
        li.appendChild(divDesc);
        li.appendChild(divBtn);

        Vitrine.vitrine.appendChild(li)
    }


    static async products(){
        const myProducts = await Api.getProducts();
        myProducts.forEach(e => {
            Vitrine.vitrineMaker(e);
        });
    }

    static async rgtProduct(event){
        const btn = event.target;
        if(btn.className === 'adc-product'){
            Modal.formRegister();

        }
        // const newProduct = await Api.createProduct();
    }

    static async edtProduct(event){
        const btn = event.target;
        if(btn.className === "edit-product"){
            Modal.formEdit();
        }
    }

    static async dltProduct(event){
        const btn = event.target;
        if(btn.className === 'delete-product'){
            Modal.formDelete();
        }
    }


   
}
Vitrine.products();