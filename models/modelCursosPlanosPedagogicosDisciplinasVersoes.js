const db = require('../database/models');
const { CursoPlanoPedagogicoDisciplinaVersao } = require('../database/models');
//const { Curso } = require('../database/models');


exports.createRelacaoDisciplinaVercaoPPC = async (disciplinaVersaoId, ppcId, semestre) => {
    
    const relacaoCriada = await db.CursoPlanoPedagogicoDisciplinaVersao.create({
        disciplinaVersaoId, ppcId, semestre
    })

    return relacaoCriada

};

exports.searchRelacoesDisciplinasVercoesPPC = async () => {
    
    const allRelacoes = await db.CursoPlanoPedagogicoDisciplinaVersao.findAll({
        include: [
            'DisciplinaVersao', 'CursoPlanoPedagógico'
        ]
        
    });    
    
    return allRelacoes;
    
}

// exports.searchRelacaoDisciplinaVercaoPPC = async (ppcId) => {
    
//     const ppc = await db.CursoPlanoPedagogicoDisciplinaVersao.findOne({
//         where: ppcId,
//         include: [
//             'Curso', 'CompetHabilidade', 'EgressoPerfil'
//         ],   
                
//     });    
    
//     return ppc;
    
// }
