var express = require('express');
var router = express.Router();
var request = require('superagent')

router.get('/gettyimage', function (req, res, next) {
  request
    .get('https://api.gettyimages.com/v3/search/images?fields=id,title,display_set,thumb,referral_destinations&sort_order=most_popular&phrase=' + req.query.playername + " basketball")
    .set('Api-Key', process.env.GETTYAPI_KEY)
    .end(function (err, response) {
      res.json(response.body.images[0].display_sizes[1].uri)
    })
})

router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  });
});


module.exports = router;
