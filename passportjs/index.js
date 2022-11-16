const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

mongoose.connect('mongodb://localhost:27017/passport');

app.listen(port, () => {
    console.log(`server start on this server : ${port}`)
})