const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

const uuid = require('uuid')

router.post('/likeSong', async(req, res)=>{
    const username = req.body.username
    const song = {
        songId: req.body.songId,
        songName: req.body.songName,
        songImageUrl: req.body.songImageUrl
    }

    try {
        const foundUser = await user.findOne({username:username});
        if(foundUser){
            foundUser.likedSongs.push(song)
            foundUser.save()
            return res.send('Added to library Successfully')     
        }
            return res.send('No Match Found')

        } catch (error) {
            return res.send(error);
        }
})

module.exports = router

