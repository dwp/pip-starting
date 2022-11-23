const { compile } = require("nunjucks");

 module.exports = function (router) {


 router.post('/v13/bank-account', (req, res, next) => {
     const account = req.session.data['your-account'];
     if (account === 'Yes') {
         res.redirect('/v13/bank-account-details');
     } else if (account === 'No') {
       res.redirect("/v13/continue-without-bank-details");
     }
 })


 router.post('/v13/bank-account-details', (req, res, next) => {
   res.redirect('/v13/motability-scheme');
 })

 router.post('/v13/continue-without-bank-details', (req, res, next) => {
   res.redirect('/v13/motability-scheme');
 })

 router.post('/v13/motability-scheme', (req, res, next) => {
   res.redirect('/v13/check-answers');
 })

 };
