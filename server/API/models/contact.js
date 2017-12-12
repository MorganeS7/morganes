// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var contactSchema = new Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    comments: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Contacts = mongoose.model('Contacts', contactSchema);

// make this available to our Node applications
module.exports = Contacts;