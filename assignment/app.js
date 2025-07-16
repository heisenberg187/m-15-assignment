const express = require("express");
const app = express();
const port = 2000;

app.post("/", (req, res) => {
  res.send("I am post request");
})

app.get("/", (req, res) => {
    res.send("I am get request");
})


app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);

});
