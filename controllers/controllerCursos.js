const modelCursos = require("../models/modelCursos");

exports.createCurso =  (cursoNome, ativo, ppcAtual) => { 
   
    modelCursos.createCurso(cursoNome, ativo, ppcAtual)
    return cursoNome
}

exports.searchCursos =  () => {
    const allCursos =  modelCursos.searchCursos();
    
    return allCursos;
    
}