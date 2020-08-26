var express = require('express');
var userRouter = express.Router();

// model
const User = require('../models/User')

// endpoint: /users/signup
userRouter.post('/signup', (req, res, next) => {
  User.findOne({email: req.body.email}).then(user => {
    if (user) {
      return res.status(400).json({message: "user already exists!"})
    }
    const {firstName, lastName, email, password} = req.body
    var username_ = email => {
      username = email.substring(0, email.lastIndexOf("@"))+parseInt(Math.random().toString())
      return username
      }
    const user_ = new User({firstName, lastName, email, password, username: username_(email)})
    user_.save()
    .then(user => {
      return res.status(201).json({message: "User created successfully"})
    }, err => next(err))
    .catch(err=> next(err))
  })
  .catch(err => next(err))
})
userRouter.post('/login', (req, res, next) => {
  
})
module.exports = userRouter;
