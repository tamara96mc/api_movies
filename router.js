const MoviesRouter = require('./routes/MovieRouter');
const router = require('express').Router();

router.use('/movies' , MoviesRouter);

module.exports=router;
