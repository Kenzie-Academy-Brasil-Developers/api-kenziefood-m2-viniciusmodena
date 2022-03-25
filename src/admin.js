import { Modal } from "./modules/modal.js";
import { Api } from "./controller/api.js";
import { Dashboard } from "./modules/dashboard.js";

const body = document.querySelector('body')

const user = {
      name: "Modena",
      email: "modena@gmail.com",
      password: "equipe1",
    }
    const token = await Api.userLogin(user);

const ul = document.querySelector(".dashboard-list");
// const token = localStorage.getItem("token")
const dashboardList = await Api.getMyProducts(token);
console.log(dashboardList)
Dashboard.createVitrini(dashboardList, ul);

// const filterButtons = document.querySelector(".filters")
// const searchInput = document.querySelector(".header-input")
// const signOut = document.querySelector('.logout')

//MODALS

const modalStatusOk = document.getElementById("status-ok-modal");
const modalStatusNotOk = document.getElementById("status-not-ok-modal");

const btnCloseModalList = document.querySelectorAll(".close-modal")
btnCloseModalList.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
         const closeBtn = event.target.closest('.modal-status')
        closeBtn.classList.add('hidden')
    })
})

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

const signOut = document.querySelector('.logout')


signOut.addEventListener('click', () => {

    window.localStorage.removeItem('cart');
    window.localStorage.removeItem('token');
  
    window.location.href = "./../../index.html";
  
    console.log('hi')
  })
