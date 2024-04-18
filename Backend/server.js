require('dotenv').config();

const express = require('express');
const eventRoutes= require('./routes/events')
const mangoose= require('mongoose')

//express app
const app = express();

//moddleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

//connect to databae
mangoose.connect(process.env.MONGO_URI)
 .then((req, res)=>{    
    app.listen(process.env.PORT, ()=>{
        console.log('connected to DB and listenng on port 4000')
})
 })
 .catch(err =>{
    console.log(err)
 })

//routes
app.use('/api/events',eventRoutes)

//listen for requests
