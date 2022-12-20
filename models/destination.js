const mongoose = require('mongoose')
//add schema here and export
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date,
        // default: function() {
        // return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        // },
    },
});

//export the schema model
module.exports = module.model('destination', destinationSchema);