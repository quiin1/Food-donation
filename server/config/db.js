import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connectDB = async () => {
    try {
        // console.log(process.env.DB_URI)
        const conn = await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("DB connection successfully")
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

export default connectDB