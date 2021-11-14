const db = require('../database/models');
const { CompetHabilidade } = require('../database/models');


exports.createCompetHabilidade = async (competHabilidadeNumero, competHabilidade, ppcId) => {
   
    if(Array.isArray(competHabilidadeNumero)){
        for(idx=0; idx < competHabilidade.length; idx++){
            await db.CompetHabilidade.create({
                competHabilidadeNumero: competHabilidadeNumero[idx], competHabilidade: competHabilidade[idx], ppcId
            })
        }
    }else{
        await db.CompetHabilidade.create({
            competHabilidadeNumero, CompetHabilidade, ppcId
        })
    }
}

exports.searchPPCCompetHabilidades = async (ppcId) => {
    
    const allPPCCompetHabilidades = await db.CompetHabilidade.findAll({
        where: {ppcId},
        order: [
            ['competHabilidadeNumero', 'ASC']
        ],
        include: [
            'CursoPlanopedagogico'
        ]   
    });
    
    
    return allPPCCompetHabilidades;
    

}

