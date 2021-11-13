let addBotao = document.querySelector(".addbotao");
let perfilEspaco = document.querySelector(".perfilEspaco");
let iconeDeMenu = document.getElementById("iconeDePpcs");
let textoDeMenu = document.getElementById("textoPPCs");
let iconesDeMenu = document.querySelectorAll(".iconeDeMenu");
let perfilInput = document.querySelectorAll(".perfilInput");

textoDeMenu.style.color = "#d93b48";
iconeDeMenu.src = "/images/iconePpcsVermelho.png";

iconesDeMenu.forEach(icone => {
  
    icone.addEventListener("mouseover", function(evento) {
        icone.style.transform = "scale(1.2)" 
    })

});

iconesDeMenu.forEach(icone => {
  
    icone.addEventListener("mouseout", function(evento) {
        icone.style.transform = "scale(1)"
    })

});

addBotao.addEventListener("mouseover", function(evento) {
    addBotao.style.transform = "scale(1.2)"
})

addBotao.addEventListener("mouseout", function(evento) {
    addBotao.style.transform = "scale(1)"
})

addBotao.addEventListener("click", function(evento) {
    perfilEspaco.innerHTML += "<div> Numero do perfil<input type='text' name='perfilNumero' id='perfilNumero' class='perfilInput'> Perfil <input type='text' name='perfil' id='perfil' class='perfilInput'> </div>";
    console.log(perfilEspaco)
})