import mongoose from "mongoose";

export const connectDb= async()=>
{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('database connected');
    }
catch{
    console.log("Error connecting to MongoDB")
}
}