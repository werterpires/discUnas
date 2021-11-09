let iconeDeMenu = document.getElementById("iconeDePpcs");
let textoDeMenu = document.getElementById("textoPPCs");
let iconesDeMenu = document.querySelectorAll(".iconeDeMenu")


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
