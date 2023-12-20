const express = require('express')
const app = express()
const tasks = require('./routes/routes')

const connectDB = require('./db/connect')

require('dotenv').config()

const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log('me may beo'))
    } catch (error) {
        console.log(error)
    }
}

app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)
start()