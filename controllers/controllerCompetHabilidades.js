const modelCompetHabilidades = require("../models/modelCompetHabilidades");

exports.createCompetHabilidade = async (CompetHabilidadeNumero, CompetHabilidade, ppcId) => {
    
    await modelCompetHabilidades.createCompetHabilidade(CompetHabilidadeNumero, CompetHabilidade, ppcId);
    
}

exports.searchPPCCompetHabilidades =  async(ppcId) => {
    const allPPCCompetHabilidades =  await modelCompetHabilidades.searchPPCCompetHabilidades();
    
    
    return allPPCCompetHabilidades;
    
}