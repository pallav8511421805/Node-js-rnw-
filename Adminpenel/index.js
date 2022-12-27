const express = require('express');
const Body = require('body-parser');
const app = express();
const port = 5000;


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
