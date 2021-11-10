const modelCursosPlanosPedagogicos = require("../models/modelCursosPlanosPedagogicos");

exports.createPPC = async (votoAno, inicioData, fimData, horaCredito, cursoId) => {
    
    await modelCursosPlanosPedagogicos.createPPC(votoAno, inicioData, fimData, horaCredito, cursoId);
    
}

exports.searchPPCs =  async() => {
    const allPPCs =  await modelCursosPlanosPedagogicos.searchPPCs();
    
    allPPCs.forEach(ppc => {
        
        
    });

    return allPPCs;
    
}