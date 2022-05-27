const router = require('express').Router();


const userRoutes = require('./user-routes.js');

// ADD THE MISSING ROUTES AND  MODELS FOR THESE!!!

// const postRoutes = require('./post-routes.js');
// const commentRoutes = require('./comment-routes.js');


router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;