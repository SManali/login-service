const express = require('express');
const router = express.Router();
const UserLoginSchema = require('../models/loginSchema');

router.post('/', (req, res) => {
    const userName = req.body.data.userName;
    const password = req.body.data.password;
    if (!(userName || password)) {
        res.status(500).json({ message: "Provide user name and password" });
    } else {
        searchUser(userName).then(() => {
            createUser(userName, password).then(() => {
                res.json({ message: "user login created successfully." })
            }, err => {
                res.status(500).json({ message: err.message });
            });
        }, err => {
            res.status(500).json({ message: err.message });
        });
    }
});

const searchUser = (userName) => {
    return new Promise((resolve, reject) => {
        UserLoginSchema.find({
            userName: userName
        }, (err, data) => {
            if (err) {
                console.error(err);
                reject(new Error("Error while searching user"));
            } else if (data.length > 0) {
                reject(new Error("User name already exits"));
            } else {
                resolve();
            }
        });
    });
}

const createUser = (userName, password) => {
    return new Promise((resolve, reject) => {
        UserLoginSchema.create({
            userName: userName,
            password: password,
            createdAt: new Date()
        }, (err, data) => {
            if (err) {
                console.error(err);
                reject(new Error("Unexpected Error while creating user"))
            } else {
                resolve();
            }
        });
    });
}
