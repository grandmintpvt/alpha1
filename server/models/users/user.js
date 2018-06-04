var mongoose = require('mongoose');
var bycrypt = require('bcrypt-nodejs')
var UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})
UserSchema.pre('save',function(next){
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bycrypt.genSalt(10, (err, salt) => {
            if (err) return next(err);
            bycrypt.hash(user.password, salt, null, (err, hash) => {
                if (err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        return next();
    }
})
UserSchema.methods.comparePassword =function (password, cb) {
    bycrypt.compare(password, this.password, (err, isMatch) => {
        if(err) return cb(err);
        cb(null,isMatch)
    })
}
module.exports = mongoose.model('User',UserSchema);