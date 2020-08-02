const express = require('express')
const router = express.Router()
require('../db/mongoose')
const User = require('../model/User')
const {ensureAuthenticated} = require('../config/auth')
const qr = require('qrcode')


const ImageMimeType = ['image/jpeg','image/png','image/gif']

router.get('/profile',ensureAuthenticated,async(req,res)=>{
    try{
    const src = ({
        ChildId:req.user.childID,
        Name:req.user.cname,
        Parent_Name:req.user.parentName,
        AadharID:req.user.aadharID,
        BaalId:req.user.baalId,
        PhoneNO:req.user.phoneNO,
        Address:req.user.addr,
        Gender:req.user.gender,
        DOB:req.user.dateVac,
        City:req.user.city,
        State:req.user.state
    })
    const url = await qr.toDataURL(JSON.stringify(src))
    res.render('profile',{
        user:req.user,
        src,
        url
    })
    }catch(err){
        console.log(err)
    }

})

router.post('/profile',ensureAuthenticated,async(req,res)=>{

    var Icover = req.body.cover

    saveCover(req.user,Icover)


    try{
        const user = await req.user.save()
        res.redirect('profile')
    
    }catch(err){
        console.log(err)
    }   



})


router.get('/change',(req,res)=>{
    res.render('change')
})

router.get('/update',ensureAuthenticated,(req,res)=>{
    res.render('update')
})

router.post('/update',ensureAuthenticated,(req,res)=>{
    var { update} = req.body;
    const user = User.findOne({})
    console.log(user.cname)
})


function saveCover(user,coverEncoded){
    if(coverEncoded == null) return
    const cover = JSON.parse(coverEncoded)
    if(cover != null && ImageMimeType.includes(cover.type)){
        user.coverImage = new Buffer.from(cover.data,'base64')
        user.coverImageType = cover.type
    }
}



module.exports = router