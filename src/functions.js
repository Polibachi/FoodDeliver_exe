import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import UserModel from "./user.js";
import { registerValidation } from './auth.js';

export const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email: req.body.email,
            fullname: req.body.fullname,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash
        });

        const user = await doc.save();

        const token = jwt.sign({
            _Id: user.id,
        },
            'kluch',
            {
                expiresIn: '30d',
            }
        )

        res.json({ user, token, });

        const { passwordHash, ...userData } = user._doc;

        res.json({ userData, token, });



    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'cant register(',
        });
    }
    posttest();
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                Message: 'nema takoho user`a',
            });
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
        if (!isValidPass) {
            return res.status(400).json({
                message: 'wrong log or pass'
            });
        }

        const token = jwt.sign({
            _Id: user.id,
        },
            'kluch',
            {
                expiresIn: '30d',
            }
        )

        res.json({ user, token, });



    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'shos pishlo ne tak',
        });
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);
        //console.log(UserModel.findOne(req.ObjectId));

        if (!user) {
            //console.log(user);
            return res.status(404).json({
                message: 'no such user',

            });
        }

        res.json({ user, });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'shos pishlo ne tak',
        });
    }
};


/*function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 550);
}

$(document).on("scroll", function () {
    if ($(window).scrollTop() === 0)
        $("header").removeClass("fixed");
    else
        $("header").attr("class", "fixed");
});*/