var express = require('express');
var router = express.Router();
const controllerEgressosPerfis = require("../controllers/controllerEgressosPerfis")


// router.get('/', async function(req, res, next) {
  
//   const allPerfis = await controllerEgressosPerfis.searchCursos();
  
//   res.render('egressosPerfis', { allperfis });

// });



router.get('/:perfilId',  async function(req, res, next) {

  const {perfilId} = req.params

 
  
  const perfil = await controllerEgressosPerfis.searchPerfil(perfilId)
  
  res.render('perfil', { perfil });
    
});



module.exports = router;
