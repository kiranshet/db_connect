const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const  connectDb  = require('./util/dbconnect');
//console.log("---dbconnection check--", connectDb);

require('dotenv').config();

const port = 3000;
//console.log("--port", port);

const app = express();
app.use(express.json());

app.use('/api', routes);

//connectDb();


app.listen(port, async()=>{
    await connectDb();
    console.log(`Server is Started at ${port}`)
});


