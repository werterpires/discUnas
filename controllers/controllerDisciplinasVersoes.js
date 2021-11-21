const modelDisciplinas = require("../models/modelDisciplinas");
const modelDisciplinasVersoes = require("../models/modelDisciplinasVersoes");

exports.createDisciplinaVersao = async (sigla, codigo, disciplinaId, creditoQuantidade, ementa, basicBibliografia, compBibliografia, observacao, emOferta, produzido) => {

    disciplinaId = Number(disciplinaId);

    const disciplina =  await modelDisciplinas.searchDisciplina(disciplinaId);

       
    const { disciplinaNome } = disciplina;
    
    const pontosDecortes = Math.round(disciplinaNome.length/6);

    const nomeBase = ["A", "L", "U", "N", "A"];

    for(idx = 0; idx < 5; idx++){
        if (disciplinaNome[idx*pontosDecortes] != undefined){
            nomeBase[idx] = disciplinaNome[idx*pontosDecortes]
        }
    } 

    let versoesExistentesQuant = 1;

    const versoesExistentes = await modelDisciplinasVersoes.searchDisciplinasVersoesPorDisciplina(disciplinaId);

    console.log("Tamanho:", versoesExistentes)
    
    if(versoesExistentes !== null){
        versoesExistentesQuant = versoesExistentes.length+1
    }

    const disciplinaVersaoNome = disciplinaId+nomeBase[0]+nomeBase[1]+nomeBase[2]+nomeBase[3]+creditoQuantidade+nomeBase[4]+versoesExistentesQuant
    
    const disciplinaVersao = await modelDisciplinasVersoes.createDisciplinaVersao(disciplinaVersaoNome, sigla, codigo, disciplinaId, creditoQuantidade, ementa, basicBibliografia, compBibliografia, observacao, emOferta, produzido);
    
    return disciplinaVersao
}

exports.searchdisciplinasVersoes =  async() => {
    const allDisciplinasVersoes =  await modelDisciplinasVersoes.searchDisciplinasVersoes();
    
    return allDisciplinasVersoes;
    
}

exports.searchdisciplinaVersao =  async(disciplinaVersaoId) => {
    const disciplinaVersao =  await modelDisciplinasVersoes.searchDisciplinaVersao(disciplinaVersaoId);
    
    return disciplinaVersao;
    
}