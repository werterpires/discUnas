var express = require('express');
var router = express.Router();
const controllerDisciplinas = require("../controllers/controllerDisciplinas");
const controllerConhecimentoAreas = require("../controllers/controllerConhecimentoAreas");



router.get('/', async function(req, res, next) {
  
  const allDisciplinas = await controllerDisciplinas.searchDisciplinas();
  
  res.render('disciplinas', { allDisciplinas });

});

router.get('/creatingdisciplina', async function(req, res, next) {

  const allconhecimentoAreas = await controllerConhecimentoAreas.searchConhecimentoAreas();
  res.render('createdisciplina', { allconhecimentoAreas });
  
  
});

router.post('/createdisciplina', async function(req, res, next) {
  
  const{disciplinaNome, conhecimentoAreaId} = req.body;
  
  const disciplinaCriada = await controllerDisciplinas.createDisciplina(disciplinaNome, conhecimentoAreaId);

  //const {ppcId} = ppcCriado;
  
  //await controllerEgressosPerfis.createPerfil(perfilNumero, perfil, ppcId)
  //await controllerCompetHabilidades.createCompetHabilidade(competHabilidadeNumero, competHabilidade, ppcId)
  
  res.redirect('/disciplinas');
});

router.get('/:disciplinaId',  async function(req, res, next) {

  const disciplinaId = req.params
  
  const disciplina = await controllerDisciplinas.searchDisciplina(disciplinaId)
  
  res.render('disciplina', { disciplina });
    
});



module.exports = router;
