import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
    },
    password:
    {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    }}
)
export const user= mongoose.model('User',userSchema);