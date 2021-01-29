const express = require('express')
const router = express.Router()
const poc = require('./routes/poc')
const v01 = require('./routes/v0-1')
const v02 = require('./routes/v0-2')
//ROUTES V0-2 START
poc(router);
v01(router);
v02(router);
// ROUTES V0-2 END
module.exports = router