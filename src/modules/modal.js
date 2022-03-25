import { Api } from "../controller/api.js";
import { Vitrine } from "./vitrini.js";
export class Modal {
  //     static divModal = document.querySelector(".modal");
  //   static arrCateg = ["Panificadora", "Frutas", "Bebidas"];
  static createModalRegister() {
    const modalSection = document.getElementById("modal-section");
    modalSection.innerHTML = `
        <div class="modal" id="new-product-modal">
                <section class="modal-section">
                    <div class="section-header">
                        <h5 class="name-modal">Cadastro de Produto</h5>
                        <button class="close-modal">X</button>
                    </div>
                    <form class="product-register">
                        <label for="productName">Nome do Produto</label>
                        <input type="text" class="productName" name="productName" placeholder="Digitar o nome do produto">
                        <label for="descriptionProd">Descrição</label>
                        <input type="text" class="descriptionProd" name="descriptionProd" placeholder="Digitar a descrição do produto">
                        <span>Categoria</span>
                        <div class="category-options">
                            <input type="checkbox" name="panificadora" value="panificadora" class="category">
                            <label for="panificadora">Panificadora</label>
                            <input type="checkbox" name="frutas" value="frutas" class="category">
                            <label for="frutas">Frutas</label>
                            <input type="checkbox" name="bebidas" value="bebidas" class="category">
                            <label for="bebidas">Bebidas</label>
                        </div>
                        <label for="productValue">Valor do Produto</label>
                        <input type="text" class="productValue" name="productValue" placeholder="Digitar o valor do produto">
                        <label for="imageLink">Link da imagem</label>
                        <input type="text" class="imageLink" name="imageLink" placeholder="Insira o link da imagem">
                        <div class="buttons-option">
                          <button id="btn-register" class="pink">Cadastrar Produto</button>
                        </div>
                    </form>
                </section>
            </div>
        `;
    document.querySelector(".close-modal").addEventListener("click", () => {
      modalSection.innerHTML = "";
    });
    document.getElementById("btn-register").addEventListener("click", (evt) => {
      evt.preventDefault();
      const name = document.querySelector(".productName").value;
      const description = document.querySelector(".descriptionProd").value;
      const checkCategory = document.querySelectorAll(".category");
      let category = "";
      checkCategory.forEach((item) => {
        if (item.checked === true) {
          category += item.name;
        }
      });
      const preco = document.querySelector(".productValue").value;
      const image = document.querySelector(".imageLink").value;
      if (
        name !== "" ||
        description !== "" ||
        category !== "" ||
        description !== "" ||
        preco !== "" ||
        image !== ""
      ) {
        let newProduct = {
          nome: name,
          preco: preco,
          categoria: category,
          imagem: image,
          descricao: description,
        };
        Api.createProduct(newProduct, token);
        const ul = document.querySelector(".dashboard-list");
        const token = localStorage.getItem("token");
        const dashboardList = await Api.getMyProducts(token);
        const modalStatusOk = document.getElementById("status-ok-modal");
        const modalStatusNotOk = document.getElementById("status-not-ok-modal");
        Vitrine.createVitrini(dashboardList, ul);
        modalStatusOk.classList.remove("hidden");
      } else {
        const modalStatusNotOk = document.getElementById("status-not-ok-modal");
        modalSection.innerHTML = "";
        modalStatusNotOk.classList.remove("hidden");
      }
    });
  }
  static createModalEdit(id) {
    const modalSection = document.getElementById("modal-section");
    modalSection.innerHTML = `
        <div class="modal edit-product-modal" id="${id}">
                <section class="modal-section">
                    <div class="section-header">
                        <h5 class="name-modal">Edição de Produto</h5>
                        <button class="close-modal">X</button>
                    </div>
                    <form class="product-edit">
                        <label for="productName">Nome do Produto</label>
                        <input type="text" class="productName" name="productName" placeholder="Digitar o nome do produto">
                        <label for="descriptionProd">Descrição</label>
                        <input type="text" class="descriptionProd" name="descriptionProd" placeholder="Digitar a descrição do produto">
                        <span>Categoria</span>
                        <div class="category-options">
                            <input type="checkbox" name="panificadora" value="panificadora" class="btnForm">
                            <label for="panificadora">Panificadora</label>
                            <input type="checkbox" name="frutas" value="frutas" class="btnForm">
                            <label for="frutas">Frutas</label>
                            <input type="checkbox" name="bebidas" value="bebidas" class="btnForm">
                            <label for="bebidas">Bebidas</label>
                        </div>
                        <label for="productValue">Valor do Produto</label>
                        <input type="text" class="productValue" name="productValue" placeholder="Digitar o valor do produto">
                        <label for="imageLink">Link da imagem</label>
                        <input type="text" class="imageLink" name="imageLink" placeholder="Insira o link da imagem">
                       <div class="buttons-option">
                           <button class="btn-cancel-edit gray">Excluir</button>
                           <button class="btn-save-edit pink">Salvar alterações</button>
                       </div>
                    </form>
                </section>
            </div>
        `;
    document.querySelector(".close-modal").addEventListener("click", () => {
      modalSection.innerHTML = "";
    });
    document.querySelector(".btn-cancel-edit").addEventListener("click", () => {
      modalSection.innerHTML = "";
    });
    document
      .querySelector(".btn-save-edit")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        const name = document.querySelector(".productName").value;
        const description = document.querySelector(".descriptionProd").value;
        const checkCategory = document.querySelectorAll(".category");
        let category = "";
        checkCategory.forEach((item) => {
          if (item.checked === true) {
            category += item.name;
          }
        });
        const preco = document.querySelector(".productValue").value;
        const image = document.querySelector(".imageLink").value;
        if (
          name !== "" ||
          description !== "" ||
          category !== "" ||
          description !== "" ||
          preco !== "" ||
          image !== ""
        ) {
          let newProduct = {
            nome: name,
            preco: preco,
            categoria: category,
            imagem: image,
            descricao: description,
          };
          Api.editProduct(id);
          const ul = document.querySelector(".dashboard-list");
          const token = localStorage.getItem("token");
          const dashboardList = await Api.getMyProducts(token);
          const modalStatusOk = document.getElementById("status-ok-modal");
          const modalStatusNotOk = document.getElementById(
            "status-not-ok-modal"
          );
          Vitrine.createVitrini(dashboardList, ul);
          modalStatusOk.classList.remove("hidden");
          Api.editProduct(id);
        } else {
          const modalStatusNotOk = document.getElementById(
            "status-not-ok-modal"
          );
          modalSection.innerHTML = "";
          modalStatusNotOk.classList.remove("hidden");
        }
      });
  }
  static createModalDelete(id) {
    const modalSection = document.getElementById("modal-section");
    modalSection.innerHTML = `
        <div class="modal delete-product-modal">
                <section class="modal-section">
                    <div class="section-header">
                        <h5 class="name-modal">Exclusão de produto</h5>
                        <button class="close-modal">X</button>
                    </div>
                    <p>Tem certeza que deseja excluir?</p>
                    <div class="buttons-option">
                        <button id="${id}" class="btn-yes gray">Sim</button>
                        <button class="btn-no gray">Não</button>
                    </div>
                </section>
            </div>
        `;
    document.querySelector(".btn-yes").addEventListener("click", (evt) => {
      const btnId = evt.target.id;
      const token = localStorage.getItem("token");
      Api.deleteProduct(btnId, token);
    });
    document.querySelector(".btn-no").addEventListener("click", () => {
      modalSection.innerHTML = "";
    });
    document.querySelector(".close-modal").addEventListener("click", () => {
      modalSection.innerHTML = "";
    });
  }
}