const Business = require('../models/business');
const User = require('../models/user');
const Customer = require('../models/customer');

module.exports = {
    index,
    new: newBusiness,
    create
    // show
};


function newBusiness(req, res) {
    console.log(req.user._id, '<= req.user.id')
    res.render('businesses/new');

}

function index(req, res, next) {
    Business.find({employee: req.user._id}, function (err, businessDoc) {
        res.render('businesses/index', {
        business: businessDoc
        });
    })
}

function create(req, res) {
    console.log(req.body, 'business body');
    console.log(req.user, 'req.user');
    Business.create(req.body, function(err, businessDoc){
        businessDoc.employee = req.user._id;
        businessDoc.save(function(err){
            res.redirect('businesses/index');
        })
    })
}

// function show(req, res) {
//     Business.findById(req.params.id, function(){

//     })
// }
