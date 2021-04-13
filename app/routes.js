const express = require('express')
const router = express.Router()

// ROUTES REDIRECT START
const poc = require('./routes/poc')
const v01 = require('./routes/v0-1')
const v02 = require('./routes/v0-2')
const v1 = require('./routes/v1')
const v1a = require('./routes/v1a')
const v1b = require('./routes/v1b')
const v1c = require('./routes/v1c')
const v2 = require('./routes/v2')
const v2a = require('./routes/v2a')

// ROUTES REDIRECT END

// ROUTER LIST START
poc(router);
v01(router);
v02(router);
v1(router);
v1a(router);
v1b(router);
v1c(router);
v2(router);
// ROUTER LIST END

module.exports = router
