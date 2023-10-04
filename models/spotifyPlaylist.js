const mongoose = require('mongoose')

const spotifyPlaylistSchema = new mongoose.Schema({
    _id:String,
    playlistName: String,
    songs: [String],

});

module.exports = mongoose.model('spotifyPlaylist',spotifyPlaylistSchema)