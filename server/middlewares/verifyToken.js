import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    /**
     * decode tokenKey -> userId
     * & check authorization
     */

    // Access Authorization from req header
    const authorization = req.headers['authorization']
    if (!authorization) {
        // Error: Unauthorized
        const error = new Error(`Unauthorized!`)
        error.statusCode = 401
        return next(error)
    }
    // Get token
    // Authorization: Beaer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFubmllIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjg5MDU3NDIwLCJleHAiOjE2ODkwNTc0NTB9.2f3X0PgOWzzKr8tOMisVyq2GBaD5C1jK3RI2ytCDyXg
    const token = authorization.split(' ')[1]

    // Verify token 
    const {userId} = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    // -> Invalid token: Error message: "jwt malformed"
    /** YOUR CODE HERE */

    // Assign req
    req.user = {userId}

    next()
}