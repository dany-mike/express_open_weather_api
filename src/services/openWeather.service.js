const axios = require('axios');

const openWeather = axios.create({
    baseURL: process.env.OPEN_WEATHER_BASE_URL
});

function get(path) {
    return openWeather.get(path).then((response) => response.data).catch((error) => error.message);
}

module.exports = { get }