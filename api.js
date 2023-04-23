const express=require('express');
const api=express();
const student=require("./models/students")
const port=process.env.POST || 3001;
require("./db/conn")

api.use(express.json())
api.post('/students',(req,res)=>{
    console.log(req.body);
    const user=new student(req.body)

   // res.send("Hello from other side");
    user.save().then(()=>{
         res.status(201).send(user);
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

api.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})