const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// ROUTES POC START

router.post('/poc/eligible', (req, res, next) => {
  const whereLived = req.session.data['where-lived'];
  if (whereLived === 'No') {
    res.redirect('/poc/not-eligible');
  } else {
    next();
  }

  const condition = req.session.data['condition'];
  if (condition === 'No') {
    res.redirect('/poc/not-eligible');
  } else {
    next();
  }

  const over16 = req.session.data['over-16'];
  if (over16 === 'No') {
    res.redirect('/poc/not-eligible');
  } else {
    next();
  }
});

router.post('/poc/contact-details', (req, res, next) => {
 const safeAddress = req.session.data['safe-address'];
 if (safeAddress === 'No') {
   res.redirect('/poc/address-other');
 } else {
   res.redirect('/poc/contact-details');
 }
 });

// ROUTES  END

// TO ADD A CONSOLE LOG OUTPUT TO A ROUTE INCLIUDE THIS LINE UNDER THE 'const' LINE 
// console.log('message', xx enter the data source here E.G.someoneElse xx)

// ROUTES V0-1 START

router.post('/v0-1/apply-for-someone-else', (req, res, next) => {
 const someoneElse = req.session.data['someone-else'];
  if (someoneElse === 'No, the application is for myself') {
   res.redirect('/v0-1/over-16');
 } else {
   res.redirect('/v0-1/apply-for-someone/over-16');
 }
});

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

router.post('/v0-1/health-condition', (req, res, next) => {
  const healthCondition = req.session.data['condition'];
  if (healthCondition === 'Yes') {
    res.redirect('/v0-1/over-3-months');
  } else {
    res.redirect('/v0-1/where-you-live');
  }
});

router.post('/v0-1/apply-for-someone/health-condition', (req, res, next) => {
  const healthCondition = req.session.data['afse-condition'];
  if (healthCondition === 'Yes') {
    res.redirect('/v0-1/apply-for-someone/over-3-months');
  } else {
    res.redirect('/v0-1/apply-for-someone/where-you-live');
  }
});

router.post('/v0-1/address', (req, res, next) => {
 const safeAddress = req.session.data['safe-address'];
 if (safeAddress === 'No') {
   res.redirect('/v0-1/address-other');
 } else {
   res.redirect('/v0-1/contact-details');
 }
 });

router.post('/v0-1/apply-for-someone/address', (req, res, next) => {
  const safeAddress = req.session.data['afse-safe-address'];
  if (safeAddress === 'No') {
    res.redirect('/v0-1/apply-for-someone/address-other');
  } else {
    res.redirect('/v0-1/apply-for-someone/contact-details');
  }
});
 // ROUTES V0-1 END

 //ROUTES V0-2 START

router.post('/v0-2/apply-for-someone-else', (req, res, next) => {
  const someoneElse = req.session.data['someone-else'];
  if (someoneElse === 'No, the application is for myself') {
    res.redirect('/v0-2/over-16');
  } else {
    res.redirect('/v0-2/apply-for-someone/over-16');
  }
});

// router.post('/v0-2/eligible', (req, res, next) => {
//   const whereLived = req.session.data['where-lived'];
//   if (whereLived === 'No') {
//     res.redirect('/v0-2/not-eligible');
//   } else {
//     next();
//   }

//   const condition = req.session.data['condition'];
//   if (condition === 'No') {
//     res.redirect('/v0-2/not-eligible');
//   } else {
//     next();
//   }

//   const over16 = req.session.data['over-16'];
//   if (over16 === 'No') {
//     res.redirect('/v0-2/not-eligible');
//   } else {
//     next();
//   }
// });

router.post('/v0-2/over-16', (req, res, next) => {
  const over16 = req.session.data['over-16'];
  if (over16 === 'Yes') {
    res.redirect('/v0-2/health-condition');
  } else {
    res.redirect('/v0-2/not-eligible');
  }
});

router.post('/v0-2/apply-for-someone/over-16', (req, res, next) => {
  const over16 = req.session.data['afse-over-16'];
  if (over16 === 'Yes') {
    res.redirect('/v0-2/apply-for-someone/health-condition');
  } else {
    res.redirect('/v0-2/apply-for-someone/not-eligible');
  }
});

router.post('/v0-2/health-condition', (req, res, next) => {
  const healthCondition = req.session.data['condition'];
  if (healthCondition === 'Yes') {
    res.redirect('/v0-2/over-3-months');
  } else {
    res.redirect('/v0-2/not-eligible');
  }
});

router.post('/v0-2/apply-for-someone/health-condition', (req, res, next) => {
  const healthCondition = req.session.data['afse-condition'];
  if (healthCondition === 'Yes') {
    res.redirect('/v0-2/apply-for-someone/over-3-months');
  } else {
    res.redirect('/v0-2/apply-for-someone/not-eligible');
  }
});

router.post('/v0-2/where-you-live', (req, res, next) => {
  const whereLived = req.session.data['where-lived'];
  if (whereLived === 'Yes') {
    res.redirect('/v0-2/check-answers-1');
  } else {
    res.redirect('/v0-2/not-eligible');
  }
});

router.post('/v0-2/address', (req, res, next) => {
  const safeAddress = req.session.data['safe-address'];
  if (safeAddress === 'No') {
    res.redirect('/v0-2/address-other');
  } else {
    res.redirect('/v0-2/contact-details');
  }
});

router.post('/v0-2/apply-for-someone/address', (req, res, next) => {
  const safeAddress = req.session.data['afse-safe-address'];
  if (safeAddress === 'No') {
    res.redirect('/v0-2/apply-for-someone/address-other');
  } else {
    res.redirect('/v0-2/apply-for-someone/contact-details');
  }
});

// ROUTES V0-2 END

 module.exports = router
