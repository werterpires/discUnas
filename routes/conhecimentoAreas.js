var express = require('express');
var router = express.Router();
const controllerConhecimentoAreas = require("../controllers/controllerConhecimentoAreas")


router.get('/', async function(req, res, next) {
  
  const allConhecimentoAreas = await controllerConhecimentoAreas.searchConhecimentoAreas();
  
  res.render('conhecimentoAreas', { allConhecimentoAreas });

});

router.get('/creatingconhecimentoArea',  function(req, res, next) {
 
  res.render('createconhecimentoArea');
   
});

router.post('/createcurso', async function(req, res, next) {
  
  const{ conhecimentoArea } = req.body;
  
  await controllerConhecimentoAreas.createConhecimentoArea(conhecimentoArea);
    
  res.redirect('/conhecimentoAreas');
});

router.get('/:conhecimentoAreaId',  async function(req, res, next) {

  const conhecimentoAreaId = req.params
  
  const conhecimentoArea = await controllerConhecimentoAreas.searchConhecimentoArea(conhecimentoAreaId)
  
  res.render('conhecimentoArea', { conhecimentoArea });
    
});



module.exports = router;
