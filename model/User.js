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

const userSchema = new mongoose.Schema({
    cname: {
        type: String,
    },
    parentName: {
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
        set : date => formatDate(date)
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
    phoneNO: {
        type: Number,
    },
    coverImage: {
        type: Buffer,
    },
    coverImageType: {
        type: String,
    },
    vaxine: [],

})

userSchema.virtual('coverImagePath').get(function(){
    if(this.coverImage != null && this.coverImage != mull){
        return `data:${this.coverImageType};charset = utf-8; base64, ${this.coverImage.toString('base64')}` 
    }
})

module.exports = mongoose.model('User', userSchema)