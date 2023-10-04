const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const artist = require('../models/artist')

const uuid = require('uuid')

router.post('/createArtist', async(req, res)=>{
    const newArtist = new artist(req.body);
    newArtist._id = uuid.v4()

    try {
        await newArtist.save()
        return res.send("Artist has been added")
      } catch (error) {
        return res.status(404).send('Could not add artist');
      } 
  
  })

module.exports = router

