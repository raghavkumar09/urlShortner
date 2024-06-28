const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    views: [{ timestamps: { type: Number} }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Url', urlSchema)