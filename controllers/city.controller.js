const fs = require('fs');

const cityController = {
  getCityByPostalCode: async (req, res) => {
    const postalCodesData = './data/postal-codes.json'

    await fs.readFile(postalCodesData, 'utf-8', (err, postalCodes) => {
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

