/* eslint-disable semi */
const express = require('express');
const bodyParser = require('body-parser');

const { rando, randomD, randomRolls } = require('./utils');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ** Proxy from React can't get at '/' for some reason?
// Apparently this is expected behavior... **
// Test this route with: localhost:4000/
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// A simple route that returns a JSON object
// Test this route with:
app.get('/about', (req, res) => {
  // This Object is converted to JSON and returned.
  res.json({ about: 'this service generates a random numbers.' });
});

// Random number route
// Test this route with: http://localhost:4000/random?n=99
// Where n=99 sets the range of the random number returned
// Random number will be rounded to a whole number before returned
app.get('/random', (req, res) => {
  const { n } = req.query;
  const value = rando(n);
  res.json({ value });
});

app.get('/random/randomD', (req, res) => {
  const { n } = req.query;
  const value = randomD(n);
  res.json({ value });
});

app.get('/random/randomRolls', (req, res) => {
  const { num, die } = req.query;

  const value = randomRolls(num, die);
  res.json({ value });
});


const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))