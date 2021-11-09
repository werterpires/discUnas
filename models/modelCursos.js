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
    
    return allCursos;
    

}