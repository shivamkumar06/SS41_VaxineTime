const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    cname: {
        type: String,
    },
    ParentName: {
        type: String,
    },
    aadharID: {
        type: String,
    },
    addr: {
        type: String,
    },
    gender: {
        type: String,
    },
    dateVac: {
        type: Date,
        //date formatting for later
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    pin: {
        type: String,
    },
    childID: {
        type: String,
    },
    vaxine: [],

})

module.exports = mongoose.model('User', userSchema)