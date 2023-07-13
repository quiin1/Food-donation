import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const register = async (req, res, next) => {
    try {
        // req.body: {name:"", password:""}
        const user = new User(req.body)
        await user.save()

        const token = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET, {
            // expiresIn: '30s'
        })
        res.status(200).json({
            status: 'success',
            data: { token, userName: user.name }
        })
    } catch (error) {
        res.json(error)
    }
}

export const login = async (req, res, next) => {
    try {
        // *** authentication ***
        
        // isExisted?
        const user = await User.findOne({name: req.body.name})
        if (!user) {
            // Error: username is not correct 
            const err = new Error('Username is incorrect or is not existed')
            err.statusCode = 400
            return next(err)
        }

        // checkPassword
        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET, {
                // expiresIn: '30s'
            })
            res.status(200).json({
                status: 'success',
                data: {
                    token,
                    userName: user.name
                }
            })
        }
        else {
            // Error: Password is incorrect
            const err = new Error('Password is incorrect')
            err.statusCode = 400
            return next(err)
        }
    } catch (error) {
        res.json(error)
    }
}