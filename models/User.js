const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique:1  
    },
    password: {
        type: String,
        maxlength: 100
    },
    role: { 
        type: Number,
        default: 0 
    },
    image: String,
    token: {    
        type: String
    },
    tokenExp: { //유효 기간
        type: Number
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb){
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if (err) return cb(err),
        cb(null, isMatch)
    })
}

const User = mongoose.model('User', userSchema)
module.exports={User};