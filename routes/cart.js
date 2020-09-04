const express = require('express')
const cartRouter = express.Router()
const slugify = require('slugify')
const Cart = require('../models/Cart')
const { user_permission_mixin, login_required } = require('../middleware/auth')


cartRouter.route('/')
.post(login_required, user_permission_mixin, (req, res, next) => {
    Cart.findOne({user: req.user._id}).exec((error, cart) => {
        if (error) return res.status(400).json({error})
        if (cart) {
            const product = req.body.cartItems.product
            const item = cart.cartItems.find(c => c.product == product)
            console.log(item);
            if (item) {
                Cart.findOneAndUpdate({ "user":req.user._id, "cartItems.product": product}, {
                    "$set": {
                        "cartItems.$": {
                            ...req.body.cartItems,
                            quantity: item.quantity += req.body.cartItems.quantity
                        }
                    }
                }, {new: true}).exec((error,cart) => {
                    if (error) return res.status(400).json({error})
                    return res.status(200).json({cart})
                })
            }
            else {
                Cart.findOneAndUpdate({user: req.user._id}, {
                    "$push": {
                        "cartItems": req.body.cartItems
                    }
                }, {new: true}).exec((error, cart) => {
                    if (error) return res.status(400).json({error})
                    return res.status(201).json({cart})
                })
            }
        }
        else {
            const cart = new Cart({
                user: req.user._id,
                cartItems: [req.body.cartItems]
            })
        
            cart.save().then(cart => {
                if (cart) {
                    return res.status(201).json({cart})
                }
            }, err => next(err))
            .catch(err => next(err))
        }
    })
})
module.exports = cartRouter