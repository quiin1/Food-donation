import express from 'express';
import { login, register } from '../controllers/authController.js'
var router = express.Router();

router.route('/register').post(register)
router.route('/login').post(login)

// /* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.send('respond with a resource');
// });

// module.exports = router;
export default router;
