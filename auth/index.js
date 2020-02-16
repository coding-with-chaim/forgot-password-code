const express = require('express').Router;
const router = express();
const bcrypt = require("bcrypt");
const uuidv1 = require('uuid/v1');
const { createUser, getUser, updateUser } = require("../model/users");
const { getResetRequest, createResetRequest } = require("../model/resetRequests");
const sendResetLink = require("./sendEmail");

router.post("/signup", (req, res) => {
    bcrypt.hash(req.body.password, 10).then(hashed => {
        const user = {
            email: req.body.email,
            password: hashed,
        };
        createUser(user);
        res.status(201).json();
    })
});

router.post("/login", (req, res) => {
    const thisUser = getUser(req.body.email);
    if (thisUser) {
        bcrypt.compare(req.body.password, thisUser.password).then(result => {
            if (result) {
                const token = uuidv1();
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: "Access denied" });
            }
        });
    } else {
        res.status(401).json({ message: "Access denied" });
    }
});

router.post("/forgot", (req, res) => {
    const thisUser = getUser(req.body.email);
    if (thisUser) {
        const id = uuidv1();
        const request = {
            id,
            email: thisUser.email,
        };
        createResetRequest(request);
        sendResetLink(thisUser.email, id);
    }
    res.status(200).json();
});

router.patch("/reset", (req, res) => {
    const thisRequest = getResetRequest(req.body.id);
    if (thisRequest) {
        const user = getUser(thisRequest.email);
        bcrypt.hash(req.body.password, 10).then(hashed => {
            user.password = hashed;
            updateUser(user);
            res.status(204).json();
        })
    } else {
        res.status(404).json();
    }
});

module.exports = router;
