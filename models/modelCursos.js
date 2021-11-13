const db = require('../database/models');
const { Curso } = require('../database/models');

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
    
    console.log(allCursos)

    return allCursos;
}

exports.searchCurso = async (cursoId) => {
    
    const curso = await db.Curso.findOne({
        where: cursoId,
        include:[
            'CursoPlanoPedagogico'
        ]        
    });

    

    
    return curso;
}