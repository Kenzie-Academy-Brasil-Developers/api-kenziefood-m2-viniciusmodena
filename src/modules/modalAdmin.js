export class Modal {

    // static let valueStatus = true; 

    static createModal (){
        const divModal = document.createElement('div');
        divModal.classList.add('modals');
    }

    static formBasic(){
        const labelName    = document.createElement('label');
        const inputName    = document.createElement('input');
        const labelDescrip = document.createElement('label');
        const inputDescrip = document.createElement('input');
        for(let i =0; i<arrCateg.length;i++){
            let labelCateg = document.createElement('label');
            let inputCateg = document.createElement('input');
            inputCateg.classList.add('btnForm');
            labelCateg.classList.add('categoryProd');
            labelCateg.innerText(arrCateg[i]);
        }
        const labelValue   = document.createElement('label');
        const inputValue   = document.createElement('input');
        const labelImage   = document.createElement('label');
        const inputImage   = document.createElement('input');

        inputName.classList.add('productName');
        inputDescrip.classList.add('descriptionProd');
        inputValue.classList.add('productValue');
        inputImage.classList.add('imageLink');
    }

    static formRegister(){
        const form = document.createElement('form');
        form.classList.add('productRegister');
        const h5 = document.createElement('h5');
        h5.classList.add('nameModal');
        const btnClose = document.createElement('button');
        btnClose.classList.add('closeModal');

        Modal.formBasic();

        const btnRegis     = document.createElement('button');
        btnRegis.classList.add('btnRegister');

    }
    static formEdit(){
        const form = document.createElement('form');
        form.classList.add('productEdit');
        const h5 = document.createElement('h5');
        h5.classList.add('nameModal');
        const btnClose = document.createElement('button');
        btnClose.classList.add('closeModal');

        Modal.formBasic();

        const btnDelete = document.createElement('button'); 
        const btnSave   = document.createElement('button');
        btnDelete.classList.add('btnDelete');
        btnSave.classList.add('btnSave');
    }

    static formDelete(){
        const form = document.createElement('form');
        form.classList.add('productDelet');
        const h5 = document.createElement('h5');
        h5.classList.add('nameModal');
        const btnClose = document.createElement('button');
        btnClose.classList.add('closeModal');
    }

    static formStatus(valueStatus){

        const h5 = document.createElement('h5');
        h5.classList.add('nameModal');
        const btnClose = document.createElement('button');
        btnClose.classList.add('closeModal');
    }
}

