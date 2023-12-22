const dotenv = require('dotenv');
const mongoose = require('mongoose');

const connectDB = async()=>
{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log('Connected Successfuly');
    }
    catch(err)
    {
        console.log(err);
    } 
}

module.exports = connectDB
