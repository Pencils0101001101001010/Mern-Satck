require('dotenv').config()

const mongoose = require('mongoose')

const express = require('express');
const workoutRoutes = require('./routes/workouts')

//express is being stored in this const:
const app = express();


//middleware 
app.use(express.json())//=> looks if there is any data to the body and if there is it requests that

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//Routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    //Listen for request:
app.listen(4000, () => {
    console.log('Connected to  DB and listening on port', process.env.PORT);
})

 })
 .catch((error) => {
    console.log(error)
 })



