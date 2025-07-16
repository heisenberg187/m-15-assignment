const express = require('express');
const app = express();
const port = 3001;


app.use(express.json());

// GET request
app.get('/test', (req, res) => {
  res.send('I am get request.');
});

// POST request
app.post('/test1', (req, res) => {
  res.send('I am post request.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
