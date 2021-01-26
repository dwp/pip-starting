module.exports = function (app) {

  // Code supplied by Gary for dealing with query strings
  app.use(function(req, res, next){
    Object.assign(res.locals,{
      postData: (req.body ? req.body : false)
    });

    Object.assign(res.locals,{
      getData: (req.query ? req.query : false)
    });

    next();
  });

  // var path = require('path')


  // ROUTES POC START

  router.post('/poc/eligible', (req, res, next) => {
    const whereLived = req.session.data['where-lived'];
    if (whereLived === 'No') {
      res.redirect('/poc/not-eligible');
    } else {
      next();
    }

    const condition = req.session.data['condition'];
    if (condition === 'No') {
      res.redirect('/poc/not-eligible');
    } else {
      next();
    }

    const over16 = req.session.data['over-16'];
    if (over16 === 'No') {
      res.redirect('/poc/not-eligible');
    } else {
      next();
    }
  });

  router.post('/poc/contact-details', (req, res, next) => {
    const safeAddress = req.session.data['safe-address'];
    if (safeAddress === 'No') {
      res.redirect('/poc/address-other');
    } else {
      res.redirect('/poc/contact-details');
    }
  });

// ROUTES  POC END

}
