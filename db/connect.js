//const connectionString = 'mongodb+srv://legiabao191004:Whqh55CixI82l0qs@taskmanagernodejsexpres.ktpgj8x.mongodb.net/';

const mongoose = require('mongoose')

const connectDB = (url) =>{
    return mongoose.connect(url).then(()=>console.log("Connected to database")).catch((err) => console.log(err))
}

module.exports = connectDB;
