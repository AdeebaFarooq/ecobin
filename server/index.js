import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/db.js';
import userRoutes  from './routes/user.js';
import recyclerRoutes from './routes/recycler.js';
import pickupRequestRoutes from './routes/pickuprequest.js';

import cors from 'cors';
dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
const port=5000;
app.get('/', (req, res) =>{
    res.send("Hello World");
})

// // using routes
 app.use("/api", userRoutes);
 app.use("/api", recyclerRoutes); 
 app.use("/api", pickupRequestRoutes);
 

app.listen(5000, ()=>
{
    connectDb();
    console.log(`server is running on http://localhost:${port}`);
})