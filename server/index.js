const express = require('express');
const app = express();
const dbConnect = require('./config/database.js');
const allRoutes = require('./routes/allRoutes');
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
const PORT = process.env.PORT || 8000;


// app.use(cors());


// data base connection
dbConnect();

// version routes
app.use('/api/v1', allRoutes);



// by default route
app.get('/', (request, response) => {
	console.log('login pe hain');
	response.send(`<h1>This is html</h1>`);
});


// server listening
app.listen(PORT,()=>
{
    console.log('server is running',PORT);
})

