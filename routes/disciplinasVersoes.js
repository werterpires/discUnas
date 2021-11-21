var express = require('express');
var router = express.Router();
const controllerDisciplinasVersoes = require("../controllers/controllerDisciplinasVersoes");
const controllerDisciplinas = require("../controllers/controllerDisciplinas");


router.get('/', async function(req, res, next) {
  
  const allDisciplinasVersoes = await controllerDisciplinasVersoes.searchdisciplinasVersoes();
  
  res.render('disciplinasVersoes', { allDisciplinasVersoes });

});

router.get('/creatingdisciplinaVersao', async function(req, res, next) {

  const allDisciplinas = await controllerDisciplinas.searchDisciplinas();
  res.render('createdisciplinaVersao', { allDisciplinas });
  
  
});

router.post('/createdisciplinaVersao', async function(req, res, next) {
  
  const{sigla, codigo, disciplinaId, creditoQuantidade, ementa, basicBibliografia, compBibliografia, observacao, emOferta, produzido} = req.body;

  

  const disciplinaVersaoCriada = await controllerDisciplinasVersoes.createDisciplinaVersao(sigla, codigo, disciplinaId, creditoQuantidade, ementa, basicBibliografia, compBibliografia, observacao, emOferta, produzido);

  res.redirect('/disciplinasVersoes');
});

router.get('/:disciplinaVersaoId',  async function(req, res, next) {

  const disciplinaVersaoId = req.params
  
  const disciplinaVersao = await controllerDisciplinasVersoes.searchdisciplinaVersao(disciplinaVersaoId)
  
  res.render('disciplinaVersao', { disciplinaVersao });
    
});

module.exports = router;
