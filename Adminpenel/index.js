const express = require('express');
const Body = require('body-parser');
const app = express();
const port = 5000;
const AppRouter = require('./Router');
const path = require('path');

app.set('view engine', 'ejs')

app.set('views', [path.join(__dirname, '/src/Dashbroad/views'),
path.join(__dirname, '/src/profile/views'),
path.join(__dirname, '/src/views'),])
app.use(express.static('public'))
app.use(AppRouter)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
