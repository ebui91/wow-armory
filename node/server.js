const express = require('express');
const axios = require('axios');
const { json } = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Initialize Express Server
const app = express();
const port = process.env.PORT || 3001;

// Express serves static files for production build. 
app.use(express.static(`${__dirname}/../build`));

// Middlewares
app.use(json());
app.use(cors());

// Endpoints
console.log('ENV: ', process.env.PORT);

app.get("/api/test", (req, res, next) => {
    axios
      .get("https://us.api.battle.net/wow/character/Mal'Ganis/Illania?fields=stats&locale=en_US&apikey=57q7cmw3nv6j8exczpefs9pzm4fybw4w")
      .then(response => res.status(200).json(response.data));
});

app.get("/api/armory", (req, res, next) => {
    axios
      .get("https://us.api.battle.net/wow/character/Mal'Ganis/Illania?fields=items&locale=en_US&apikey=57q7cmw3nv6j8exczpefs9pzm4fybw4w")
      .then(response => res.status(200).json(response.data.items));
});

app.get("/api/item/:id", (req, res, next) => {
    axios
      .get(`https://us.api.battle.net/wow/item/${req.params.id}?locale=en_US&apikey=57q7cmw3nv6j8exczpefs9pzm4fybw4w`)
      .then(response => res.status(200).json(response.data));
});

// Server Listening
app.listen(port, () => console.log(`Server is listening on port: ${ port }.`));


/* 
TO DO:
- why the fuck is Express not reading my .env file??
- convert to GraphQL
*/