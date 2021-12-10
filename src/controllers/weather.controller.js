const openWeather = require('../services/openWeather.service.js')

const cityController = {
  getWeatherByCityName: async (req, res) => {
    try {
      const response = await openWeather.get(`/weather?q=${req.params.city}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
      res.json(response)
    } catch(err) {
        res.json({response: err})
    }
  }
}

module.exports = cityController;

