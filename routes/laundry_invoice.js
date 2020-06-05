//As a vendor supplying services to Laundry-R-Us I need to submit invoices via an API in order to receive payment in a timely manner.
//THIS USES SEQUELIZE
var express = require('express');
const router = express.Router();
const db = require('../models');

//1.The API accepts JSON formatted HTTP POST requests at the route '/Invoice' The following is a sample Invoice request that will be submitted to the API endpoint

router.post('/invoice', (req, res) => {
    const { invoice_number, total, currency, invoice_date, due_date, 
    vendor_name, remittance_address } = req.body;
    db.Invoice.create({
        invoice_number,
        total,
        currency,
        invoice_date,
        due_date, 
    }).then((result) => {
        // res.redirect('/create_invoice')
        res.json(result)
    })
})

module.exports = router;