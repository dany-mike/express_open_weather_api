const axios = require('axios');

const cityController = {
  getWeatherByCityName: async (req, res) => {
    // axios.get('')
    res.json({response: `Weather in ${req.params.city}`})
  }
}

module.exports = cityController;

