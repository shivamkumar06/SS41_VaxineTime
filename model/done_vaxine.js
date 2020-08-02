const mongoose = require('mongoose')

function formatDate(date) {
    var d = new Date(date),
     month = '' + (d.getMonth() + 1),
     day = '' + d.getDate(),
     year = d.getFullYear();

    if(month.length < 2) month = '0' + month;
    if(day.length < 2) day = '0' + day;

    return [day,month,year].join('-');
}

const DoneSchema = new mongoose.Schema({
    vaccineName: {
        type: String,
    },
    date: [{
        type: String,
        set: date => formatDate(date)
    }],
    doctor:{
        type:String
    },
    hospitalName: [{
        type: String,
        default: "NaN"
    }],
    PresentPerson:{
        type:String
    },
    mobileNO:[{
        type: Number,
    }],
  
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
})



const Done = mongoose.model('done', DoneSchema)

module.exports = Done