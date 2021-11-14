const db = require('../database/models');
const { EgressosPerfis } = require('../database/models');


exports.createPerfil = async (perfilNumero, perfil, ppcId) => {

    if(Array.isArray(perfilNumero)){
        for (idx=0; idx < perfil.length; idx++) {
            await db.EgressoPerfil.create({
                perfilNumero: perfilNumero[idx], perfil: perfil[idx], ppcId
            })
        }
    }else{
        await db.EgressoPerfil.create({
            perfilNumero, perfil, ppcId
        })
    }
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

