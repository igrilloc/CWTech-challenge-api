const { Router } = require('express');

// Importe de rutas:
const getText = require('./input.routes');


const router = Router();


// Configuracion de rutas:
router.use('/iecho', getText);




module.exports = router;