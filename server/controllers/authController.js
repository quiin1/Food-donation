import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const register = async (req, res, next) => {
    try {
        // name password
        const user = new User(req.body)
        await user.save()

        const token = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET, {
            // expiresIn: '30s'
        })
        return res.status(200).json({
            status: 'success',
            data: { token, userName: user.name }
        })
    } catch (error) {
        return res.json(error)
    }
}

export const login = async (req, res, next) => {
    try {
        // *** authentication ***
        
        // isExisted?
        const user = await User.findOne({name: req.body.name})
        if (!user) {
            return res.json("error1")
        }

        // checkPassword
        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET, {
                // expiresIn: '30s'
            })
            return res.status(200).json({
                status: 'success',
                data: {
                    token,
                    userName: user.name
                }
            })
        }
        else {
            // Error: password is incorrect
            return res.json("error")
        }
    } catch (error) {
        return res.json(error)
    }
}