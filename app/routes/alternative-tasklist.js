const express = require('express')
const router = express.Router()

// route for checking if citizen needs to claim for an activity
router.post('/experimental/alternative_tasklist_idea/activity_hints/preparing-food-hint', (req, res, next) => {
          // Checks radio options, if "Add a new caseload" is selected, route to "create-new-case-ready-review" page.
         if (req.session.data['prep-food-help'] == "yes") {
           // redirect to "create-new-case-ready-review" page.
           res.redirect('/experimental/alternative_tasklist_idea/preparing_food/preparing-food-detail')
         } else {
           // redirect to "ready-for-review-success" page.
           res.redirect('/version-one/minimum-viable-product/case-selector/ready-for-review-success')
         }
})

router.post('/experimental/alternative_tasklist_idea/another', function(req, res) {

  let condition2 = req.session.data['condition2']

  if (condition2 === 'Yes') {
      res.redirect('condition-2')
    } else {
      res.redirect('check')
    }
})
