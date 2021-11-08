let iconeDeMenu = document.getElementById("iconeProducao");
let textoDeMenu = document.getElementById("textoProducao");
let iconesDeMenu = document.querySelectorAll(".iconeDeMenu");

textoDeMenu.style.color = "#d93b48";
iconeDeMenu.src = "/images/iconeProducaoVermelho.png";



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