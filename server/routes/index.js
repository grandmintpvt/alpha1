var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Page under construction"+getClientIp(req))

});
var getClientIp = function(req) {
    return (req.headers["X-Forwarded-For"] ||
            req.headers["x-forwarded-for"] ||
            '').split(',')[0] ||
           req.client.remoteAddress;
};
module.exports = router;
