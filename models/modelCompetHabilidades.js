const db = require('../database/models');
const { CompetHabilidade } = require('../database/models');


exports.createCompetHabilidade = async (CompetHabilidadeId, CompetHabilidadeNumero, CompetHabilidade, ppcId) => {
    
    await db.CompetHabilidade.create({
        CompetHabilidadeId, CompetHabilidadeNumero, CompetHabilidade, ppcId
    })
};

exports.searchPPCCompetHabilidades = async (ppcId) => {
    
    const allPPCCompetHabilidades = await db.CompetHabilidade.findAll({
        where: {ppcId},
        order: [
            ['CompetHabilidadeNumero', 'ASC']
        ],
        include: [
            'CursoPlanopedagogico'
        ]   
    });
    
    
    return allPPCCompetHabilidades;
    

}

