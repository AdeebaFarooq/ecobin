import express from 'express';
const app=express();
const port=5000;
app.get('/', (req, res) =>{
    res.send("Hello World");
})

app.listen(5000, ()=>
{
    console.log(`server is running on http://localhost:${port}`);
})