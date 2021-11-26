const router = require('express').Router();

const { getCityByPostalCode } = require('../controllers/city.controller.js');

router.post('/', getCityByPostalCode);

module.exports = router;