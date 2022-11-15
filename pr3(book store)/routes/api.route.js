const express = require('express')
const jwt = require('jsonwebtoken');
const Route = express.Router();
const secretkey = 'node js';

Route.get('/', (req, res) => {
    const token = jwt.sign({ data: 'foobar', user_id: 1, email: 'pallav123@gmail.com' }, secretkey, { algorithm: 'HS512', expiresIn: '1h' })
    res.json({ message: 'this is my message.', token: token })
})

Route.get('/verify', (req, res) => {
    const token = req.headers.authorization;
    try {
        const jwt_verify = jwt.verify(token, secretkey)
        console.log('token verify', jwt_verify);
        res.json({ message: 'verify email......' })
    } catch (e) {
        console.log("error", e.message)
        res.json({ error: e.message })
    }
})
module.exports = Route;