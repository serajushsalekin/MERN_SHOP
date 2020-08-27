var express = require('express');

var adminRouter = express.Router();

const { signin, register } = require('../middleware/auth');

// endpoint: /admin/register
adminRouter.post('/register', register)

// enpoint: /admin/login
adminRouter.post('/login', signin)


module.exports = adminRouter
