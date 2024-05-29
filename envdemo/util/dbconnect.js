const mongoose = require('mongoose');
require('dotenv').config();

// connect to database
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CLUSTER);
        console.log('Connected to MongoDB');
    }catch (error){
        console.error('Error connecting to MongoDB:', error);
    }
}


module.exports = connectDB;