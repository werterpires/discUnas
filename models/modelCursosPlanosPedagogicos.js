const db = require('../database/models');
const { CursoPlanoPedagogico } = require('../database/models');


exports.createPPC = async (votoAno, inicioData, fimData, horaCredito, cursoId) => {
    
    await db.CursoPlanoPedagogico.create({
        votoAno, inicioData, fimData, horaCredito, cursoId
    })
};

exports.searchPPCs = async () => {
    
    const allPPCs = await db.CursoPlanoPedagogico.findAll({
        order: [
            ['votoAno', 'ASC']
        ],
        include: [
            'Curso'
        ]   
    });
    
    
    return allPPCs;
    

}

