import express from 'express';

import mongoose from 'mongoose';

import { validationResult } from 'express-validator';
import { postCreateValidation, registerValidation } from './auth.js';
import { loginValidation } from './auth.js';
import checkAuth from './checkAuth.js';

import { register, login, getMe } from './functions.js';
import * as postManager from './postManager.js';


mongoose.connect('mongodb+srv://admin:88888888@cluster0.laqq1zj.mongodb.net/blog?retryWrites=true&w=majority',)
    .then(() => console.log('db is ok'))
    .catch((err) => console.log('db is pizdec', err));

/*
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');*/
const app = express();
/*app.use('/path', express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: false }));*/


app.use(express.json());

app.get('/', (req, res) => {
    //console.log(req);
    posttest();
    res.send('123123');
});



app.post('/register', registerValidation, register);
app.post('/login', loginValidation, login);
app.get('/me', checkAuth, getMe);
app.post('/posts', checkAuth, postCreateValidation, postManager.create);
app.get('/posts/:id', postManager.getOne);
app.get('/test/:xui/', (req, res) => {

    console.log(req.params);
    console.log(req.query);
    res.send(index.html.body);
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('vse ok');
});


function posttest() {
    fetch('http://localhost:4444/register', {
        method: 'POST',
        body: JSON.stringify({
            'fullname': 'vasil vasilyovich',
            'email': "zolupa7@zlp.com",
            'password': "zolupa123",
        })
    })
        .then(results => results.json())
        .then(console.log);

}
/*document.addEventListener('butt', function () { });
function xz(value) {
    document.getElementById('butt').value;

    console.log(value);
}*/
//posttest();
