


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


//somatorio de créditos


//Interface de adicionar disciplinas
const urlDisciplinas = "http://localhost:3000/disciplinas/api"
const urlCriarRelacao = "http://localhost:3000/ppcsVersoes/createrelacaoDisciplinasVersoesPPCs"

const ppcIdButton = document.getElementById("ppcId");
const disciplinaSearchDiv = document.querySelectorAll(".disciplinaSearchDiv");

const disciplinasNomesLista = document.querySelector(".disciplinasNomesLista");
const addBotao = document.querySelectorAll(".addBotao");
const disciplinasVersoesNomesLista = document.querySelector(".disciplinasVersoesNomesLista");
const disciplinasVersoesDetalhes = document.querySelector(".disciplinasVersoesDetalhes");
const esmaecimento = document.querySelector(".esmaecimento");
const total = document.querySelectorAll(".total");
const creditoQuantidadeTotal = document.querySelectorAll("#creditoQuantidadeTotal")


let allDisciplinas = [];
let disciplinas = [];
let disciplina = 0
let disciplinaVersao = 0;
let semestre = 0;

function criarBotao(element){
    addBotao.forEach(botao => {
        if(element.id == botao.id){
            botao.classList.remove("hidden")
        }; 
    })
}

function destruirBotao(){
    addBotao.forEach(botao => {
        botao.classList.add("hidden")
    }); 
}

function criarForm(elemento){
    disciplinaSearchDiv.forEach(div => {
        div.innerHTML = ""
    })
    semestre = elemento.id;
    disciplinaSearchDiv[semestre-1].insertAdjacentHTML("afterbegin", ` <form action=""> 
    <label for="disciplinaNome"> Disciplina:</label>
     <input type="search" class="disciplinaSearch" name="disciplinaNome" id="disciplinaNome" autocomplete="off" oninput="buscarDisciplina(this)">  
  </form>  `)

  

}

document.addEventListener("DOMContentLoaded", async function(event) {
    allDisciplinas = await axios.get(urlDisciplinas);
    allDisciplinas = allDisciplinas.data;
    
  });


  async function buscarDisciplina(disciplinaSearch) {

    

    disciplinasVersoesDetalhes.classList.add("hidden")
    disciplinasVersoesDetalhes.innerHTML="<div></div>";
    disciplinasVersoesNomesLista.classList.add("hidden")
    disciplinasVersoesNomesLista.innerHTML="<div></div>";
    esmaecimento.classList.remove("hidden")
    disciplinaSearchDiv[semestre-1].style.position = "fixed";
    disciplinaSearchDiv[semestre-1].style.left = "5vw";
    disciplinaSearchDiv[semestre-1].style.zIndex = "2";
    disciplinaSearchDiv[semestre-1].style.bottom = "10vh";
    disciplinaSearchDiv[semestre-1].style.backgroundColor = "#f2f2f2";
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

}

function fecharDisciplinasNomes(){
    disciplinasVersoesDetalhes.classList.add("hidden")
    disciplinasVersoesDetalhes.innerHTML="<div></div>";
    disciplinasVersoesNomesLista.classList.add("hidden")
    disciplinasVersoesNomesLista.innerHTML="<div></div>";
    disciplinasNomesLista.classList.add("hidden")
    disciplinasNomesLista.innerHTML="<div></div>";
    esmaecimento.classList.add("hidden")
    disciplinaSearchDiv[semestre-1].style.position = "static";
    
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
    disciplinaSearchDiv[semestre-1].style.position = "static";
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

    let produzido = "Produzida";
    let emOferta = "Em oferta";

    if(disciplinaVersao[0].produzido == 0){
        produzido = "Não produzida"
    }
     
    if(disciplinaVersao[0].emOferta == 0){
        emOferta = "Não está em oferta"
    }

    disciplinasVersoesDetalhes.insertAdjacentHTML("beforeend", `
    <div class="colunaDupla">
        <div> ${disciplinaVersao[0].disciplinaVersaoNome} </div> 
        <div class="colunaDupla"> ${disciplinaVersao[0].creditoQuantidade} 
            <section class="creditoTexto"> crédito(s)</section>
        </div> 
    </div> 
    </br> 
    <div class="colunaDupla">
        <div>
            <div class="legendaTexto">Código(TOTVS):</div>
            <div> ${disciplinaVersao[0].codigo} </div>
        </div>
        <div>
            <div class="legendaTexto">Sigla:</div>
            <div> ${disciplinaVersao[0].sigla} </div>
        </div> 
    </div>
    </br>
    <div class="legendaTexto">Ementa:</div>
    <div> ${disciplinaVersao[0].ementa} </div> 
    </br> 
    <div class="legendaTexto">Bibliografia Básica:</div>
    <div> ${disciplinaVersao[0].basicBibliografia} </div> 
    </br>
    <div class="legendaTexto">Bibliografia Complementar:</div>
    <div> ${disciplinaVersao[0].compBibliografia} </div>
    </br>
    <div class="legendaTexto">Observação:</div>
    <div> ${disciplinaVersao[0].observacao} </div> 
    </br>
    <div> ${produzido} </div> 
    </br>
    <div> ${emOferta} </div> 
    </br>
    <button onclick="cadastrarRelacao()">Escolher</button>
    `)
}

function fecharDisciplinasVersoesDetalhes(){
    disciplinasVersoesDetalhes.classList.add("hidden")
    disciplinasVersoesDetalhes.innerHTML="<div></div>";
    disciplinasVersoesNomesLista.classList.add("hidden")
    disciplinasVersoesNomesLista.innerHTML="<div></div>";
    disciplinasNomesLista.classList.add("hidden")
    disciplinasNomesLista.innerHTML="<div></div>";
    esmaecimento.classList.add("hidden")
    disciplinaSearchDiv[semestre-1].style.position = "static";
}



async function cadastrarRelacao(){
    const disciplinaVersaoId = disciplinaVersao[0].disciplinaVersaoId;
    const ppcId = ppcIdButton.value;
    
    
    const relacaoCriada = await axios.post(urlCriarRelacao, { disciplinaVersaoId, ppcId, semestre });
   

    


    creditoQuantidadeTotal[semestre-1].innerText= Number(creditoQuantidadeTotal[semestre-1].innerText) + Number(disciplinaVersao[0].creditoQuantidade);

    total[semestre-1].insertAdjacentHTML("beforebegin", `
    <a class="colunaDaTabela" href="/PPCs/" >
        <div class="itemDaColunaDaTabela" id="disciplinaNome"> ${disciplina[0].disciplinaNome} </div>
        <div class="itemDaColunaDaTabela" id="creditoQuantidade">${disciplinaVersao[0].creditoQuantidade} </div>     
    </a>`);
    

}