const express = require('express');

const app = express();

app.get('/ping', (req, res)=>{
    res.status(200)
    res.json({"pong":true})
})

const port = process.env.PORT || 5200;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})