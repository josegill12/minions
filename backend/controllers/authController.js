const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//login
router.get("/login", (req, res) => {
  res.json({ message: "we here" });
});

router.post("/login", async(req, res) => {
console.log(req.body);

  let userToLogin= await User.findone({email: req.body.email});

  if(userToLogin){
    bcrypt.compare(req.body.password, userToLogin.password, (err, match) => {
      if (match) {
        req.session.currentUser = userToLogin;
        req.session.email = userToLogin.email;

        res.json(userToLogin);
      }else{
        res.json({message: "Incorrect password"});
      }
    }
    );
  }
});


router.get("/signup", (req, res) => {
  res.json({ message: "we here" });
});
  
router.post("/signup", async (req, res) => {
  console.log(req.body);
  if(req.body.name && req.body.email && req.body.password){
    let plainTextPassword = req.body.password;
    bcrypt.hash(plainTextPassword, 10, async (err, hash) => {
      req.body.password = hash;
      let createdUser = await User.create(req.body);

    req.json(createdUser);
    });
}
});


router.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "logged out" });
});


module.exports = router;