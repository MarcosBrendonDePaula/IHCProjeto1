const LoginInteface = document.querySelector("#login")
const LoginDisplay = document.querySelector("#LoginDisplay")

const BtnLogar = document.querySelector("#btnLogin")
const BtnRegistrar = document.querySelector("#btnregistrar")

//----Manipulando Usuarios
const singUpButton = document.querySelector("#singUpButton")
var UsuariosCadastrados={}
var vetorUser=[]
function LoadCokkie(){
    console.log("Atual:  ",document.cookie)
    if(document.cookie.split('=').length < 2)
        document.cookie=`Users={"Users":[{"user":"admin","passw":"admin"},{"user":"Marcos","passw":"Melissa5"}]};expires=`+new Date(2020,5,01).toGMTString()+";"
    let json = JSON.parse(document.cookie.split('=')[1])
    for (let i of json.Users){
        UsuariosCadastrados[i.user]={"passw":i.passw}
    }
    vetorUser=json.Users
}
function cookieReset(){
    document.cookie=`Users={"Users":[{"user":"admin","passw":"admin"},{"user":"Marcos","passw":"Melissa5"}]};expires=`+new Date(2020,5,01).toGMTString()+";"
}
function UpdateUsers(){
    let str =  'Users={"Users":['
    for(let i of vetorUser){
        console.log(i)
        str+=JSON.stringify(i)+","
    }
    str+=']};expires='+new Date(2020,5,01).toGMTString()+";"
    document.cookie=str
}

    //Cadastrando Um novo Usuario
        singUpButton.addEventListener('click',()=>{
            let passwCampos = document.querySelectorAll(".signPass")
            let LoginCampo = document.querySelector(".signLogin")
            if((passwCampos[0].value==passwCampos[1].value) & UsuariosCadastrados[LoginCampo.value]==undefined){
                UsuariosCadastrados[LoginCampo.value]=passwCampos[0].value
                vetorUser.push({"user":LoginCampo.value,"passw":passwCampos[0].value})
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
    function ocultar(event){
        if(event.target.id!="LoginDisplay")
            return
        LoginDisplay.classList.toggle("hidden")
        document.querySelector("body").classList.remove('noScroll')
        LoginDisplay.removeEventListener("click",ocultar)
    }
    LoginDisplay.addEventListener("click",ocultar)
})



PrepareUser()
//LoadCokkie()