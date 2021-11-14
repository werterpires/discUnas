const db = require('../database/models');
const { Curso } = require('../database/models');
const { CursoPlanoPedagogico } = require('../database/models');

exports.createCurso = (cursoNome, ativo, ppcAtual) => {
   
   db.Curso.create({
        cursoNome, ativo, ppcAtual
    })
};

exports.searchCursos = async () => {
    
    const allCursos = await db.Curso.findAll({
        order: [
            ['cursoNome', 'ASC']
        ]
    });
    
   
    return allCursos;
}

exports.searchCurso = async (cursoId) => {
    
    const curso = await db.Curso.findOne({
        where: cursoId,
        include:[
            'CursoPlanoPedagogico'
        ],
        order: [
            [CursoPlanoPedagogico, 'votoAno', 'DESC']
        ]        
    });

    

    
    return curso;
}