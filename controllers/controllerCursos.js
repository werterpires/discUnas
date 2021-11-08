const modelCursos = require("../models/modelCursos");

exports.createCurso = async (nomeCurso, ativo) => {
    await modelCursos.createCurso(nomeCurso, ativo);
    return
}

exports.searchCursos =  async() => {
    const allCursos =  await modelCursos.searchCursos();
    
    return allCursos;
    
}