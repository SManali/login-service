const express = require('express');
const router = express.Router();
const UserLoginSchema = require('../models/loginSchema');

router.post('/', (req, res) => {
    const userName = req.body.data.userName;
    const password = req.body.data.password;
    if (!(userName || password)) {
        res.status(500).json({ message: "Provide user name and password" });
    } else {
        UserLoginSchema.find({
            userName: userName,
            password: password
        }, (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: "Error while searching user" });
            } else if (data.length === 0) {
                res.status(500).json({ message: "User name or password is invalid" });
            } else {
                res.json({ message: "user login created successfully." })
            }
        });
    }
});