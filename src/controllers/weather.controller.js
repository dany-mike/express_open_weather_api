const openWeather = require('../services/openWeather.service.js')

const cityController = {
  getCurrentWeatherByCityName: async (req, res) => {
    try {
      const response = await openWeather.get(`/weather?q=${req.params.city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`)
      res.json(response)
    } catch(err) {
        res.json({response: err})
    }
  },
  getHourlyForecastByCityName: async (req, res) => {
    try {
      const response = await openWeather.get(`/forecast?q=${req.params.city}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`)
      res.json(response)
    } catch(err) {
        res.json({response: err})
    }
  },
  getDailyForecastByCityNameAndTime: async (req, res) => {
    try {
      const response = await openWeather.get(`/forecast?q=${req.params.city}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`)
      const formattedResponse = response.list.filter((el) => {
        return el.dt_txt.includes(req.params.time)
      })
      res.json(formattedResponse)
    } catch(err) {
        res.json({response: err})
    }
  }
}

module.exports = cityController;
