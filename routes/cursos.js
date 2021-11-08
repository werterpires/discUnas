var express = require('express');
var router = express.Router();
const controllerCursos = require("../controllers/controllerCursos")

router.get('/', async function(req, res, next) {
  
  const allCursos = await controllerCursos.searchCursos();
  
  res.render('cursos', { allCursos });

});

router.get('/creatingcurso', function(req, res, next) {
       
  res.render('createcurso');
  
});

router.post('/createcurso', async function(req, res, next) {
  
  const{nomeCurso, ativo} = req.body;
  

  await controllerCursos.createCurso(nomeCurso, ativo);

    
  res.redirect('/cursos');
});





module.exports = router;
