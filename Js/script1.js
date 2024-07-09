// alert(1)
var btn_login = document.getElementById("btn_login")
var cuerpo = document.getElementById("cuerpo")
btn_login.onclick = function(){
    // alert(1)
    cuerpo += /*html*/`
    <div class="noti b-shadow br10 absolute top10 derecha10 txtwhite overflow-hidden hp10 color9">
        <div class="w90p h100p br10 space-nw p10 center bgwhite txtblack negrita">
            El usuario no existe...!
        </div>
    </div>
    `
}