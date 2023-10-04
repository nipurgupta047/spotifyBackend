
const app = require('express')
const route = app.Router()

const mongoose = require('mongoose')
const spotifyPlaylist = require('../models/spotifyPlaylist')

route.get('/spotifyPlaylistById/:spotifyPlaylistId', async(req, res)=>{
    
    try {
        const foundSpotifyPlaylist = await spotifyPlaylist.findOne({_id:req.params.spotifyPlaylistId});
          if(foundSpotifyPlaylist)
          return res.send(foundSpotifyPlaylist);
        else
            return res.send("No match found")
      } catch (error) {
        return res.send(error);
      }
    
})

module.exports = route