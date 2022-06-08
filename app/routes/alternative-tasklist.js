const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

  router.post('/experimental/alternative_tasklist_idea/another', function(req, res) {
      if (req.session.data['condition2'] == "yes") {
                 res.redirect('/experimental/alternative_tasklist_idea/condition')
               } else {
                 res.redirect('/experimental/alternative_tasklist_idea/check')
               }
  })

// route for checking if citizen needs to claim for an activity
router.post('/experimental/alternative_tasklist_idea/activity_hints/preparing-food-hint', (req, res, next) => {
          // Checks radio options, if "Add a new caseload" is selected, route to "create-new-case-ready-review" page.
         if (req.session.data['preparing-food-help'] == "yes") {
           // redirect to "create-new-case-ready-review" page.
           res.redirect('/experimental/alternative_tasklist_idea/preparing_food/preparing-food-detail')
         } else {
           //redirect to "ready-for-review-success" page.
           res.redirect('/experimental/alternative_tasklist_idea/eating_and_drinking/eating-and-drinking-detail')
         }
})
}
