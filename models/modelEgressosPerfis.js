const db = require('../database/models');
const { EgressosPerfis } = require('../database/models');


exports.createPerfil = async (perfilNumero, perfil, ppcId) => {
    console.log("na model", perfilNumero, perfil)
    await db.EgressoPerfil.create({
        perfilNumero, perfil, ppcId
    })
};

exports.searchPPCPerfis = async (ppcId) => {
    
    const allPPCPerfis = await db.EgressoPerfil.findAll({
        where: {ppcId},
        order: [
            ['perfilNumero', 'ASC']
        ],
        include: [
            'CursoPlanopedagogico'
        ]   
    });
    
    
    return allPPCPerfis;
    

}

