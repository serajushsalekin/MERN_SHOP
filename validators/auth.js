const validator = require('validator')
const emptyValidator = require('./empty-validator')


const registerValidator = (data) => {
    let errors = {}
    data.firstName = !emptyValidator(data.firstName) ? data.firstName : ''
    data.lastName = !emptyValidator(data.lastName) ? data.lastName : ''

    data.email = !emptyValidator(data.email) ? data.email : ''
    data.password = !emptyValidator(data.password) ? data.password : ''
    data.password2 = !emptyValidator(data.password2) ? data.password2 : ''

    if(!validator.isLength(data.firstName, {min: 2, max: 30})){
        errors.firstName = 'First Name must be between 2 and 30 characters'
    }
    if(!validator.isLength(data.lastName, {min: 2, max: 30})){
        errors.lastName = 'Last Name must be between 2 and 30 characters'
    }
    if(validator.isEmpty(data.firstName)){
        errors.firstName = 'First Name field is required'
    }
    if(validator.isEmpty(data.lastName)){
        errors.lastName = 'Last Name field is required'
    }
    if(!validator.isEmail(data.email)){
        errors.email = 'Email is invalid'
    }
    if(validator.isEmpty(data.email)){
        errors.email = 'Email field is required'
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'Password field is required'
    }
    if(!validator.isLength(data.password, { min: 6, max: 30})){
        errors.password = 'Password must be at least 6 characters'
    }
    if(validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm Password field is required'
    }
    if(!validator.equals(data.password, data.password2)){
        errors.password2 = 'Passwords must match'
    }

    return {
        errors,
        isValid: emptyValidator(errors)
    }
}


const loginValidator = (data) => {
    let errors = {}
    data.email = !emptyValidator(data.email) ? data.email : ''
    data.password = !emptyValidator(data.password) ? data.password : ''

    if(!validator.isEmail(data.email)){
        errors.email = 'Email is invalid'
    }
    if(validator.isEmpty(data.email)){
        errors.email = 'Email field is required'
    }
    
    if(validator.isEmpty(data.password)){
        errors.password = 'Password field is required'
    }
    

    return {
        errors,
        isValid: emptyValidator(errors)
    }
}


module.exports = { registerValidator, loginValidator }