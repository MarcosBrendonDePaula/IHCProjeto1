const LoginInteface = document.querySelector("#login")
const LoginDisplay = document.querySelector("#LoginDisplay")

const BtnLogar = document.querySelector("#btnLogin")
const BtnRegistrar = document.querySelector("#btnregistrar")

function PrepareUser(){
    if(sessionStorage.getItem("User")!=undefined){
        let btn = document.createElement('button')
        btn.innerText ="Logado :> "+ sessionStorage.getItem("User")
        btn.classList.add('mdl-button')
        btn.classList.add('mdl-js-button')
        LoginInteface.innerHTML=""
        LoginInteface.appendChild(btn)
    }
}




BtnLogar.addEventListener("click",()=>{ 
    LoginDisplay.classList.toggle("hidden")
    function ocultar(event){
        if(event.explicitOriginalTarget.id!="LoginDisplay")
            return
        LoginDisplay.classList.toggle("hidden")
        LoginDisplay.removeEventListener("click",ocultar)
    }
    LoginDisplay.addEventListener("click",ocultar)
})
PrepareUser()