const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    offer: {
        type: Number,
    },
    productPicture: [
        {
            img: {
                type: String
            }
        }
    ],
    reviews : [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            review: {
                type: String
            }
        }
    ],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)