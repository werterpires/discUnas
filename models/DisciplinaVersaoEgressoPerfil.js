const db = require('../database/models');
const { DisciplinaVersaoEgressoperfil } = require('../database/models');



exports.creatediscVersaoPerfil = async (ppcDisciplinaVersaoId, egressoPerfilId) => {
    
    const discVersaoPerfilCriado = await db.DisciplinaVersaoEgressoperfil.create({
        ppcDisciplinaVersaoId, egressoPerfilId
    })

    return discVersaoPerfilCriado

};

exports.searchDiscVersaoPerfis = async () => {
    
    const allDiscVersaoPerfis = await db.DisciplinaVersaoEgressoperfil.findAll({
        
        Where: ppcDisciplinaVersaoId,
        include: [
            'Curso'
        ],   
        order: [
            [Curso, 'cursoNome', 'ASC'], ['votoAno', "DESC"]
        ]
        
    });    
    
    return allPPCs;
    
}

exports.searchPPC = async (ppcId) => {
    
    const ppc = await db.CursoPlanoPedagogico.findOne({
        where: ppcId,
        include: [
            'Curso', 'CompetHabilidade', 'EgressoPerfil', {model: db.CursoPlanoPedagogicoDisciplinaVersao, as: "RelacaoDisciplinaVersaoPPC", include:[
                {model: db.DisciplinaVersao, as: "DisciplinaVersao", include: [
                    {model: db.Disciplina}
                ]}
            ]}
        ]
                    
                
    });    
    
    ppc.dataValues.RelacaoDisciplinaVersaoPPC.forEach(relacao => {
        
    })
    
    return ppc;
    
}
