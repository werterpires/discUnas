const db = require('../database/models');
const { CursoPlanoPedagogico } = require('../database/models');

exports.createPPC = async (votoAno, inicioDAta, fimData, horaCredito, cursoId) => {
    console.log("log na model", votoAno, inicioDAta, fimData, horaCredito, cursoId)
    await db.CursoPlanoPedagogico.create({
        votoAno, inicioDAta, fimData, horaCredito, cursoId
    })
};

exports.searchPPCs = async () => {
    
    const allPPCs = await db.CursoPlanoPedagogico.findAll({
        order: [
            ['votoAno', 'DSC']
        ]
    });
    
    return allPPCs;
    

}