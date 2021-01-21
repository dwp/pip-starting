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
  });




  // END OF VERSION 1 ROUTES

}
