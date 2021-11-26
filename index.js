const express = require('express')
const cors = require("cors");

const PORT = process.env.PORT || 3000

const app = express()
const port = 3000

app.use(express.json());
app.use(cors({
  origin: `*`
}));

app.get('/', (req, res) => {
  res.send('Root endpoint')
})

const citiesRoute = require('./routes/cities.route');

app.use('/cities', citiesRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
