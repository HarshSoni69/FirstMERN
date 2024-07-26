require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.DATABASE_URL;
async function connectDB() {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("Successfully connected to MongoDB");
      
      // Your database operations go here
  
    } catch (e) {
      console.error("Error connecting to MongoDB:", e);
    }
  };
module.exports=connectDB;  