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
const v4 = require('./routes/v4')
const v5 = require('./routes/v5')
const v6 = require('./routes/v6')
const v7 = require('./routes/v7')
const v8 = require('./routes/v8')
const v9 = require('./routes/v9')
const v10 = require('./routes/v10')
const mvp = require('./routes/mvp')
const mvprev1 = require('./routes/mvp-rev-1')
const p5rev1 = require('./routes/p5-rev-1')
const pip2 = require('./routes/p5.js')
const p5v10 = require('./routes/p5-v10.js')
const mvpp5 = require('./routes/mvp-p5.js')
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
v5(router);
v6(router);
v7(router);
v8(router);
v9(router);
v10(router);
mvp(router);
mvprev1(router);
p5rev1(router);
pip2(router);
p5v10(router);
mvpp5(router);
router.use('/', authRoutes)
router.use('/', idvRoutes)
// ROUTER LIST END

module.exports = router
