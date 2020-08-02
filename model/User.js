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
    baalId:{
        type:String
    },
    phoneNO:{
        type:Number
    },
    addr: {
        type: String,
    },
    aadharID: {
        type: String,
    },
    dateVac: {
        type: String,
        set : date => formatDate(date)
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    gender:{
        type:String
    },
   
    coverImage: {
        type: Buffer,
    },
    coverImageType: {
        type: String,
    },
    childID: {
        type: String,
    },
    vaxine: [],

})

userSchema.virtual('coverImagePath').get(function(){
    if(this.coverImage != null && this.coverImage != null){
        return `data:${this.coverImageType};charset = utf-8; base64, ${this.coverImage.toString('base64')}` 
    }
})

module.exports = mongoose.model('User', userSchema)