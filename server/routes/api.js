var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require('../models/users/user');
var mongoose = require('mongoose');
var passport=require('passport');
var config=require('../config/database')
require('../config/passport')(passport);
/* GET api listing. */
router.post('/signup', function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: "Please pass some Username and password" })
  }else{
    var newUser=new User({
      username:req.body.username,
      password:req.body.password
    })
    newUser.save(function (err) {
      if (err) {
        return res.json({ success: false, msg: 'Username already exists.' });
      }
      res.json({ success: true, msg: 'Successful created new user.' });
    });
  }
});
router.post('/signin', function (req, res,next) {
  User.findOne({
    username: req.body.username
  }, function (err, user) {
    if (err) throw err;
    console.log(user,req.body.username);
    
    if (!user) {
      res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign({ ...user }, config.secret, { expiresIn: '60m' });
          // return the information including token as JSON
          res.json({ success: true, token:token,user:{username:user._doc.username} });
        } else {
          res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
        }
      });
    }
  });
});
router.get('/allusers',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
  const token=req.query.token
  
  if(token)
    res.json({msg:"Welcome Page!",user: req.user})
  else
    res.status(401).json({msg:"Unauthorized!!No Token",err:"Token not found"})
})

// getToken = function (headers) {
//   if (headers && headers.authorization) {
//     var parted = headers.authorization.split(' ');
//     if (parted.length === 2) {
//       return parted[1];
//     } else {
//       return null;
//     }
//   } else {
//     return null;
//   }
// };
router.get('/:id',function (req,res,next) {
  res.json({msg:"No Route"})
})
router.post('/:id',function (req,res,next) {
  res.json({msg:"No Route"})
})
module.exports = router;
