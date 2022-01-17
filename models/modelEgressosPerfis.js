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

exports.searchPerfil = async (perfilId) => {
    
    const perfil = await db.EgressoPerfil.findOne({
        where: {perfilId},
        order: [
            ['perfilNumero', 'ASC']
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
    
    console.log(perfil.CursoPlanoPedagogicoDisciplinaVersao[10].DisciplinaVersao)
    
    return perfil;
    

}

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

