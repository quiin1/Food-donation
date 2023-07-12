import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {type: String, unique: true, trim: true, required: [true, 'Username must be required']},
    password: {type: String, trim: true, required: [true, 'Password must be required'],
        // minlength:[6, 'Password must be at least 6 characters']
    } 
}, { timestamps: true })

// hash password before add new user in db 
userSchema.pre('save', function(next) {
    let user = this 
    bcrypt.hash(user.password, 10, function(error, hash) {
        if (error) {
            return next(error);
        }
        else {
            user.password = hash
            next()
        }
    })
})

const User = mongoose.model('User', userSchema);
export default User