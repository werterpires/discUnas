const db = require('../database/models');
const { Disciplinas } = require('../database/models');


exports.createDisciplina = async (disciplinaNome, conhecimentoAreaId) => {
    
    const disciplinaCriada = await db.Disciplina.create({
        disciplinaNome, conhecimentoAreaId
    })

    return disciplinaCriada

};

exports.searchDisciplinas = async () => {
    
    const allDisciplinas = await db.Disciplina.findAll({
        include: [
            'ConhecimentoArea'
        ],   
        order: [
            ["disciplinaNome"]
        ]
        
    });    
    
    return allDisciplinas;
    
}

exports.searchDisciplina = async (disciplinaId) => {
    
    const disciplina = await db.Disciplina.findOne({
        where: disciplinaId,
        include: [
            'conhecimentoArea'
        ],   
                
    });    
    
    return disciplina;
    
}
