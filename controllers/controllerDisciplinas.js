const modelDisciplinas = require("../models/modelDisciplinas");

exports.createDisciplina = async (disciplinaNome, conhecimentoAreaId) => {
    
    const disciplinaCriada = await modelDisciplinas.createDisciplina(disciplinaNome, conhecimentoAreaId);
    
    return disciplinaCriada
}

exports.searchDisciplinas =  async() => {
    const allDisciplinas =  await modelDisciplinas.searchDisciplinas();
    
    return allDisciplinas;
    
}

exports.searchDisciplina =  async(disciplinaId) => {
    const disciplina =  await modelDisciplinas.searchDisciplina(disciplinaId);
    
    return disciplina;
    
}