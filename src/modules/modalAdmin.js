export class Modal {

    // static let valueStatus = true; 
    static divModal = document.querySelector('.modal');
    static arrCateg = ['Panificadora','Frutas','Bebidas'];


    static formBasic(form){
        const labelName    = document.createElement('label');
        const inputName    = document.createElement('input');
        const labelDescrip = document.createElement('label');
        const inputDescrip = document.createElement('input');
        const divCatg       = document.createElement('div');
        for(let i =0; i<Modal.arrCateg.length;i++){
            const labelCateg = document.createElement('label');
            const inputCateg = document.createElement('input');
            inputCateg.classList.add('btnForm');
            inputCateg.setAttribute("type", "checkbox");
            labelCateg.setAttribute('for','btnForm');
            labelCateg.innerText = Modal.arrCateg[i];

            divCatg.appendChild(inputCateg);
            divCatg.appendChild(labelCateg);
        }
        const labelValue   = document.createElement('label');
        const inputValue   = document.createElement('input');
        const labelImage   = document.createElement('label');
        const inputImage   = document.createElement('input');

        inputName.classList.add('productName');
        inputDescrip.classList.add('descriptionProd');
        inputValue.classList.add('productValue');
        inputImage.classList.add('imageLink');

        inputName.setAttribute("type", "text");
        inputDescrip.setAttribute("type","text");
        inputValue.setAttribute("type", "text");
        inputImage.setAttribute("type", "text");

        labelName.innerText ='Nome';
        labelDescrip.innerText = 'Descrição';
        labelValue.innerText = 'Valor do Produto';
        labelImage.innerText = 'Link da Imagem';
        form.appendChild(labelName);
        form.appendChild(inputName);
        form.appendChild(labelDescrip);
        form.appendChild(inputDescrip);
        form.appendChild(divCatg);
        form.appendChild(labelValue);
        form.appendChild(inputValue);
        form.appendChild(labelImage);
        form.appendChild(inputImage);
        Modal.divModal.appendChild(form);
    }

    static formRegister(){
        const form      = document.createElement('form');
        form.classList.add('productRegister');
        const h5        = document.createElement('h5');
        h5.classList.add('nameModal');
        const btnClose  = document.createElement('button');
        btnClose.classList.add('closeModal');

        Modal.formBasic(form);

        const btnRegis     = document.createElement('button');
        btnRegis.classList.add('btnRegister');

        h5.innerText       ='Cadastro de Produto';
        btnClose.innerText = 'X';
        btnRegis.innerText = 'Cadastrar Produto';


        form.appendChild(h5);
        form.appendChild(btnClose);
        form.appendChild(btnRegis);
        Modal.divModal.appendChild(form);

    }
    static formEdit(){
        const form = document.createElement('form');
        form.classList.add('productEdit');
        const h5 = document.createElement('h5');
        h5.classList.add('nameModal');
        const btnClose = document.createElement('button');
        btnClose.classList.add('closeModal');
        Modal.formBasic(form);

        const btnDelete = document.createElement('button'); 
        const btnSave   = document.createElement('button');
        btnDelete.classList.add('btnDelete');
        btnSave.classList.add('btnSave');

        h5.innerText        ='Editar Produto';
        btnClose.innerText  = 'X';
        btnDelete.innerText = 'Excluir';
        btnSave.innerText   = 'Salvar alteração';

        form.appendChild(h5);
        form.appendChild(btnClose);
        form.appendChild(btnDelete);
        form.appendChild(btnSave);
        Modal.divModal.appendChild(form);
    }

    static formDelete(){
        const form = document.createElement('form');
        form.classList.add('productDelet');
        const h5 = document.createElement('h5');
        h5.classList.add('nameModal');
        const btnClose = document.createElement('button');
        btnClose.classList.add('closeModal');
        const span = document.createElement('span');

        const inputDelet    = document.createElement('input');
        const labelDelet    = document.createElement('label');
        const inputNoDelet  = document.createElement('input');
        const labelNoDelet  = document.createElement('label');
        inputDelet.classList.add('deleteProd');
        inputNoDelet.classList.add('noDelete');
        inputDelet.setAttribute("type", "checkbox");
        inputNoDelet.setAttribute("type", "checkbox");

        h5.innerText            = 'Exclusão de Produto';
        btnClose.innerText      = 'X';
        span.innerText          = 'Tem certeza que deseja excluir este produto?'
        labelDelet.innerText    = 'Sim';
        labelNoDelet.innerText  = 'Não'

        form.appendChild(h5);
        form.appendChild(btnClose);
        form.appendChild(span);
        form.appendChild(inputDelet);
        form.appendChild(labelDelet);
        form.appendChild(inputNoDelet);
        form.appendChild(labelNoDelet);
        

        Modal.divModal.appendChild(form);
    }

    static formStatus(valueStatus){

        const h5 = document.createElement('h5');
        h5.classList.add('nameModal');
        const btnClose = document.createElement('button');
        btnClose.classList.add('closeModal');

        const span = document.createElement('span');
        span.classList.add('modalStatus');

        if(valueStatus){
            span.innerText = 'Produto adicionado com sucesso';
        }
        else{
            span.innerText = 'Ocorreu algum erro, o produto não foi adicionado';
        }
        h5.innerText       = 'Status';
        btnClose.innerText = 'X';

        Modal.divModal.appendChild(h5);
        Modal.divModal.appendChild(btnClose);
        Modal.divModal.appendChild(span);
    }
       

}

