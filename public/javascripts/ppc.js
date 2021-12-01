


let iconeDeMenu = document.getElementById("iconeDePpcs");
let textoDeMenu = document.getElementById("textoPPCs");
let iconesDeMenu = document.querySelectorAll(".iconeDeMenu");


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


//Interface de adicionar disciplinas
const urlDisciplinas = "http://localhost:3000/disciplinas/api"
const urlCriarRelacao = "http://localhost:3000/ppcsVersoes/createrelacaoDisciplinasVersoesPPCs"

const ppcIdButton = document.getElementById("ppcId");
const semestreButton = document.getElementById("semestre");
const disciplinaSearchDiv = document.querySelector(".disciplinaSearchDiv");
const disciplinaSearch = document.querySelector(".disciplinaSearch");
const disciplinasNomesLista = document.querySelector(".disciplinasNomesLista");
const disciplinasVersoesNomesLista = document.querySelector(".disciplinasVersoesNomesLista");
const disciplinasVersoesDetalhes = document.querySelector(".disciplinasVersoesDetalhes");
const esmaecimento = document.querySelector(".esmaecimento")

let allDisciplinas = [];
let disciplinas = [];
let disciplina = 0
let disciplinaVersao = 0



document.addEventListener("DOMContentLoaded", async function(event) {
    allDisciplinas = await axios.get(urlDisciplinas);
    allDisciplinas = allDisciplinas.data;
    
  });


disciplinaSearch.addEventListener("input", async function(evento){

    disciplinasVersoesDetalhes.classList.add("hidden")
    disciplinasVersoesDetalhes.innerHTML="<div></div>";
    disciplinasVersoesNomesLista.classList.add("hidden")
    disciplinasVersoesNomesLista.innerHTML="<div></div>";
    esmaecimento.classList.remove("hidden")
    disciplinaSearchDiv.style.position = "fixed";
    disciplinaSearchDiv.style.zIndex = "2";
    disciplinaSearchDiv.style.bottom = "10vh";
    disciplinaSearchDiv.style.backgroundColor = "#f2f2f2";
    disciplinasNomesLista.classList.remove("hidden")
    disciplinasNomesLista.innerHTML="<div></div>";
    disciplinasNomesLista.innerHTML=`<button class="fecharBotao1"><img class="fecharImagem" onclick="fecharDisciplinasNomes()" src="/images/fecharIcone.png" alt="fechar"></button>`
    

    const pesquisa = disciplinaSearch.value;

    function filterItems(query) {
        return allDisciplinas.filter(function(el) {
            return el.disciplinaNome.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    }

    disciplinas = filterItems(pesquisa)
    

    disciplinas.forEach(disciplina => {
        disciplinasNomesLista.insertAdjacentHTML("beforeend", `<button value=${disciplina.disciplinaId} onclick="disciplinasVersoesSearch(this.value)"> ${disciplina.disciplinaNome}</button>`)
    })

})

function fecharDisciplinasNomes(){
    disciplinasVersoesDetalhes.classList.add("hidden")
    disciplinasVersoesDetalhes.innerHTML="<div></div>";
    disciplinasVersoesNomesLista.classList.add("hidden")
    disciplinasVersoesNomesLista.innerHTML="<div></div>";
    disciplinasNomesLista.classList.add("hidden")
    disciplinasNomesLista.innerHTML="<div></div>";
    esmaecimento.classList.add("hidden")
    disciplinaSearchDiv.style.position = "static";
    
}
    
function disciplinasVersoesSearch(disciplinaId){
    const fecharBotao1 = document.querySelector(".fecharBotao1")

    disciplinasVersoesDetalhes.classList.add("hidden")
    disciplinasVersoesDetalhes.innerHTML="<div></div>";
    
    fecharBotao1.classList.add("hidden");
    disciplinasVersoesNomesLista.classList.remove("hidden");
    disciplinasVersoesNomesLista.innerHTML="<div></div>";

    disciplinasVersoesNomesLista.innerHTML=`<button class="fecharBotao2"><img class="fecharImagem" onclick="fecharDisciplinasVersoesNomes()" src="/images/fecharIcone.png" alt="fechar"></button>`
    
    disciplina = disciplinas.filter(function(disciplina) {
       
       return disciplina.disciplinaId == disciplinaId; 
    })

      
    disciplina[0].DisciplinaVersao.forEach(disciplinaVersao =>{
        disciplinasVersoesNomesLista.insertAdjacentHTML("beforeend", `<button value=${disciplinaVersao.disciplinaVersaoId} onclick="disciplinaVersaoSearch(this.value)" id=oferta${disciplinaVersao.emOferta}> ${disciplinaVersao.disciplinaVersaoNome}  </button>`)
    })
    
}


function fecharDisciplinasVersoesNomes(){
    disciplinasVersoesDetalhes.classList.add("hidden")
    disciplinasVersoesDetalhes.innerHTML="<div></div>";
    disciplinasVersoesNomesLista.classList.add("hidden")
    disciplinasVersoesNomesLista.innerHTML="<div></div>";
    disciplinasNomesLista.classList.add("hidden")
    disciplinasNomesLista.innerHTML="<div></div>";
    esmaecimento.classList.add("hidden")
    disciplinaSearchDiv.style.position = "static";
}

function disciplinaVersaoSearch(disciplinaVersaoId){
    
    const fecharBotao2 = document.querySelector(".fecharBotao2");

    fecharBotao2.classList.add("hidden");
    disciplinasVersoesDetalhes.classList.remove("hidden");
    disciplinasVersoesDetalhes.innerHTML="<div></div>";
    disciplinasVersoesDetalhes.innerHTML=`<button class="fecharBotao3"><img class="fecharImagem" onclick="fecharDisciplinasVersoesDetalhes()" src="/images/fecharIcone.png" alt="fechar"></button>`
    
    disciplinaVersao = disciplina[0].DisciplinaVersao.filter(function(disciplinaVersao) {
       
       return disciplinaVersao.disciplinaVersaoId == disciplinaVersaoId; 
    });

    
         
    disciplinasVersoesDetalhes.insertAdjacentHTML("beforeend", `<div> ${disciplinaVersao[0].disciplinaVersaoNome} </div> </br> <div> ${disciplinaVersao[0].codigo} </div><div> ${disciplinaVersao[0].sigla} </div> </br> <div> ${disciplinaVersao[0].ementa} </div> </br> <div> ${disciplinaVersao[0].basicBibliografia} </div> </br><div> ${disciplinaVersao[0].compBibliografia} </div> </br> <div> ${disciplinaVersao[0].observacao} </div> </br><button onclick="cadastrarRelacao()">Escolher</button>`)
}

function fecharDisciplinasVersoesDetalhes(){
    disciplinasVersoesDetalhes.classList.add("hidden")
    disciplinasVersoesDetalhes.innerHTML="<div></div>";
    disciplinasVersoesNomesLista.classList.add("hidden")
    disciplinasVersoesNomesLista.innerHTML="<div></div>";
    disciplinasNomesLista.classList.add("hidden")
    disciplinasNomesLista.innerHTML="<div></div>";
    esmaecimento.classList.add("hidden")
    disciplinaSearchDiv.style.position = "static";
}

async function cadastrarRelacao(){
    const disciplinaVersaoId = disciplinaVersao[0].disciplinaVersaoId;
    const ppcId = ppcIdButton.value;
    const semestre = semestreButton.value;

    await axios.post(urlCriarRelacao, { disciplinaVersaoId, ppcId, semestre })



}