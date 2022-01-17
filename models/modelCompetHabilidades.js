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
};

exports.searchCompetHabilidade = async (competHabilidadeId) => {
    
    const competHabilidade = await db.CompetHabilidade.findOne({
        where: {competHabilidadeId},
        order: [
            ['competHabilidadeNumero', 'ASC']
        ],
        include: [
            {
                model: db.CursoPlanoPedagogico, as: "CursoPlanoPedagogico", include:[
                    {model: db.Curso, as: "Curso"}
                ]
            }, 
            {
                model: db.CursoPlanoPedagogicoDisciplinaVersao, as: "CursoPlanoPedagogicoDisciplinaVersao", include:[
                    {
                        model: db.DisciplinaVersao, as: "DisciplinaVersao", include:[
                            {model: db.Disciplina, as: "Disciplina"}
                        ]
                    }
                ]
            }
        ]   
    });
    
    
    
    return competHabilidade;
    

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

