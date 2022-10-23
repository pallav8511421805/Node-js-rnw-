const { GETSTU, CREATESTU, CREATEPOST, EDIT, UPDATES, DELETE } = require('../controllers/stu.controller');
const express = require('express')
const Route = express.Router();
const upload = require('../utils/fileupload');

Route.get('/', GETSTU)
Route.get('/', GETSTUHOME)
Route.get('/create', CREATESTU)

Route.post('/create', upload.single("pname"), CREATEPOST)

Route.get('/edit', EDIT);

Route.post("/edit", upload.single("pname"), UPDATES);

Route.get("/delete", DELETE)

module.exports = Route;