const openWeather = require('../services/openWeather.service.js')

const weatherController = {
  getCurrentWeatherByPostalCode: async (req, res) => {
    try {
      res.setHeader('Cache-Control', 'public, max-age=86400');
      const response = await openWeather.get(`/weather?zip=${req.params.zip},fr&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`)
      res.json(response)
    } catch(err) {
        res.json({response: err})
    }
  },
  getWeatherForecastByPostalCode: async (req, res) => {
    try {
      res.setHeader('Cache-Control', 'public, max-age=86400');
      const response = await openWeather.get(`/forecast?zip=${req.params.zip}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`)
      res.json(response)
    } catch(err) {
        res.json({response: err})
    }
  },
  getCurrentWeatherByCityName: async (req, res) => {
    try {
      res.setHeader('Cache-Control', 'public, max-age=86400');
      const response = await openWeather.get(`/weather?q=${req.params.city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`)
      res.json(response)
    } catch(err) {
        res.json({response: err})
    }
  },
  getHourlyForecastByCityName: async (req, res) => {
    try {
      res.setHeader('Cache-Control', 'public, max-age=86400');
      const response = await openWeather.get(`/forecast?q=${req.params.city}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`)
      res.json(response)
    } catch(err) {
        res.json({response: err})
    }
  },
  getDailyForecastByCityNameAndTime: async (req, res) => {
    try {
      res.setHeader('Cache-Control', 'public, max-age=86400');
      const response = await openWeather.get(`/forecast?q=${req.params.city}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`)
      const formattedResponse = response.list.filter((el) => {
        return el.dt_txt.includes(req.params.time)
      })
      res.json(formattedResponse)
    } catch(err) {
        res.json({response: err})
    }
  },
  getCurrentWeatherByLatAndLon: async (req, res) => {
    try {
      res.setHeader('Cache-Control', 'public, max-age=86400');
      const response = await openWeather.get(`/weather?lat=${req.params.lat}&lon=${req.params.lon}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`)
      res.json(response)
    } catch(err) {
      res.json({response: err})
    }
  }
}

module.exports = weatherController;
