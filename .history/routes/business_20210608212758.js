let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to contacts schema model

let Business = require('../models/business');

/* GET Route for the Contacts List Page - read operation */
router.get('/', (res, res, next) => {
    Business.find((err, BusinessList) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            console.log(BusinessList);
            
        }
    });
   
});
module.exports = router;