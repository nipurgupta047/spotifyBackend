const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
  _id: String,
  songName: String,
    artist:[{
        artistId: String,
        artistName: String,
    }],   
  noOfLikes: Number,
  imageUrl: String,
  songUrl: String,

});

module.exports = mongoose.model('song',songSchema)