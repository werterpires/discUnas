const modelEgressosPerfis = require("../models/modelEgressosPerfis");

exports.createPerfil = async (perfilNumero, perfil, ppcId) => {
    
    await modelEgressosPerfis.createPerfil(perfilNumero, perfil, ppcId);
    
}

exports.searchPPCPerfis =  async(ppcId) => {
    const allPPCPerfis =  await modelEgressosPerfis.searchPPCPerfis();
    
    
    return allPPCPerfis;
    
}