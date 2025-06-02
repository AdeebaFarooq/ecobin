import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/db.js';
dotenv.config();

const app=express();
app.use(express.json());
const port=5000;
app.get('/', (req, res) =>{
    res.send("Hello World");
})

// // using routes
 app.use("/api", userRoutes);

app.listen(5000, ()=>
{
    connectDb();
    console.log(`server is running on http://localhost:${port}`);
})