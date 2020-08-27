var express = require('express');

var userRouter = express.Router();

const { login_required, signup, signin } = require('../middleware/auth');

// endpoint: /users/signup
userRouter.post('/signup', signup)

// enpoint: /users/login
userRouter.post('/login', signin)


module.exports = userRouter;
