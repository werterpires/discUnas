const db = require('../database/models');
const { CursoPlanoPedagogico } = require('../database/models');
const { Curso } = require('../database/models');


exports.createPPC = async (votoAno, inicioData, fimData, horaCredito, cursoId) => {
    
    const ppcCriado = await db.CursoPlanoPedagogico.create({
        votoAno, inicioData, fimData, horaCredito, cursoId
    })

    return ppcCriado

};

exports.searchPPCs = async () => {
    
    const allPPCs = await db.CursoPlanoPedagogico.findAll({
        include: [
            'Curso'
        ],   
        order: [
            [Curso, 'cursoNome', 'ASC'], ['votoAno', "DESC"]
        ]
        
    });
    
    
    return allPPCs;
    

}

