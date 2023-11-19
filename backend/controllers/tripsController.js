const express = require('express');
const router = express.Router();
const User = require('../models/user');



//signup
router.get('/signup', (req, res) => {
    res.render('auth/signup')
});

//logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/')
});


module.exports = router;