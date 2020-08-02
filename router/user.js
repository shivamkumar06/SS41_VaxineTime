const express = require('express');
const router = express.Router();
const bycrypt = require('bycryptjs')
require('../db/mongoose')
const User = require('..model/User');
const passport = require('passport');
const {ensureAuthenticated} = require('../config/auth')


router.get('/',(req,res)=>{
    res.render('index');
})

//get req for register to be added later


//post router for register
router.post('/register',(req,res) => {
    const { cname, parentName, aadharID, dateVac, gender, addr, phoneNO, city, pin, state} = req.body;
    var name = req.body.cname.slice(0,4);
    var newCity = req.body.city.slice(0,4);

    dateVac.toString();

    var err = [];

    if(!cname || !parentName || !aadharID || !gender || !dateVac || !city || !pin || !state || !addr || !phoneNO) {
        err.push({msg: "Please fill all the fields!!"})
    }


    if(err.length > 0){
        res.render('register',{
            err,
            cname,
            parentName,
            aadharID,
            phoneNO,
            addr,
            gender,
            dateVac,
            city,
            pin,
            state
    
        });
    }else{
        User.findOne({aadharID:aadharID}&&{cname:cname})
        .then((user)=>{
            if(user){
                err.push({msg:'User Alerady exist!!'});
                res.render('register',{
                    err,
                    cname,
                    parentName,
                    aadharID,
                   phoneNO,
                    addr,
                    gender,
                    dateVac,
                    city,
                    pin,
                    state
            
                });
            }else{
                const newUser = new User({
                    cname,
                    parentName,
                    aadharID,
                    phoneNO,
                    addr,
                    gender,
                    dateVac,
                    city,
                    pin,
                    state,
                    childId:name +"-"+ Math.floor(Math.random()*100000)+"-" + Newcity+"1",
                    vaxine:[
                        'TT-1',
                        'TT-2',
                        'TT-Booster',
                        'BCG',
                        'Hepatitis B-BirthDose',
                        'OPV-0',
                        'OPV 1,2&3',
                        'DPT 1,2&3',
                        'Hepatitis B 1,2&3',
                        'PentavalentVaccine 1,2&3',
                        'Measles1',
                        'Vitamin A(1st Dose)',
                        'Japanese Encephalitis',
                        'DPT Booster-1',
                        'OPV Booster',
                        'Measles-2nd Dose',
                        'Japanese Encephalitis',
                        'Vitamin-A',
                        'DPT Booster-2',
                        'TT'
                    ]
                    
                });

                //hash Password
              

                   

                    newUser.save().then((user)=>{
                        req.flash('success_msg','Your Child Id id:- ' + user.childId);
                        res.redirect('/login');
                    }).catch((err)=>{
                        console.log(err);
                    })

                
            }
        })
    }
})

router.get('/login',(req,res)=>{
    res.render('signin');
})

module.exports = router