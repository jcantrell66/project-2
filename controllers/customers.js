const Business = require('../models/business');
const User = require('../models/user');
const Customer = require('../models/customer');

module.exports = {
    new: newCustomer,
    create,
    show
};

function newCustomer(req, res) {
    Customer.find({}, function(err, customerDoc){
        // console.log(customerDoc, '<= customerDoc')
        // console.log(req.params.id, '<= businessId')
        res.render('customers/new', {
            customers: customerDoc,
            businessId: req.params.id
        });
    })
}

function create(req, res) {
    console.log(req.params.id, '<= businessId')
    Customer.create(req.body, function(err, customerDoc){
        console.log(customerDoc, '<= customerDoc');
        console.log(customerDoc._id, '<= customer._id');
        Business.findById(req.params.id, function(err, businessDoc){
            businessDoc.customers.push(customerDoc._id);
            businessDoc.save(function(err){
                res.redirect('customers/new');
            })
        })
    })
}

function show(req, res) {
    res.render('customers/show')

}