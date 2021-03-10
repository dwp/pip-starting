module.exports = function (router) {
    router.post('/v1a/health-condition', (req, res, next) => {
        const healthCondition = req.session.data['condition'];
        if (healthCondition === 'No') {
            res.redirect('/v1a/over-16');
        } else {
            res.redirect('/v1a/over-3-months');
        }
    });
   
    router.post('/v1a/under-spa', (req, res, next) => {
        const underSpa = req.session.data['underspa'];
        if (underSpa === 'Yes') {
            res.redirect('/v1a/where-you-live');
        } else {
            res.redirect('/v1a/over-spa');
        }
    });

    router.post('/v1a/over-spa', (req, res, next) => {
        const overSpa = req.session.data['overspa'];
        if (overSpa === 'Yes') {
            res.redirect('/v1a/over-spa-payment-question');
        } else {
            res.redirect('/v1a/where-you-live');
        }
    });

    router.post('/v1a/living-in-gb', (req, res, next) => {
        const livingGb = req.session.data['outside-britain'];
        if (livingGb === 'Yes') {
            res.redirect('/v1a/not-eligible');
        } else {
            res.redirect('/v1a/living-in-gb-further-question');
        }
    });
//     router.post('/v1/not-eligible', (req, res, next) => {
//         const destination = req.session.data['destination'];
//         if (destination === 'health-condition') {
//             delete req.session.data.destination
//             res.redirect('/v1/health-condition');
//         } else if (destination === 'over-3-months') {
//             delete req.session.data.destination
//             res.redirect('/v1/over-3-months');
//         } else if (destination === 'over-9-months') {
//             delete req.session.data.destination
//             res.redirect('/v1/over-9-months');    
//         } else if (destination === 'where-you-live') {
//             delete req.session.data.destination
//             res.redirect('/v1/where-you-live');
//         } else {
//             delete req.session.data.destination
//             res.redirect('/v1/check-answers-1');
//         }
//     });
 };