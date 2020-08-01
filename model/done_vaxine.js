const mongoose = require('mongoose')

function formatDate(date) {
    var d = new Data(data),
        month = '' + (d.getMonth() + 1),
        day = '' +(d.getMonth() + 1),
        year = d.getFullYear(),

    if (month.length < 2) month = '0' + month;
    if(day.length  < 2) day = '0' + day;
        return [day,month,year ].join('-');
}

const DoneSchema = new mongoose.Schema({
    vaccineName: {
        type: String,
    },
    date: [{
        type: String,
        set: date => formatDate(date)
    }],
    hospitalName: [{
        type: String,
        default: "NaN"
    }],
    City1:[{
        type: String,
        default: "NaN"
    }],
    State1: [{
        type: String,
        default: "NaN"
    }],
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
})



const Done = mongoose.model('done', DoneSchema)

module.exports = Done