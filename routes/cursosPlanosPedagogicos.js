var express = require('express');
var router = express.Router();
const controllerCursosPlanosPedagogicos = require("../controllers/controllerCursosPlanosPedagogicos");
const controllerCursos = require("../controllers/controllerCursos");

router.get('/', async function(req, res, next) {
  
  const allPPCs = await controllerCursosPlanosPedagogicos.searchPPCs();
  
  res.render('CursosPlanosPedagogicos', { allPPCs });

});

router.get('/creatingPPC', async function(req, res, next) {

  const allCursos = await controllerCursos.searchCursos();
  res.render('createPPC', { allCursos });
  
  
});

router.post('/createPPC', async function(req, res, next) {
  
  const{votoAno, inicioDAta, fimData, horaCredito, cursoId} = req.body;
  
  
  await controllerCursosPlanosPedagogicos.createPPC(votoAno, inicioDAta, fimData, horaCredito, cursoId);

    
  res.redirect('/PPCs');
});





module.exports = router;
