const router = require('express').Router();
const homeRoutes = require('./home-routes.js');

const apiRoutes = require('./api');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);      // replaced by homeRoutes??
router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;