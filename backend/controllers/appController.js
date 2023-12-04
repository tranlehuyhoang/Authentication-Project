import UserModel from '../models/User.model.js'
import asyncHandler from 'express-async-handler';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import ENV from '../config.js'
import otpGenerator from 'otp-generator';

/** middleware for verify user */
const verifyUser = asyncHandler(async (req, res, next) => {
    try {

        const { username } = req.method == "GET" ? req.query : req.body;

        // check the user existance
        let exist = await UserModel.findOne({ username });
        if (!exist) return res.status(404).send({ error: "Can't find User!" });
        next();

    } catch (error) {
        return res.status(404).send({ error: "Authentication Error" });
    }
})


/** POST: http://localhost:8080/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/
const register = asyncHandler(async (req, res) => {
    try {
        const { username, password, profile, email } = req.body;
        const user_username = await UserModel.findOne({ username });
        const user_email = await UserModel.findOne({ email });
        if (user_username) {
            return res.status(300).send('Please use a unique username');
        }
        if (user_email) {
            return res.status(300).send('Please use a unique email');
        }
        const newUser = new UserModel({ username, password, profile, email });
        await newUser.save();
        return res.status(200).send('User registered successfully');
    } catch (error) {
        console.log(error)
    }
});

const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username });


        const passwordCheck = await bcrypt.compare(password, user.password);

        if (!passwordCheck) {
            return res.status(400).send({ error: "Incorrect password" });
        }
        const token = jwt.sign(
            {
                userId: user._id,
                username: user.username
            },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        );

        res.cookie('jwt', token, {
            httpOnly: false,
            secure: false, // Allow access from both HTTP and HTTPS
            sameSite: 'strict', // Prevent CSRF attacks
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });

        return res.status(200).send({
            msg: "Login Successful",
            username: user.username,
            token
        });


    } catch (error) {
        return res.status(500).send({ error });
    }
});


const getUser = asyncHandler(async (req, res) => {
    try {
        const { username } = req.params;
        console.log(username);

        if (!username) {
            return res.status(400).send({ error: "Invalid Username" });
        }

        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(404).send({ error: "Couldn't Find the User" });
        }

        /** remove password from user */
        const { password, ...rest } = user.toObject();

        return res.status(200).send(rest);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
});
const updateUser = asyncHandler(async (req, res) => {
    try {
        const { _id } = req.user;
        console.log(req.user)
        if (_id) {
            const body = req.body;

            // update the data
            await UserModel.updateOne({ _id: _id }, body);

            return res.status(200).send({ msg: "Record Updated...!" });
        } else {
            return res.status(401).send({ error: "User Not Found...!" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
});

export {
    register, login, getUser, verifyUser, updateUser
}

