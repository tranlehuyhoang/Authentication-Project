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
        const passOk = await user.matchPassword(password);
        console.log(user.password, password)



        if (!passOk) {
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
    // console.log(req.app.locals.OTP)
    try {
        const { username } = req.query;


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
const getUserAvatar = asyncHandler(async (req, res) => {
    // console.log(req.app.locals.OTP)
    try {
        const { username } = req.query;


        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(404).send({ error: "Couldn't Find the User" });
        }

        /** remove password from user */
        const { profile, ...rest } = user.toObject();

        return res.status(200).send(profile);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
});
const updateUser = asyncHandler(async (req, res) => {
    try {
        const { token } = req.query;
        console.log('TOKEN', token)
        // console.log(req.user)

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        const userId = decoded.userId
        if (userId) {
            const body = req.body;

            // update the data
            await UserModel.updateOne({ '_id': userId }, body);

            return res.status(200).send({ msg: "Record Updated...!" });
        } else {
            return res.status(405).send({ error: "User Not Found...!" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
});
const generateOTP = asyncHandler(async (req, res) => {
    req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
    res.status(201).send({ code: req.app.locals.OTP })
});

const verifyOTP = asyncHandler(async (req, res) => {

    const { code } = req.query;
    if (parseInt(req.app.locals.OTP) === parseInt(code)) {
        req.app.locals.OTP = null; // reset the OTP value
        req.app.locals.resetSession = true; // start session for reset password
        return res.status(201).send({ msg: 'Verify Successsfully!' })
    }
    return res.status(400).send({ error: "Invalid OTP" });
});

const resetPassword = asyncHandler(async (req, res) => {
    try {
        if (!req.app.locals.resetSession) {
            return res.status(440).send({ error: "Session expired!" });
        }

        const { username, password } = req.body;

        try {
            const user = await UserModel.findOne({ username });

            if (!user) {
                return res.status(404).send({ error: "Username not found" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            await UserModel.updateOne(
                { username: user.username },
                { password: hashedPassword }
            );

            req.app.locals.resetSession = false; // reset session
            return res.status(201).send({ msg: "Record Updated...!" });
        } catch (error) {
            return res.status(500).send({ error: "Unable to update password" });
        }
    } catch (error) {
        return res.status(401).send({ error });
    }
});

export {
    register, login, getUser, verifyUser, updateUser, generateOTP, verifyOTP, resetPassword, getUserAvatar
}

