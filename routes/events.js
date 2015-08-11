var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('');
});

router.post('/', function (req, res) {
});

module.exports = router;
