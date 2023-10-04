const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
    _id:String,
    artistName: String,
    imageUrl: String,
    songs: [{
        songId:String, 
        songName:String,
    }],

});

module.exports = mongoose.model('artist',artistSchema)