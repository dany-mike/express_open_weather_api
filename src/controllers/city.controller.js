const path = require("path");
const fs = require('fs');

const cityController = {
  getCityByPostalCode: async (req, res) => {
    await fs.readFile(path.resolve('src', 'data', 'postal-codes.json'), 'utf-8', (err, postalCodes) => {
      if (err) {
        throw err;
      }
      const rawPostalCodes = JSON.parse(postalCodes)

      const postalCode = req.body.postalCode

      !rawPostalCodes[postalCode] ? res.json([]) : res.json(rawPostalCodes[postalCode])
    });

  }
}

module.exports = cityController;

