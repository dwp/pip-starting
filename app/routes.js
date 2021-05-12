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
const v2idv = require('./routes/v2idv')
const v2a = require('./routes/v2a')
const v2b = require('./routes/v2b')
const v3 = require('./routes/v3')
const v3b = require('./routes/v3b')
const v4 = require('./routes/4')
const authRoutes = require('./routes/auth')
const idvRoutes = require('./routes/idv')


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
v2idv(router);
v2a(router);
v2b(router);
v3(router);
v3b(router);
v4(router);
router.use('/', authRoutes)
router.use('/', idvRoutes)
// ROUTER LIST END

module.exports = router
