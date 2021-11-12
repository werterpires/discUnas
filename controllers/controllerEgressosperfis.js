const modelEgressosPerfis = require("../models/modelEgressosPerfis");

exports.createPerfil = async (perfilNumero, perfil, ppcId) => {
    console.log("na controller", perfilNumero, perfil)
    await modelEgressosPerfis.createPerfil(perfilNumero, perfil, ppcId);
    
}

exports.searchPPCPerfis =  async() => {
    const allPPCPerfis =  await modelEgressosPerfis.searchPPCPerfis();
    
    
    return allPPCPerfis;
    
}