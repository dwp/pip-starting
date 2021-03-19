module.exports = function (router) {

    router.post('/v1b/over-16', (req, res, next) => {
        const over16 = req.session.data['over-16'];
        if (over16 === 'Answer 1') {
            res.redirect('/v1b/not-eligible-under-16');
        } else if (over16 === 'Answer 2'){
            res.redirect('/v1b/health-condition');
        } else {
            res.redirect('/v1b/over-spa');
        }
    });

    router.post('/v1b/not-eligible-under-16', (req, res, next) => {
        res.redirect('/v1b/health-condition');
    });

    router.post('/v1b/not-eligible-over-spa', (req, res, next) => {
        res.redirect('/v1b/health-condition');
    });

    router.post('/v1b/over-spa', (req, res, next) => {
        const overSpa = req.session.data['overspa'];
        if (overSpa === 'Yes PIP') {
            res.redirect('/v1b/over-spa-pip-payment-question');
        } else if (overSpa === 'Yes DLA'){
                res.redirect('/v1b/over-spa-dla-payment-question');
        } else {
            res.redirect('/v1b/not-eligible-over-spa');
        }
    });

    router.post('/v1b/over-spa-pip-payment-question', (req, res, next) => {
        const pipEnd = req.session.data['pip-claim-end'];
        if (pipEnd === 'Less than 12 months ago') {
            res.redirect('/v1b/health-condition');
        } else {
            res.redirect('/v1b/not-eligible-over-spa');
        }
    });

    router.post('/v1b/over-spa-dla-payment-question', (req, res, next) => {
        const dlaEnd = req.session.data['dla-claim-end'];
        if (dlaEnd === 'Less than 12 months ago') {
            res.redirect('/v1b/health-condition');
        } else {
            res.redirect('/v1b/not-eligible-over-spa');
        }
    });
    
    
    router.post('/v1b/health-condition', (req, res, next) => {
        const healthCondition = req.session.data['condition'];
        if (healthCondition === 'Yes') {
            res.redirect('/v1b/over-9-months');
        } else {
            res.redirect('/v1b/not-eligible-health-condition');
        }
    });

    router.post('/v1b/not-eligible-health-condition', (req, res, next) => {
            res.redirect('/v1b/where-you-live');
    });

    router.post('/v1b/over-3-months', (req, res, next) => {
        res.redirect('/v1b/over-9-months');
    });

    router.post('/v1b/over-9-months', (req, res, next) => {
        const overMonths = req.session.data['over-9-months'];
        if (overMonths === 'Over 9 months') {
            res.redirect('/v1b/where-you-live');
        } else {
            res.redirect('/v1b/not-eligible-health-condition-9-months');
        }
    });

    router.post('/v1b/not-eligible-health-condition-9-months', (req, res, next) => {
        res.redirect('/v1b/where-you-live');
    });

    router.post('/v1b/over-spa-payment-question', (req, res, next) => {
        res.redirect('/v1b/where-you-live');
    });

    router.post('/v1b/where-you-live', (req, res, next) => {
        const whereLived = req.session.data['where-live'];
        if (whereLived === 'Yes') {
            res.redirect('/v1b/living-in-gb');
        } else {
            res.redirect('/v1b/living-in-gb-further-question');
        }
    });

    router.post('/v1b/living-in-gb-further-question', (req, res, next) => {
        const immigrationControl = req.session.data['immigration-control'];
        if (immigrationControl === 'No') {
            res.redirect('/v1b/living-in-gb');
        } else {
            res.redirect('/v1b/not-eligible-immigration');
        }
    });

    router.post('/v1b/living-in-gb', (req, res, next) => {
        const livingGb = req.session.data['gb'];
        if (livingGb === 'Yes') {
            res.redirect('/v1b/next-page');
        } else {
            res.redirect('/v1b/living-in-gb-further-question-2');
        }
    });

    router.post('/v1b/living-in-gb-further-question-2', (req, res, next) => {
        const immigrationControl2 = req.session.data['immigration-control-2'];
        if (immigrationControl2 === 'No') {
            res.redirect('/v1b/next-page');
        } else {
            res.redirect('/v1b/not-eligible-immigration');
        }
    });

    router.post('/v1b/not-eligible-immigration', (req, res, next) => {
        res.redirect('/v1b/next-page');
    });

 };
