const db = require('../database/models');
const { ConhecimentoArea } = require('../database/models');
const { Disciplina } = require('../database/models');

exports.createConhecimentoArea = (conhecimentoArea) => {
   
   db.ConhecimentoArea.create({
        conhecimentoArea
    })
};

exports.searchConhecimentoAreas = async () => {
    
    const allConhecimentoAreas = await db.ConhecimentoArea.findAll({
        order: [
            ['conhecimentoArea', 'ASC']
        ]
    });
    
    return allConhecimentoAreas;
}

exports.searchConhecimentoArea = async (conhecimentoAreaId) => {
    
    const conhecimentoArea = await db.ConhecimentoArea.findOne({
        where: conhecimentoAreaId,
        include:[
            'Disciplina'
        ],
        order: [
            [Disciplina, 'disciplinaNome', 'ASC']
        ]        
    });
       
    return conhecimentoArea;
}