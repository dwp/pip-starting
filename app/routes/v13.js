const { compile } = require("nunjucks");

module.exports = function (router) {


router.post('/v13/your-account', (req, res, next) => {
    const account = req.session.data['your-account'];
    if (account === 'Yes') {
        res.redirect('/v13/account-details');
    } else if (account === 'No') {
      res.redirect("/v13/check-answers");
    }
})

};
