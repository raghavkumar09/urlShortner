const mongoose = require('mongoose');
require('dotenv').config();

mongooseConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
    }).catch(err => {
        console.log(err);
    })
};


module.exports = mongooseConnection;