const db = require('../database/models');
const { Curso } = require('../database/models');

exports.createCurso = async (nomeCurso, ativo) => {
    
    await db.Curso.create({
        nomeCurso, ativo
    })
};

exports.searchCursos = async () => {
    
    const allCursos = await db.Curso.findAll({
        order: [
            ['nomeCurso', 'ASC']
        ]
    });
    
    return allCursos;
    

}