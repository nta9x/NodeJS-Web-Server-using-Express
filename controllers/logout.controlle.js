module.exports.logout = function(req, res) {
    res.clearCookie("userId");
    res.render('auth/login');
};