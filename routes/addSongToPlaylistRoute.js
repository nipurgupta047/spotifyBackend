const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

const uuid = require('uuid')

router.post('/addSongToPlaylist', async(req, res)=>{
    const username = req.body.username
    const _id = req.body._id
    const playlistSong = {
                            songId: req.body.songId,
                            songName: req.body.songName,
                            songImageUrl: req.body.songImageUrl
                        }

    try {
        const foundUser = await user.findOne({username:username});
        if(foundUser){
            for(let i = 0; i<foundUser.playlist.length; i++){
                if(foundUser.playlist[i]._id === _id){
                    let foundSong = false
                    for(let j=0;j<foundUser.playlist[i].playlistSongs.length;j++){
                        if(foundUser.playlist[i].playlistSongs[j].songId === playlistSong.songId)
                        {
                            foundSong = true
                            break
                        }
                    }
                    if(!foundSong){
                        foundUser.playlist[i].playlistSongs.push(playlistSong)
                        foundUser.save()                    
                        return res.send("Added to Playlist Succesfully");
                    }
                    else{
                        return res.send("Song Already in Playlist");
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

