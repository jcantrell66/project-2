const Business = require('../models/business');
const User = require('../models/user');
const Customer = require('../models/customer');

module.exports = {
    show,
    new: newExpense,
    create,
    newIncome,
    createIncome
};

function show(req, res) {
    Business.find({employee: req.user._id}, function(err, businessDoc){
        businessDoc = businessDoc[0];
        res.render('transactions/show', {
            business: businessDoc
        });
    })
}

function newExpense(req, res) {
    Business.find({}, function (err, businessDoc) {
        res.render('transactions/new', {
            business: businessDoc,
            businessId: req.params.id
        });
    })
}

function newIncome(req, res) {
    Business.find({}, function (err, businessDoc) {
        res.render('transactions/income', {
            business: businessDoc,
            businessId: req.params.id
        });
    })
}

function create(req, res) {
    Business.findById(req.params.id, function(err, businessDoc){
        businessDoc.expenses.push(req.body);
        businessDoc.save(function(err){
            res.redirect('expenses/new');
        })
    })
}

function createIncome(req, res) {
    Business.findById(req.params.id, function(err, businessDoc){
        businessDoc.incomes.push(req.body);
        businessDoc.save(function(err){
            res.redirect('income/new');
        })
    })
}