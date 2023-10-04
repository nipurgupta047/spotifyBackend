const app = require('express')
const route = app.Router()

const mongoose = require('mongoose')
const song = require('../models/song')

route.get('/artistSongs/:artistId', async(req, res)=>{
    let foundSongs = []
    try {
        const fetchedsongs = await song.find();
        if(song)
        {
          for (let i = 0; i < fetchedsongs.length; i++) {
            for (let j = 0; j <fetchedsongs[i].artist.length; j++) {
              if(fetchedsongs[i].artist[j].artistId === req.params.artistId)
                foundSongs.push(fetchedsongs[i])            
            }
          }
            return res.send(foundSongs); 
        } 
      } catch (error) {
        res.send(error)
      }
    
})

module.exports = route