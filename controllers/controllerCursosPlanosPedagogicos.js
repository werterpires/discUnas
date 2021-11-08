const modelCursosPlanosPedagogicos = require("../models/modelCursosPlanosPedagogicos");

exports.createPPC = async (votoAno, inicioDAta, fimData, horaCredito, cursoId) => {
   
    await modelCursosPlanosPedagogicos.createPPC(votoAno, inicioDAta, fimData, horaCredito, cursoId);
    
}

exports.searchPPCs =  async() => {
    const allPPCs =  await modelCursosPlanosPedagogicos.searchPPCs();
    
    return allPPCs;
    
}