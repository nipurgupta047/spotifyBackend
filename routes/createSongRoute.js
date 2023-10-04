const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const song = require('../models/song')

const uuid = require('uuid')

router.post('/createSong', async(req, res)=>{
    const newSong = new song(req.body);
    newSong._id = uuid.v4()
    newSong.noOfLikes = 0;
    
    try {
        await newSong.save()
        return res.send("Song has been added")
      } catch (error) {
        return res.status(404).send('Could not add song');
      } 
  
  })

module.exports = router

