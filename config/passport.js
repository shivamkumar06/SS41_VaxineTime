const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
require('../db/mongoose')
const User = require('../model/User')

module.exports = function(passport){
    passport.use(
        new LocalStrategy({usernameField:'childID'},(childID,aadharID,done)=>{
            User.findOne({childID:childID,aadharID:aadharID}).then((user)=>{
                if(!user){
                    return done(null,false,{message:'Worng Credentials'})
                }else{
                    return done(null,user)
                }
            }).catch((err)=>console.log(err))
        })
    )
    passport.serializeUser((user,done)=>{
        done(null,user.id)
    });

    passport.deserializeUser((id,done)=>{
        User.findById(id, function(err,user){
            done(err,user)
        })
    })
}