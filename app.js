const express = require('express')
const app = express()
const tasks = require('./routes/routes')


const port = 3000;

app.listen(port, console.log('me may beo'))


app.use('/api/v1/tasks', tasks)
