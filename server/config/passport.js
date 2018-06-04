var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require('../models/users/user');
var config = require('../config/database');
module.exports = (passport) => {
    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromUrlQueryParameter('token');
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        const user = {
            _id:jwt_payload._doc._id
        }
        User.findOne(user, (err, user) => {
            if (err) return done(err, false)
            else if (user)  done(null, user)
            else  done(null, false)
        })
    }))
}