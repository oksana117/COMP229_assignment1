let mongoose = required('mongoose');

//create a model class

let usersModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},

{
        collection: "users"
});

module.exports = mongoose.module