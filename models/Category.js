const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categorySchema = new Schema({
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
    parentId: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Category', categorySchema)