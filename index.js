require('dotenv').config();
const connectDB = require('./config/database')
const express = require('express');
const ProductRouter = require('./routes/product');
const path=require('path');
const cors=require('cors');

const server = express();

// Middleware to parse JSON bodies
server.use(express.json());
server.use(cors());
server.use( '/api',ProductRouter);
server.use(express.static(path.resolve(__dirname,'build')));
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'));
})

//connect to db
connectDB();

// Use the router with the specified mount path

server.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:8080");
});
