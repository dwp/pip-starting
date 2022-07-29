const { compile } = require("nunjucks");
const nationalities = require('../assets/nationalities.json')
const countries = require('../assets/countries.json')
const express = require('express')
const router = express.Router()

module.exports = function (router) {

  // ID verification documents
  // router.post('/id-verification/v1/id-verification-select', function (req, res) {
  //   var idDoc = req.session.data['document']
  //   if (idDoc.includes('uk-passport')){
  //     res.redirect('/id-verification/v1/documents/passport-declaration')
  //   } else if (idDoc.includes ('payslip-p60')){
  //     res.redirect('/id-verification/v1/documents/payslip-or-p60')
  //   } else if (idDoc.includes ('self-assessment')){
  //     res.redirect('/id-verification/v1/documents/self-assessment')
  //   } else if (idDoc.includes ('tax-credit')){
  //     res.redirect('/id-verification/v1/documents/voiceid-yes-or-no')
  //   } else if (idDoc.includes ('credit-reference')){
  //     res.redirect('/id-verification/v1/documents/credit-reference')
  //   }
  // });

  // Payslip of P60 question
  // router.post('/id-verification/v1/documents/payslip-or-p60', function (req, res) {
  //   var payslipP60 = req.session.data['payslip-or-p60']
  //   if (payslipP60.includes('payslip')){
  //     res.redirect('/id-verification/v1/documents/payslip-q1')
  //   } else if (payslipP60.includes ('p60')){
  //     res.redirect('/id-verification/v1/documents/p60-q1')
  //   }
  // });

  // Voice ID question
  // router.post('/id-verification/v1/documents/voiceid-yes-or-no', function (req, res) {
  //   var voiceID = req.session.data['voice-id']
  //   if (voiceID.includes('yes')){
  //     res.redirect('/id-verification/v1/documents/voice-id-call')
  //   } else if (voiceID.includes ('no')){
  //     res.redirect('/id-verification/v1/documents/tax-credits-q1')
  //   }
  // });

  // Nationality database
  router.get('/id-verification/v1/live-pip1/nationality', (req, res, next) => {
    res.locals.nationalities = nationalities;
    res.render('id-verification/v1/live-pip1/nationality.html')
  })

  // Countries database
  router.get('/id-verification/v1/live-pip1/about_your_health/hcp-1', (req, res, next) => {
      res.locals.countries = countries;
      res.render('id-verification/v1/live-pip1/about_your_health/hcp-1.html')
  })

}
