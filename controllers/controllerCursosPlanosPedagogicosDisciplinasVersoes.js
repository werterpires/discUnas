const modelCursosPlanosPedagogicosDisciplinasVersoes = require("../models/modelCursosPlanosPedagogicosDisciplinasVersoes");

exports.createRelacaoDisciplinaVersaoPPC = async (disciplinaVersaoId, ppcId, semestre) => {
    
    const relacaoCriada = await modelCursosPlanosPedagogicosDisciplinasVersoes.createRelacaoDisciplinaVercaoPPC(disciplinaVersaoId, ppcId, semestre);
    
    return relacaoCriada
}

exports.searchRelacaoDisciplinasPPCs =  async() => {
    const allRelacoes =  await modelCursosPlanosPedagogicosDisciplinasVersoes.searchRelacaoDisciplinasPPCs();
    
    return allRelacoes;
    
}

// exports.searchPPC =  async(ppcId) => {
//     const ppc =  await modelCursosPlanosPedagogicosDisciplinasVersoes.searchPPC(ppcId);
    
//     return ppc;
    
// }