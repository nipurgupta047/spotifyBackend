const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

const uuid = require('uuid')

router.post('/createPlaylist', async(req, res)=>{
    const username = req.body.username
    const playlist = {
                        _id: uuid.v4(),
                        playlistName: req.body.playlistName,
                        playlistSongs:[]
                    }
    
    try {
        const update = await user.updateOne({username:username}, { $push: { playlist: playlist } });
            if(update.modifiedCount === 1)
            return res.send("Created Playlist Succesfully");
            else
            return res.send('No Match Found')
    
        } catch (error) {
        return res.send(error);
        }
})

module.exports = router

