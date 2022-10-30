const { GETSTU, CREATESTU, CREATEPOST, EDIT, UPDATES, DELETE } = require('../controllers/book.controller');
const express = require('express')
const Route = express.Router();
const upload = require('../utils/fileupload');

Route.get('/', GETSTU)

Route.get('/create', CREATESTU)

Route.post('/create', upload.single("pname"), CREATEPOST)

Route.get('/edit/:id', EDIT);

Route.post("/edit", upload.single("pname"), UPDATES);

Route.get("/delete/:id", DELETE)

module.exports = Route;