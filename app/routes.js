const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// ROUTES V1 START

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

  const safeAddress = req.session.data['safe-address'];
  if (safeAddress === 'No') {
    res.redirect('/v1/address-other');
  } else {
    next();
  }
});

// ROUTES V1 END

 module.exports = router
