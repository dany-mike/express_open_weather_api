const router = require('express').Router();

const { getCurrentWeatherByCityName, getHourlyForecastByCityName, getDailyForecastByCityNameAndTime } = require('../controllers/weather.controller.js');

router.get('/current/:city', getCurrentWeatherByCityName);

router.get('/forecast/:city', getHourlyForecastByCityName);

router.get('/forecast/daily/:city/:time', getDailyForecastByCityNameAndTime);

module.exports = router;