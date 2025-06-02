import mongoose from "mongoose";

const recyclerSchema = new mongoose.Schema({
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
        default: "recycler",
    }}
)
export const Recycler= mongoose.model('Recycler',userSchema);