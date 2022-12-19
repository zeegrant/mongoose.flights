//add schema here, i believe we export at the end?
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: [ 'American', 'Southwest' , 'United']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function() {
            let d = new Date();
            let year =d.getFullYear();
            let month = d.getMonth();
            let day = d.getDate();
            let result = new Date(year + 1, month, day);
            return result;
        }

}, 
airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX' ,'SAN']
},
destinations: [ destinationSchema]
});

//export the schema model 
module.exports = module.model('Flight', flightSchema);