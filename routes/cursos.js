var express = require('express');
var router = express.Router();
const controllerCursos = require("../controllers/controllerCursos")
const controllerCursosPlanosPedagogicos = require("../controllers/controllerCursosPlanosPedagogicos");

router.get('/', async function(req, res, next) {
  
  const allCursos = await controllerCursos.searchCursos();
  
  res.render('cursos', { allCursos });

});

router.get('/creatingcurso',  function(req, res, next) {

  
  
  res.render('createcurso');
  
  
});

router.post('/createcurso', async function(req, res, next) {
  
  const{ cursoNome, ativo, ppcAtual } = req.body;
  
  

  await controllerCursos.createCurso(cursoNome, ativo, ppcAtual);

    
  res.redirect('/cursos');
});

router.get('/:cursoId',  async function(req, res, next) {

  const cursoId = req.params
  
  const curso = await controllerCursos.searchCurso(cursoId)
  
  res.render('curso', { curso });
    
});



module.exports = router;
