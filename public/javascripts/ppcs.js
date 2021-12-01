let addBotaoPerfil = document.querySelector(".addbotaoPerfil");
let addBotaoCompetHabilidade = document.querySelector(".addbotaoCompetHabilidade");
let perfilEspaco = document.querySelector(".perfilEspaco");
let competHabilidadeEspaco = document.querySelector(".competHabilidadeEspaco");
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

//botões da view de cirar PPC

addBotaoPerfil.addEventListener("mouseover", function(evento) {
    addBotaoPerfil.style.transform = "scale(1.2)"
})

addBotaoPerfil.addEventListener("mouseout", function(evento) {
    addBotaoPerfil.style.transform = "scale(1)"
})

addBotaoPerfil.addEventListener("click", function(evento) {
    perfilEspaco.insertAdjacentHTML("beforeend", "<div> Numero: <input type='text' name='perfilNumero' id='perfilNumero' class='perfilInput'> Perfil: <input type='text' name='perfil' id='perfil' class='perfilInput'> </div>")
})

addBotaoCompetHabilidade.addEventListener("mouseover", function(evento) {
    addBotaoCompetHabilidade.style.transform = "scale(1.2)"
})

addBotaoCompetHabilidade.addEventListener("mouseout", function(evento) {
    addBotaoCompetHabilidade.style.transform = "scale(1)"
})

addBotaoCompetHabilidade.addEventListener("click", function(evento) {
    competHabilidadeEspaco.insertAdjacentHTML("beforeend", "<div> Numero: <input type='text' name='competHabilidadeNumero' id='competHabilidadeNumero' class='competHabilidadeInput'> Competência/Habilidade: <input type='text' name='competHabilidade' id='competHabilidade' class='competHabilidadeInput'> </div>");
})


