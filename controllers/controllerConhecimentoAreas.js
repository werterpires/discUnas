const modelConhecimentoAreas = require("../models/modelConhecimentoAreas");

exports.createConhecimentoArea =  (conhecimentoArea) => { 
   
    modelConhecimentoAreas.createConhecimentoArea(conhecimentoArea)
    return conhecimentoArea
}

exports.searchConhecimentoAreas =  () => {
    const allConhecimentoAreas =  modelConhecimentoAreas.searchConhecimentoAreas();
    
    return allConhecimentoAreas;
    
}

exports.searchConhecimentoArea =  (conhecimentoAreaId) => {
    
    conhecimentoAreaId.conhecimentoAreaId = Number(conhecimentoAreaId.conhecimentoAreaId);
    
    const conhecimentoArea =  modelConhecimentoAreas.searchConhecimentoArea(conhecimentoAreaId);
    
    return conhecimentoArea
    
}