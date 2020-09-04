const express = require('express')
const productRouter = express.Router()
const slugify = require('slugify')
const Product = require('../models/Product')
const { admin_permission_mixin, login_required } = require('../middleware/auth')
const multer = require('multer')
const shortId = require('shortid')
const path = require('path')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + shortId.generate() + '-' +  file.originalname)
    }
  })
   
//const upload = multer({ storage })
const upload = multer({ storage })


productRouter.route('/')
.post(login_required, admin_permission_mixin, upload.array('productPicture'), (req, res, next) => {
    //res.json({body: req.body, file: req.files})
    const { name, price, quantity, description, category } = req.body
    let productPicture
    if (req.files.length > 0) {
        productPicture = req.files.map(file => ({img: file.filename}))
    }

    const product = new Product({ 
        name, slug: slugify(name), price, quantity, description, productPicture, category
    })

    product.save().then(product => {
        if (product) {
            return res.status(201).json({product})
        }
        else {
            return res.status(400).json({message: "Forbiden!"})
        }
    }, err => next(err)).catch(err => next(err))

})

module.exports = productRouter