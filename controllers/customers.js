const Business = require('../models/business');
const User = require('../models/user');
const Customer = require('../models/customer');

module.exports = {
    new: newCustomer,
    create,
    show
};

function newCustomer(req, res) {
    Customer.find({}, function (err, customerDoc) {
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
    Customer.create(req.body, function (err, customerDoc) {
        console.log(customerDoc, '<= customerDoc');
        console.log(customerDoc._id, '<= customer._id');
        Business.findById(req.params.id, function (err, businessDoc) {
            businessDoc.customers.push(customerDoc._id);
            businessDoc.save(function (err) {
                res.redirect('customers/new');
            })
        })
    })
}

function show(req, res) {
    // console.log(req.user._id, '<= user id');
    Business.find({ employee: req.user._id }, function (err, businessDoc) {
        // businessDoc = businessDoc[0];
        console.log(businessDoc, '<= businessDoc')
        businessId = businessDoc[0]._id;
        console.log(businessId, '<= businessId')
        Business.findById(businessId)
            .populate('customers').exec(function (err, myBusiness) {
                console.log(myBusiness, '<= myBusiness');
                res.render('customers/show', {
                    business: myBusiness
                })
            })
    })
}