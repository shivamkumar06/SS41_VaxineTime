const mongoose = require('mongoose')

const HospitalSchema = new mongoose.Schema({
    HospitalId:{
        type:String
    },
    HospitalName:{
        type:String
    }
})

module.exports = mongoose.model('Hospitals',HospitalSchema);