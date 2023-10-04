
const app = require('express')
const route = app.Router()

const mongoose = require('mongoose')
const spotifyPlaylist = require('../models/spotifyPlaylist')

route.post('/search/spotifyPlaylist', async(req, res)=>{
    
    try {
        const foundSpotifyPlaylist = await spotifyPlaylist.find({ playlistName: { $regex: `(?i)${req.body.searchValue}(?-i)` } });
          if(foundSpotifyPlaylist)
          return res.send(foundSpotifyPlaylist);  
      } catch (error) {
        return res.send(error);
      }
    
})

module.exports = route