var express = require('express');
var router = express.Router();
const controllerCompetHabilidades = require("../controllers/controllerCompetHabilidades")


// router.get('/', async function(req, res, next) {
  
//   const allPerfis = await controllerEgressosPerfis.searchCursos();
  
//   res.render('egressosPerfis', { allperfis });

// });



router.get('/:competHabilidadeId',  async function(req, res, next) {

  const {competHabilidadeId} = req.params
 
  const competHabilidade = await controllerCompetHabilidades.searchCompetHabilidade(competHabilidadeId)
  console.log("impressão", competHabilidade)
  res.render('competHabilidade', { competHabilidade });
    
});



module.exports = router;
