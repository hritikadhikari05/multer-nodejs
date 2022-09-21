const express = require("express");
const upload = require("../utils");
const User = require("../models/user");
const router = express.Router();




router.post("/fileupload", upload.single("img"), (req, res) => {
    const { name, email, password } = req.body;
    
    if (req.file) {
        path = req.file.path;
    }

    const user = new User({ name, password, email, profilePic: path });
    user.save().then((resu) => {
        res.send({ status: res.statusCode, body: user });
        console.log(resu)
    });

})



module.exports = router;