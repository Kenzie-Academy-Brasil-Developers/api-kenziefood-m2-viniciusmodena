import { Modal } from "./modules/modal.js";
import { Api } from "./controller/api.js";
import { Vitrine } from "./modules/vitrini.js";

const ul = document.querySelector(".dashboard-list");
const token = localStorage.getItem("token")
const dashboardList = await Api.getMyProducts(token);
console.log(dashboardList)
Vitrine.createVitrini(dashboardList, ul);
//MODALS

const modalAddNewProduct = document.getElementById("new-product-modal");
const modalEditProduct = document.querySelectorAll(".edit-product-modal");
const modalDeleteProduct = document.querySelectorAll(".delete-product-modal");
const modalStatusOk = document.getElementById("status-ok-modal");
const modalStatusNotOk = document.getElementById("status-not-ok-modal");
//BUTTONS

const btnAddNewProduct = document.querySelector(".add-new-product-button");
btnAddNewProduct.addEventListener("click", (evt) => {
  evt.preventDefault();
    Modal.createModalRegister()
});

const btnEditProduct = document.querySelectorAll(".edit-product")
btnEditProduct.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        Modal.createModalEdit(btn.closest("li").id)
    })
})
const btnDeleteProduct = document.querySelectorAll(".delete-product")
btnDeleteProduct.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        Modal.createModalDelete(btn.closest("li").id)
    })
})