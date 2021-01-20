const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/v1/eligible', (req, res, next) => {
  const whereLived = req.session.data['where-lived'];
  if (whereLived === 'No') {
    res.redirect('/v1/not-eligible');
  } else {
    next();
  }

  const condition = req.session.data['condition'];
  if (condition === 'No') {
    res.redirect('/v1/not-eligible');
  } else {
    next();
  }

  const over16 = req.session.data['over-16'];
  if (over16 === 'No') {
    res.redirect('/v1/not-eligible');
  } else {
    next();
  }
});

 module.exports = router
