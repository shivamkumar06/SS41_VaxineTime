module.exports = {
    ensureAuthenticated: (req,res,next) => {
        if(req.isAuthenticated()){
            return next()
        }
        req.flash('error_msg','please login to see the resource!!')
        res.redirect('/login')
    }
}