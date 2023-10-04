const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  _id: String,
  username:String,
  profileName:String,
  password:String,

  playlist:[{
    _id:String,
    playlistName: String,
    playlistSongs:[{
        songId:String,
        songName:String,
        songImageUrl:String,
    }]
  }],

  history:[{
    songId:String,
    songName:String,
    songImageUrl:String,
  }],

  likedSongs:[{
    songId:String,
    songName:String,
    songImageUrl:String,
  }],

  imageUrl:String,

});

module.exports = mongoose.model('user',userSchema)