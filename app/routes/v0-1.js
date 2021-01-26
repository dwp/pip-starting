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

    // ROUTES V0-1 START

    // router.post('/v0-1/over-16', (req, res, next) => {
    //  const someoneElse = req.session.data['someone-else'];
    // if (someoneElse === 'Yes') {
    //    res.redirect('/v0-1/over-16');
    //  } else {
    //    res.redirect('/v0-1/apply-for-someone-else/over-16'over-16');
    //  }
    //});

    router.post('/v0-1/eligible', (req, res, next) => {
        const whereLived = req.session.data['where-lived'];
        if (whereLived === 'No') {
            res.redirect('/v0-1/not-eligible');
        } else {
            next();
        }

        const condition = req.session.data['condition'];
        if (condition === 'No') {
            res.redirect('/v0-1/not-eligible');
        } else {
            next();
        }

        const over16 = req.session.data['over-16'];
        if (over16 === 'No') {
            res.redirect('/v0-1/not-eligible');
        } else {
            next();
        }
    });

    router.post('/v0-1/contact-details', (req, res, next) => {
        const safeAddress = req.session.data['safe-address'];
        if (safeAddress === 'No') {
            res.redirect('/v0-1/address-other');
        } else {
            res.redirect('/v0-1/contact-details');
        }
    });
 // ROUTES V0-1 END