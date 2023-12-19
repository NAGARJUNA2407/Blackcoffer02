// config/database.js

const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose
        .connect(process.env.DB_URL)
        .then(() => {
            console.log('db connection successful');
        })
        .catch((error) => {
            console.log('db connection error', error);
        });
};

module.exports = dbConnect;
