const LoginInteface = document.querySelector("#login")
const LoginDisplay = document.querySelector("#LoginDisplay")

const BtnLogar = document.querySelector("#btnLogin")
const BtnRegistrar = document.querySelector("#btnregistrar")

//----Manipulando Usuarios
const singUpButton = document.querySelector("#singUpButton")


var Login_Usuarios=[]
var Usuarios={}

function setBasicUsers(){
    var userlist=[]
    userlist.push({"login":"Marcos","Senha":"azx0025"})
    userlist.push({"login":"Henri","Senha":"henrixss"})
    userlist.push({"login":"Eric","Senha":"PacoLoco"})
    document.cookie=JSON.stringify({"listUsers":userlist})+";expires="+new Date(2030,5,01).toGMTString()+";"
}

function LoadCokkie(){
    if(document.cookie.length <= 1)
        setBasicUsers()
    let json = JSON.parse(document.cookie)
    for (let i of json.listUsers){
        Login_Usuarios.push(i.login)
        Usuarios[i.login]=i.Senha
    }
}

function UpdateUsers(){
    let Uservector=[]
    for(let i of Login_Usuarios){
        console.log(i)
        Uservector.push({'login':i,'Senha':Usuarios[i]})
    }
    document.cookie=JSON.stringify({"listUsers":Uservector})+";expires="+new Date(2030,5,01).toGMTString()+";"
}

//Cadastrando Um novo Usuario
singUpButton.addEventListener('click',()=>{

    let passwCampos = document.querySelectorAll(".signPass")
    let LoginCampo = document.querySelector(".signLogin")

    if((passwCampos[0].value==passwCampos[1].value) & Usuarios[LoginCampo.value]==undefined){
        Login_Usuarios.push(LoginCampo.value)
        Usuarios[LoginCampo.value]=passwCampos[1].value
        UpdateUsers()
    }
})
//---------------------------------------

window.flip = function(flip) {
    $('#cube').removeClass(); 
    $('#cube').addClass(flip);   
}
function PrepareUser(){
    if(sessionStorage.getItem("User")!=undefined){
        let btn = document.createElement('button')
        btn.style.color="white";
        btn.style.border="1px solid white"
        btn.style.marginRight="2vw";
        btn.innerText ="Logado :> "+ sessionStorage.getItem("User")
        btn.classList.add('mdl-button')
        btn.classList.add('mdl-js-button')
        LoginInteface.innerHTML=""
        LoginInteface.appendChild(btn)
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



PrepareUser()
LoadCokkie()