import { Api   }   from "../controller/api.js";
import { Modal } from "./modalAdmin.js";

const token = localStorage.getItem('token');
export class Vitrine {
    
    static vitrine = document.querySelector('.content');
    static prod  = {};
    static vitrineMaker ({nome, imagem, categoria, descricao,id}){

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
        btnEdit.setAttribute('id',id);
        btnDlt.classList.add('delete-product');
        btnDlt.setAttribute('id',id);
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

    static modalRgt(event){
        const btn = event.target;
        if(btn.className === 'adc-product'){
            Modal.formRegister();
            const btnForm = document.querySelector('.btnRegister'); 
            btnForm.addEventListener('click',Vitrine.rgtProduct);
        }
        Api.createProduct(this.prod,token);
        
    }

    static modalEdt(event){
        const btn = event.target;
        if(btn.className === "edit-product"){
            Modal.formEdit();
            const btnForm = document.querySelector('.btnSave'); 
            btnForm.addEventListener('click',Vitrine.edtProduct);
        }
        Api.editProduct(btn.id,prod,token);
        

    }

    static modalDlt(event){
        const btn = event.target;
        if(btn.className === 'delete-product'){
            Modal.formDelete();
        }
        if(btn.className === 'btnDelete'){
           event.preventDefault();
           deleteProduct(btn.id,token);
        }
    }

    static rgtProduct(event){
        event.preventDefault();
        let arr = [];
        const form  = document.getElementsByClassName('productRegister');
        for(let i=0; i<form[0].length;i++){
            if(form[0][i].tagName!=='BUTTON'){
                if(form[0][i].type === "checkbox"){
                    const {checked} = form[0][i];
                    if(checked){
                        // console.log(form[0][i].name);
                        arr['categoria'] = form[0][i].name;
                    }
                }
                    else{
                        const {value} = form[0][i];
                        // console.log(value);
                        arr[form[0][i].name] = value;
                        
                    }
            }
        }
        prod = [...arr];
        console.log(arr);
    }

    static edtProduct(e){
        e.preventDefault();
        let arr = [];
        const form  = document.getElementsByClassName('productRegister');
        for(let i=0; i<form[0].length;i++){
            if(form[0][i].tagName!=='BUTTON'){
                if(form[0][i].type === "checkbox"){
                    const {checked} = form[0][i];
                    if(checked){
                        // console.log(form[0][i].name);
                        arr['categoria'] = form[0][i].name;
                    }
                }
                    else{
                        const {value} = form[0][i];
                        // console.log(value);
                        arr[form[0][i].name] = value;
                        
                    }
            }
        }
        prod = [...arr];
        console.log(arr);
    }


   
}
Vitrine.products();