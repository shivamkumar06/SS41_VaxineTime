const path = require('path');
const express = require('express');
const layouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const ejs = require('ejs')


const app = express();
require('dotenv').config();
const port = process.env.PORT

//config passport
require('./config/passport')(passport)

//body Parser
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded(({limit : '50mb', extended: true})));

//session
//express Session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//flash
app.use(flash());

//global variable
    app.use((req,res,next) => {
        res.locals.success_msg = req.flash('success_msg')
        res.locals.error_msg = req.flash('error_msg')
        res.locals.error = req.flash('error')
        next();
    })



//public dir
const publicDir = path.join(__dirname+'/public');
app.use(express.static(publicDir));

//Ejs setup
app.set('view engine','ejs')
app.set('views','./views')

//layouts
 app.use(layouts)


//router
app.use(require('./router/user'))
app.use(require('./router/index'))


app.listen(port,()=>console.log(`Server up in ${process.env.NODE_ENV} and on port:- ${port}`))