const jwt = require('jsonwebtoken')
const {registerValidator, loginValidator} = require('../validators/auth')


// model
const User = require('../models/User');

exports.login_required = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1]
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = user
  }
  else {
    return res.status(401).json({message: "Access Denied!"})
  }
  next()
}

exports.user_permission_mixin = (req, res, next) => {
  if (req.user.role !== 'user' && req.user.role !== 'admin') {
    return res.status(401).json({message: "User Access Denied!"})
  }
  next()
}

exports.admin_permission_mixin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(401).json({message: "Admin Access Denied!"})
  }
  next()
}


exports.signup = (req, res, next) => {
    const { errors, isValid } = registerValidator(req.body)
    if(!isValid){
      return res.status(400).json(errors)
    }
    User.findOne({email: req.body.email}).then(user => {
      if (user) {
        return res.status(400).json({message: "user already exists!"})
      }
      const {firstName, lastName, email, password} = req.body
      var username_ = email => {
        let usrname = email.substring(0, email.lastIndexOf("@"))+parseInt(Math.random().toString())
        return usrname
        }
      const user_ = new User({firstName, lastName, email, password, username: username_(email)})
      user_.save()
      .then(user => {
        return res.status(201).json({message: "User created successfully"})
      }, err => next(err))
      .catch(err=> next(err))
    })
    .catch(err => next(err))
}

// Admin Signup
exports.register = (req, res, next) => {
  const { errors, isValid } = registerValidator(req.body)
    if(!isValid){
      return res.status(400).json(errors)
  }  
  User.findOne({email: req.body.email}).then(user => {
      if (user) {
        return res.status(400).json({message: "user already exists!"})
      }
      const {firstName, lastName, email, password} = req.body
      var username_ = email => {
        let usrname = email.substring(0, email.lastIndexOf("@"))+parseInt(Math.random().toString())
        return usrname
        }
      const user_ = new User({firstName, lastName, email, password, username: username_(email), role: "admin"})
      user_.save()
      .then(user => {
          console.log(user);
        return res.status(201).json({message: "Admin User created successfully"})
      }, err => next(err))
      .catch(err=> next(err))
    })
    .catch(err => next(err))
}

exports.signin = (req, res, next) => {
  const { errors, isValid } = loginValidator(req.body)
    if(!isValid){
      return res.status(400).json(errors)
  }  
  User.findOne({email: req.body.email}).then(user => {
      if (user) {
        if (user.authenticate(req.body.password)) {
          const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET_KEY, { expiresIn: '2h'})
          const { _id, fullname, email, role } = user
          return res.status(200).json({token, user: { _id,fullname, email, role }})
        }
        else {
          return res.status(400).json({ "message" : "invalid password"})
        }
      }
      else {
          return res.status(400).json({message: "Check your email address and password!"})
      }
    }, err => next(err)).catch(err => next(err))
}