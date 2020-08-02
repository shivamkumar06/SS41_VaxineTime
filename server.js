const path = require('path')
const express = require('express');
const layouts = require('express-ejs-layouts')

const app = express();
require('dotenv').config();
const port = process.env.PORT



//public dir
const PublicDir = path.join(__dirname+'/public')
app.use(express.static(PublicDir))

//Ejs setup
app.set('view engine','ejs')
app.set('views','./views')

//layouts
 app.use(layouts)


//router
app.use(require('./router/user'))



app.listen(port,()=>console.log(`server up on ${port}`))