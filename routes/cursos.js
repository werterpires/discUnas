var express = require('express');
var router = express.Router();
const controllerCursos = require("../controllers/controllerCursos")
const controllerCursosPlanosPedagogicos = require("../controllers/controllerCursosPlanosPedagogicos");

router.get('/', async function(req, res, next) {
  
  const allCursos = await controllerCursos.searchCursos();
  
  res.render('cursos', { allCursos });

});

router.get('/creatingcurso', async function(req, res, next) {

  const allPPCs = await controllerCursosPlanosPedagogicos.searchPPCs();     
  
  res.render('createcurso', {allPPCs});
  
  
});

router.post('/createcurso', async function(req, res, next) {
  
  const{ cursoNome, ativo, ppcAtual } = req.body;
  
  

  await controllerCursos.createCurso(cursoNome, ativo, ppcAtual);

    
  res.redirect('/cursos');
});





module.exports = router;
