const express = require('express')
const cors = require("cors");

const PORT = process.env.PORT || 3000

const app = express()
const port = 3000

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: `*`
    })
  );
}

if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: `https://vue-workshop-front.herokuapp.com`
    })
  );
}

app.get('/', (req, res) => {
  res.send('Root endpoint')
})

const citiesRoute = require('./routes/cities.route');

app.use('/cities', citiesRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
