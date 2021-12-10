const router = require('express').Router();

const { getWeatherByCityName } = require('../controllers/weather.controller.js');

router.get('/:city', getWeatherByCityName);

module.exports = router;