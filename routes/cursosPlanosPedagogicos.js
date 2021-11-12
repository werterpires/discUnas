var express = require('express');
var router = express.Router();
const controllerCursosPlanosPedagogicos = require("../controllers/controllerCursosPlanosPedagogicos");
const controllerCursos = require("../controllers/controllerCursos");
const controllerEgressosPerfis = require("../controllers/controllerEgressosPerfis");


router.get('/', async function(req, res, next) {
  
  const allPPCs = await controllerCursosPlanosPedagogicos.searchPPCs();
  
  res.render('PPCs', { allPPCs });

});

router.get('/creatingppc', async function(req, res, next) {

  const allCursos = await controllerCursos.searchCursos();
  res.render('createppc', { allCursos });
  
  
});

router.post('/createppc', async function(req, res, next) {
  
  const{votoAno, inicioData, fimData, horaCredito, cursoId, perfilNumero, perfil} = req.body;
  
  const ppcCriado = await controllerCursosPlanosPedagogicos.createPPC(votoAno, inicioData, fimData, horaCredito, cursoId);

  const {ppcId} = ppcCriado;
  console.log("na model", perfilNumero, perfil)
  await controllerEgressosPerfis.createPerfil(perfilNumero, perfil, ppcId)
  
  res.redirect('/PPCs');
});





module.exports = router;
