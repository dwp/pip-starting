// ADD SUPPORT ROUTES
const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

router.post('/additional_support/add-support-condition', function(req, res) {
      if (req.session.data['add-support-condition'] == "Yes") {
                 res.redirect('/additional_support/add-support-professional')
               } else {
                 res.redirect('/additional_support/add-support-professional')
               }
  })
router.post('/additional_support/add-support-professional', function(req, res) {
        if (req.session.data['add-support-professional'] == "Yes") {
                   res.redirect('/additional_support/add-support-help')
                 } else {
                   res.redirect('/additional_support/add-support-help')
                 }
    })
router.post('/additional_support/add-support-help', function(req, res) {
            if (req.session.data['add-support'] == "Yes") {
                       res.redirect('/additional_support/add-support-someone-helping')
                     } else if (req.session.data['add-support'] == "No") {
                       res.redirect('check-answers-1')
                     }
        })
router.post('/additional_support/add-support-someone-helping', function(req, res) {
            if (req.session.data['add-support-help'] == "No") {
                       res.redirect('/additional_support/add-support-continue-claim')
                     } else if (req.session.data['add-support-help'] == "Yes") {
                       res.redirect('check-answers-1')
                     }
        })
router.post('/additional_support/add-support-continue-claim', function(req, res) {
            if (req.session.data['add-support-continue'] == "Yes") {
                       res.redirect('check-answers-1')
                    }
                    else if (req.session.data['add-support-continue'] == "No") {
                      res.redirect('add-support-we-need-to-get-in-touch')
                    }
                    else if (req.session.data['add-support-continue'] == "not sure") {
                      res.redirect('add-support-we-need-to-get-in-touch')
                    }
        })

}
