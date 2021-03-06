const db = require('../database/models');
const { DisciplinaVersao } = require('../database/models');
const { Disciplina } = require('../database/models');


exports.createDisciplinaVersao = async (disciplinaVersaoNome, sigla, codigo, disciplinaId, creditoQuantidade, ementa, basicBibliografia, compBibliografia, observacao, emOferta, produzido) => {
    
    

    const disciplinaVersaoCriada = await db.DisciplinaVersao.create({
        disciplinaVersaoNome, sigla, codigo, disciplinaId, creditoQuantidade, ementa, basicBibliografia, compBibliografia, observacao, emOferta, produzido
    })

    return disciplinaVersaoCriada

};

exports.searchDisciplinasVersoes = async () => {
    
    const allDisciplinasVersoes = await db.DisciplinaVersao.findAll({
        include: [
            'Disciplina'
        ],   
        order: [
            [Disciplina, 'disciplinaNome', 'ASC']
        ]
        
    });    
    
    return allDisciplinasVersoes;
    
}

exports.searchDisciplinaVersao = async (disciplinaVersaoId) => {
    
    const disciplinaVersao = await db.DisciplinaVersao.findOne({
        where: disciplinaVersaoId,
        include: [
            'Disciplina', {
                model: db.CursoPlanoPedagogicoDisciplinaVersao, as: "RelacaoDisciplinaVersaoPPC", include: [
                    {
                       model: db.EgressoPerfil, as: "EgressoPerfil" 
                    },
                    {
                        model: db.CompetHabilidade, as: "CompetHabilidade" 
                     },
                    {
                        model: db.CursoPlanoPedagogico, as: "CursoPlanoPedagogico", include: [
                            {model: db.Curso, as: "Curso"}
                        ] 
                     }
                ] 
            }
        ],   
                
    });    
    
    
    
    return disciplinaVersao;
    
}

exports.searchDisciplinasVersoesPorDisciplina = async (disciplinaId) => {
    
    const disciplinasVersoes = await db.DisciplinaVersao.findAll({
        
        where: {
            disciplinaId: disciplinaId 
        }
                      
    });    
    
    
    return disciplinasVersoes;
    
}