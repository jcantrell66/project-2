var router = require('express').Router();
var businessesCtrl = require('../controllers/businesses.js');

// GET /students
router.get('/businesses', businessesCtrl.index);
router.get('/businesses/new', businessesCtrl.new);
// router.get('/businesses/:id', businessesCtrl.show);
router.post('/businesses', businessesCtrl.create);



// router.post('/facts', isLoggedIn, businessesCtrl.addBusiness);
// Authorizing the user to use a route
// probably only want to use this on
// post, put or delete routes
function isLoggedIn(req, res, next) {
	// req.isAuthenticated() this is given to us by passport
	// it returns true or false
	if ( req.isAuthenticated() ) return next(); // next() go to the next function in middleware, above situation studentsCtrl.addFact
	res.redirect('/auth/google'); // redirect them to login
}



module.exports = router;
