var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/dashboard', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('dash',{email:req.session.mail})
    }else{
        res.redirect('/maindash');
    }
});
module.exports = router;