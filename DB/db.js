import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const mongooseConection = ()=>{
        mongoose.connect(process.env.MONGODB_URL)
        .then(()=>console.log(`✅ Mongo DB is connected`))
        .catch((err)=>console.log(err))
}

export default mongooseConection;