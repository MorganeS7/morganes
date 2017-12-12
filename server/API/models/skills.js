// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var skillSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    minimize: false
});

// the schema is useless so far
// we need to create a model using it
var Skills = mongoose.model('Skills', skillSchema);

// make this available to our Node applications
module.exports = Skills;