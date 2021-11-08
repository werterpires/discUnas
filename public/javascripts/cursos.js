let iconeDeMenu = document.getElementById("iconeCursos");
let textoDeMenu = document.getElementById("textoCursos");
let iconesDeMenu = document.querySelectorAll(".iconeDeMenu")


textoDeMenu.style.color = "#d93b48";
iconeDeMenu.src = "/images/iconeCursosVermelho.png";

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
