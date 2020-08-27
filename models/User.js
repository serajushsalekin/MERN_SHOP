const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 30,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 30,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    profilePic: { 
        type: String
    },
    hash_password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default:'user'
    },
    contactNumber: { 
        type: String 
    },
}, {timestamps: true})


userSchema.virtual('password').set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10);
})

userSchema.virtual('fullname').get(function(){
    return `${this.firstName} ${this.lastName}`
})

userSchema.methods = {
    authenticate: function(password) {return bcrypt.compareSync(password, this.hash_password)}
}
const users = mongoose.model('User', userSchema)
module.exports = users