const Business = require('../models/business');
const User = require('../models/user');
const Customer = require('../models/customer');

module.exports = {
    new: newCustomer,
    create,
    show,
    delete: deleteCustomer,
    edit,
    update
};

function newCustomer(req, res) {
    Customer.find({}, function (err, customerDoc) {
        res.render('customers/new', {
            customers: customerDoc,
            businessId: req.params.id
        });
    })
}

function create(req, res) {
    Customer.create(req.body, function (err, customerDoc) {
        Business.findById(req.params.id, function (err, businessDoc) {
            businessDoc.customers.push(customerDoc._id);
            businessDoc.save(function (err) {
                res.redirect('customers/new');
            })
        })
    })
}

function show(req, res) {
    Business.find({ employee: req.user._id }, function (err, businessDoc) {
        businessId = businessDoc[0]._id;
        Business.findById(businessId)
            .populate('customers').exec(function (err, myBusiness) {
                res.render('customers/show', {
                    business: myBusiness
                })
            })
    })
}

function deleteCustomer(req, res) {
    Customer.deleteOne({_id: req.params.id}, function(err, customerDoc){
        res.redirect('/businesses/customers')
    });
}

function edit(req, res) {
    Customer.findById(req.params.id, function(err, customerDoc){
            res.render('customers/edit', {
                customer: customerDoc
            });
    })
}

function update(req, res) {
    Customer.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, customerDoc){
        res.redirect('/businesses/customers')
    })
}