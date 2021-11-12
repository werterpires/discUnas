const modelCompetHabilidades = require("../models/modelCompetHabilidades");

exports.createCompetHabilidade = async (CompetHabilidadeId, CompetHabilidadeNumero, CompetHabilidade, ppcId) => {
    
    await modelCompetHabilidades.createCompetHabilidade(CompetHabilidadeId, CompetHabilidadeNumero, CompetHabilidade, ppcId);
    
}

exports.searchPPCCompetHabilidades =  async() => {
    const allPPCCompetHabilidades =  await modelCompetHabilidades.searchPPCCompetHabilidades();
    
    
    return allPPCCompetHabilidades;
    
}