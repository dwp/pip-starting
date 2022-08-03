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
                       res.redirect('#')
                     }
        })
router.post('/additional_support/add-support-someone-helping', function(req, res) {
            if (req.session.data['add-support-help'] == "Yes") {
                       res.redirect('/additional_support/add-support-continue-claim')
                     } else if (req.session.data['add-support-help'] == "No") {
                       res.redirect('#')
                     }
        })
router.post('/additional_support/add-support-continue-claim', function(req, res) {
            if (req.session.data['add-support-professional'] == "Yes") {
                       res.redirect('#')
                    }
                    else if (req.session.data['add-support-professional'] == "No") {
                      res.redirect('add-support-we-need-to-get-in-touch')
                    }
                    else if (req.session.data['add-support-professional'] == "not sure") {
                      res.redirect('add-support-we-need-to-get-in-touch')
                    }
        })

}
