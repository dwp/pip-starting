const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

  router.post('/v12/condition-questions/another-condition', function(req, res) {
      if (req.session.data['condition2'] == "Yes") {
                 res.redirect('/v12/condition-questions/condition')
               } else {
                 res.redirect('/v12/condition-questions/check-answers')
               }
  })


router.post('/v12/condition-questions/option-two/another-condition', function(req, res) {
    if (req.session.data['condition2'] == "Yes") {
               res.redirect('/v12/condition-questions/option-two/condition')
             } else {
               res.redirect('/v12/condition-questions/option-two/check-answers')
             }
})


router.post('/v12/condition-questions/option-two/consent', function(req, res) {
    if (req.session.data['consent'] == "Yes, I agree") {
               res.redirect('/v12/condition-questions/option-two/hcp-1')
             } else {
               res.redirect('#')
             }
})

router.post('/v12/condition-questions/option-two/condition', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name-1']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, section })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/v12/condition-questions/option-two/another-condition')
 
})
}
