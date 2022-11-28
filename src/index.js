const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')
const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://sachinfu:2906@sachinfu.fcpe6tc.mongodb.net/group26Database' , {
    useNewUrlParser : true
})
.then(()=>console.log("mongodb is connected"))
.catch((error)=> console.log(error))

app.use('/' , route)

app.listen((process.env.PORT || 3000) , function() {
    console.log("running on port 3000")
})