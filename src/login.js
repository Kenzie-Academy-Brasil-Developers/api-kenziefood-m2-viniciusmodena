import { Api } from "./controller/api.js";

//LOGIN BUTTON

const loginButton = document.getElementById("btn-login")
loginButton.addEventListener("click", (evt)=>{
    evt.preventDefault()

    const userEmail = document.getElementById("login-email").value
    const userPassword = document.getElementById("login-password").value

    if(userEmail!=="" && userPassword !== ""){
        const user = {"email":userEmail, "password": userPassword}
    
        const userToken =  Api.userLogin(user)
    
        console.log(userToken)
    
        localStorage.setItem("token", userToken)
    
        window.location.href = "./../index.html"
    }
    else{
        const errorModal = document.querySelector(".modal-invalid")
        errorModal.classList.remove("hidden")
        errorModal.addEventListener("click",()=>{
            errorModal.classList.add("hidden")
        })
    }
    
})

//OPEN REGISTER MODAL

const openRegister =document.querySelector(".open-modal")
openRegister.addEventListener("click",()=>{
    const modal = document.querySelector('.modal')
    modal.style.display='flex'
})

//CLOSE REGISTER MODAL

const closeRegister = document.querySelector(".close-modal")
closeRegister.addEventListener("click", ()=>{
    const modal = document.querySelector('.modal')
    modal.style.display='none'
})

//REGISTER BUTTON

const registerButton = document.getElementById("btn-register-new-user")
registerButton.addEventListener("click", (evt)=>{
    evt.preventDefault()

    const newUserName = document.getElementById("register-name").value
    const newUserEmail = document.getElementById("register-email").value
    const newUserPassword = document.getElementById("register-password").value
    // const passwordConfirmation =document.getElementById("register-password-confirmation")

    if(newUserName !== "" && newUserEmail !== "" && newUserPassword !==""){
        const newUser = {"name": newUserName,"email":newUserEmail, "password": newUserPassword}
        Api.registerUser(newUser)
        document. location. reload()
    }else{
        const errorModal = document.querySelector(".modal-invalid")
        errorModal.classList.remove("hidden")
        errorModal.addEventListener("click",()=>{
            errorModal.classList.add("hidden")
        })
    }

})