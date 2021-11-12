let addBotao = document.querySelectorAll(".addbotao");
let perfilEspaco = document.querySelector(".perfilEspaco");
let iconeDeMenu = document.getElementById("iconeDePpcs");
let textoDeMenu = document.getElementById("textoPPCs");
let iconesDeMenu = document.querySelectorAll(".iconeDeMenu");
let perfilInput = document.querySelectorAll(".perfilInput");


console.log("botao", addBotao)

addBotao.forEach(botao => {
  
    botao.addEventListener("mouseover", function(evento) {
        perfilEspaco.innerHTML += "<div> Numero do perfil<input type='text' name='perfilNumero' id='perfilNumero' class='perfilInput'> Perfil <input type='text' name='perfil' id='perfil' class='perfilInput'> </div>";
        console.log("passei aqui de novo", perfilEspaco)
      
    })

});

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

perfilInput.forEach(entrada => {
    entrada.addEventListener("change", function(evento){
      perfilEspaco.innerHTML += "<div> Numero do perfil<input type='text' name='perfilNumero' id='perfilNumero' class='perfilInput'> Perfil <input type='text' name='perfil' id='perfil' class='perfilInput'> </div>"
    
      
    })
})
