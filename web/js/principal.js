const LoginInteface = document.querySelector("#login")
const LoginDisplay = document.querySelector("#LoginDisplay")

const BtnLogar = document.querySelector("#btnLogin")
const BtnRegistrar = document.querySelector("#btnregistrar")

//----Manipulando Usuarios
const singUpButton = document.querySelector("#singUpButton")

var Usuarios={}

//Cadastrando Um novo Usuario
singUpButton.addEventListener('click',()=>{
    let passwCampos = document.querySelectorAll(".signPass")
    let LoginCampo = document.querySelector(".signLogin")

    if((passwCampos[0].value==passwCampos[1].value) & Usuarios[LoginCampo.value]==undefined){
        Usuarios[LoginCampo.value]={"passw":passwCampos[1].value,"cart":[]}
        sessionStorage.setItem("Users",JSON.stringify(Usuarios))
        sessionStorage.setItem("User",JSON.stringify({"login":LoginCampo.value,"passw":passwCampos[1].value,"cart":[]}))
        location.reload()
    }
})
//---------------------------------------
document.querySelector(".btnEntrar").addEventListener("click",()=>{
    let login = document.querySelector(".logincampo").value
    let passw = document.querySelector(".passwordcampo").value
    console.log(Usuarios[login]!=undefined && Usuarios[login].passw==passw)
    if(Usuarios[login]!=undefined && Usuarios[login].passw==passw){
        Usuarios[login].login = login
        sessionStorage.setItem("User",JSON.stringify(Usuarios[login]))
        location.reload()
    }
})

function PrepareUser(){
    if(sessionStorage.getItem("User")!=undefined){
        let btn = document.createElement('button')
        let btn_sair = document.createElement('button')
        btn.style.color="white";
        btn.style.border="1px solid white"
        btn.style.marginRight="2vw";
        btn.innerText ="Logado :> "+ JSON.parse(sessionStorage.getItem("User")).login
        btn.classList.add('mdl-button')
        btn.classList.add('mdl-js-button')
        btn_sair.style.color="red";
        btn_sair.style.border="1px solid white"
        btn_sair.style.marginRight="2vw";
        btn_sair.innerText ="Sair"
        btn_sair.classList.add('mdl-button')
        btn_sair.classList.add('mdl-js-button')
        LoginInteface.innerHTML=""
        LoginInteface.appendChild(btn)
        LoginInteface.appendChild(btn_sair)
        btn_sair.addEventListener('click',()=>{
            sessionStorage.removeItem("User")
            location.reload()
        })
    }
}

BtnLogar.addEventListener("click",()=>{ 
    LoginDisplay.classList.toggle("hidden")
    document.querySelector('#corpo').style.overflow = 'hidden'
    function ocultar(event){
        if(event.target.id!="LoginDisplay")
            return
        LoginDisplay.classList.toggle("hidden")
        document.querySelector("body").classList.remove('noScroll')
        LoginDisplay.removeEventListener("click",ocultar)
        document.querySelector('#corpo').style.overflow = 'visible'
    }
    LoginDisplay.addEventListener("click",ocultar)
})

window.flip = function(flip) {
    $('#cube').removeClass(); 
    $('#cube').addClass(flip);   
}

if(sessionStorage.getItem("Users")!=undefined)
    Usuarios = JSON.parse(sessionStorage.getItem("Users"))
PrepareUser()