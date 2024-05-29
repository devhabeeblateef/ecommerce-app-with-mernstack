import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        process.env.NODE_ENV === 'production' ? null : console.log(`Connected to ${conn.connection.host} sucessfully`)
    }catch (error){
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDB