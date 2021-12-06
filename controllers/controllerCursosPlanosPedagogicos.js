const modelCursosPlanosPedagogicos = require("../models/modelCursosPlanosPedagogicos");

exports.createPPC = async (votoAno, inicioData, fimData, horaCredito, cursoId) => {
    
    const ppcCriado = await modelCursosPlanosPedagogicos.createPPC(votoAno, inicioData, fimData, horaCredito, cursoId);
    
    return ppcCriado
}

exports.searchPPCs =  async() => {
    const allPPCs =  await modelCursosPlanosPedagogicos.searchPPCs();
    
    return allPPCs;
    
}

exports.searchPPC =  async(ppcId) => {
    const ppc =  await modelCursosPlanosPedagogicos.searchPPC(ppcId);
    
       
    let creditosTotal = [0,0,0,0,0,0,0,0,0,0]
    

    for(idx = 0; idx < ppc.RelacaoDisciplinaVersaoPPC.length; idx++){
        creditosTotal[ppc.RelacaoDisciplinaVersaoPPC[idx].semestre - 1] += ppc.RelacaoDisciplinaVersaoPPC[idx].DisciplinaVersao.creditoQuantidade;
       
    }

    ppc.creditosTotal = creditosTotal;

    return ppc;
    
}