const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const spotifyPlaylist = require('../models/spotifyPlaylist')

const uuid = require('uuid')

router.post('/createSpotifyPlaylist', async(req, res)=>{
    const newSpotifyPlaylist = new spotifyPlaylist(req.body)
    try {
        const foundPlaylist = await spotifyPlaylist.findOne({playlistName:newSpotifyPlaylist.playlistName})
          if(foundPlaylist)
          return res.send("PlayList Exist")
  
      } catch (error) {
        return res.status(404).send(error)
      }
  
    try {
        newSpotifyPlaylist._id = uuid.v4()
        await newSpotifyPlaylist.save()
        return res.send("Spotify Playlist Created")
      } catch (error) {
        return res.status(404).send('Could not create Spotify Playlist')
      } 
  
  })

module.exports = router

