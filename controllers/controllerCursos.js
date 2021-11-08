const modelCursos = require("../models/modelCursos");

exports.createCurso =  (nomeCurso, ativo) => 
    modelCursos.createCurso(nomeCurso, ativo)

exports.searchCursos =  async() => {
    const allCursos =  await modelCursos.searchCursos();
    
    return allCursos;
    
}