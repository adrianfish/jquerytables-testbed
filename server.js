var express = require('express');
var app = express();

let rows = 10000, cols = 100;

let columns = [...Array(cols).keys()].map(i => ({title: `Header ${i}`}));
let data = [...Array(rows).keys()].map((row) => [...Array(cols).keys()].map(col => `Data ${row},${col}`));
let all = {columns: columns, data: data};

app.use(express.static("."));
app.get("/data", (req,res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(all));
});
app.listen(3000);
