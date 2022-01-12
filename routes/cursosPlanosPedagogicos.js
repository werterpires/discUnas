var express = require('express');
var router = express.Router();
const controllerCursosPlanosPedagogicos = require("../controllers/controllerCursosPlanosPedagogicos");
const controllerCursos = require("../controllers/controllerCursos");
const controllerEgressosPerfis = require("../controllers/controllerEgressosPerfis");
const controllerCompetHabilidades = require("../controllers/controllerCompetHabilidades");
const controllerDisciplinas = require("../controllers/controllerDisciplinas")

router.get('/', async function(req, res, next) {
  
  const allPPCs = await controllerCursosPlanosPedagogicos.searchPPCs();
  
  res.render('PPCs', { allPPCs });

});

router.get('/creatingppc', async function(req, res, next) {

  const allCursos = await controllerCursos.searchCursos();
  res.render('createppc', { allCursos });
  
  
});

router.post('/createppc', async function(req, res, next) {
  
  const{votoAno, inicioData, fimData, horaCredito, cursoId, perfilNumero, perfil, competHabilidadeNumero, competHabilidade} = req.body;
  
  const ppcCriado = await controllerCursosPlanosPedagogicos.createPPC(votoAno, inicioData, fimData, horaCredito, cursoId);

  const {ppcId} = ppcCriado;
  
  await controllerEgressosPerfis.createPerfil(perfilNumero, perfil, ppcId)
  await controllerCompetHabilidades.createCompetHabilidade(competHabilidadeNumero, competHabilidade, ppcId)
  
  res.redirect('/PPCs');
});

router.get('/:ppcId',  async function(req, res, next) {

  const ppcId = req.params
  
  const ppc = await controllerCursosPlanosPedagogicos.searchPPC(ppcId)
  
  const disciplinas = await controllerDisciplinas.searchDisciplinas()
  
  res.render('PPC', { ppc, disciplinas });
    
});


module.exports = router;
