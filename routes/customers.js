var router = require('express').Router();
var customersCtrl = require('../controllers/customers.js');

// GET /students
router.get('/businesses/:id/customers/new', customersCtrl.new);
router.get('/businesses/customers', customersCtrl.show);
router.post('/businesses/:id/customers', customersCtrl.create);



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
