const modelCursos = require("../models/modelCursos");

exports.createCurso =  (cursoNome, ativo, ppcAtual) => { 
   
    modelCursos.createCurso(cursoNome, ativo, ppcAtual)
    return cursoNome
}

exports.searchCursos =  () => {
    const allCursos =  modelCursos.searchCursos();

    return allCursos;

    }

exports.searchCurso =  (cursoId) => {
    
    cursoId.cursoId = Number(cursoId.cursoId);
    
    
    const curso =  modelCursos.searchCurso(cursoId);
    
    return curso
    
}