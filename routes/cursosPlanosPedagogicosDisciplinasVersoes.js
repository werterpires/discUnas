var express = require('express');
var router = express.Router();
const controllerCursosPlanosPedagogicosDisciplinasVersoes = require("../controllers/controllerCursosPlanosPedagogicosDisciplinasVersoes");

router.get('/', async function(req, res, next) {
  
  const allRelacoesDisciplinasVersoesPPCs = await controllerCursosPlanosPedagogicosDisciplinasVersoes.searchRelacaoDisciplinasPPCs();
  
  res.render('disciplinasVersoesPPCs', { allRelacoesDisciplinasVersoesPPCs });

});



router.post('/createrelacaoDisciplinasVersoesPPCs', async function(req, res, next) {
  
  const{disciplinaVersaoId, ppcId, semestre } = req.body;
  
  const relacaoCriada = await controllerCursosPlanosPedagogicosDisciplinasVersoes.createRelacaoDisciplinaVersaoPPC(disciplinaVersaoId, ppcId, semestre);
  
});



module.exports = router;
