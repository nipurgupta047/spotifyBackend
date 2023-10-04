const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

const uuid = require('uuid')

router.post('/deleteSongFromPlaylist', async(req, res)=>{
    const username = req.body.username
    const songId = req.body.songId
    const playlistId = req.body.playlistId

    try {
        const foundUser = await user.findOne({username:username});
        if(foundUser){
            for(let i=0; i<foundUser.playlist.length; i++){
                if(foundUser.playlist[i]._id === playlistId){
                    for(let j=0;j<foundUser.playlist[i].playlistSongs.length;j++){
                        if(foundUser.playlist[i].playlistSongs[j].songId === songId){
                            foundUser.playlist[i].playlistSongs.splice(j,1)
                            foundUser.save()
                            return res.send('Song Deleted Successfully')  
                        }
                    }
                    
                }
            }               
        }
            return res.send('No Match Found')

        } catch (error) {
            return res.send(error);
        }
})

module.exports = router

