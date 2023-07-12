import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'
import postRoute from './routes/postRoute.js'

dotenv.config()
connectDB()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

// server -> route -> controller (update db)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/posts', postRoute)

// test 
// app.get('/api/v1/accounts', (req, res) => {
//     res.json({ 
//         data: [
//             {
//                 id: 1,
//                 username: 'annie',
//                 password: '123'
//             },
//             {
//                 id: 2,
//                 username: 'an   ',
//                 password: '1212'
//             }
//         ]
//     })
// })

// app.post('/login', (req, res) => {
//     // Authen
//     // Author 
//     const data = req.body // { username: 'annie' }
//     const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
//         expiresIn: '30s'
//     })
//     res.json({ 
//         accessToken, 
//         username : data.username 
//     })
// })

// function authenToken(req, res, next) {
//     const authorizationHeader = req.headers['authorization']
//     // 'Beaer [token]'
//     const token = authorizationHeader.split(' ')[1]
//     if (!token) res.sendStatus(401)
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
//       console.log(err, data)
//       if (err) res.sendStatus(403)
//       next()
//     })
// }

// app.get('/data/dashboard', authenToken, (req, res) => {
//     res.json({ 
//         status: 'Success', 
//         data: { 
//             username: req.body
//         }
//     })
// })

// app.get('/data/dashboard/', authenToken, (req, res) => {
//     res.json({ 
//         status: 'Success', 
//         data: { 
//             username : req.body
//         }
//     })
// })

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});