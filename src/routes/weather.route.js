const router = require('express').Router();

const { getCurrentWeatherByCityName, getHourlyForecastByCityName, getDailyForecastByCityNameAndTime, getCurrentWeatherByPostalCode, getWeatherForecastByPostalCode } = require('../controllers/weather.controller.js');

router.get('/current/:city', getCurrentWeatherByCityName);

router.get('/forecast/:city', getHourlyForecastByCityName);

router.get('/forecast/daily/:city/:time', getDailyForecastByCityNameAndTime);

router.get('/current-zip/:zip', getCurrentWeatherByPostalCode)

router.get('/forecast-zip/:zip', getWeatherForecastByPostalCode)

module.exports = router;