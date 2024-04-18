const mongoose = require('mongoose');
const Schema = mongoose.Schema

const eventSchema= new Schema({
    eventtitle:{
        type: String,
        require: true,
    },
    eventname:{
        type: String,
        require: true,  
    },
    eventdate:{
        type: Date,
        require: true,   
    },
    eventvenue:{
        type: String,
        require: true,
    },
    eventlimit:{
        type: Number,
        require: true,
    },
    eventdescription:{
        type: String,
        require: true,
    },
    eventcost:{
        type: Number,
        require: true,
    },
    eventimage:{
        type: String,
        require: true,
    }
},{timeStamps:true})

module.exports =mongoose.model('Event', eventSchema)