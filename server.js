require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')



const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())



//rotes
app.use('/user', require('./routes/userRoutes'))
app.use('/api', require('./routes/upload'))
app.use('/file', require('./routes/uploadFiles'))
app.use('/student', require('./routes/studentRoute'))







//mongo db connection
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Mongodb db connected")
})

app.get('/',(req,res)=>{
    res.send('done');
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> {
    console.log('Server is running on port', PORT)
})