const express = require('express');
const app = express();
const fs = require('fs');

app.get('/key/:id', (req, res) => {
    console.log(req.params.id);
    fs.writeFileSync('./secret', req.params.id);
    res.end("Pass to deploy");
})

app.listen(80, ()=> console.log("Hosted"));