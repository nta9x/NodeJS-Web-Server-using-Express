module.exports.postCreate = function(req, res, next){
    var err = [];
    if(!req.body.name){
        err.push('name is required');
    }
    if(!req.body.phone){
        err.push('phone is required');
    }
    if(err.length){
        res.render('users/create', {
            err: err,
            values: req.body
        });
        return;
    }
   
    res.locals.success = true;
    next();
};