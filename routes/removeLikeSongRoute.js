const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

const uuid = require('uuid')

router.post('/removeLikeSong', async(req, res)=>{
    const username = req.body.username
    const songId = req.body.songId

    try {
        const foundUser = await user.findOne({username:username});
        if(foundUser){
            for(let i=0; i<foundUser.likedSongs.length; i++){
                if(foundUser.likedSongs[i].songId === songId){
                    foundUser.likedSongs.splice(i,1)
                    foundUser.save()
                    return res.send('Removed from library Successfully')  
                }
            }               
        }
            return res.send('No Match Found')

        } catch (error) {
            return res.send(error);
        }
})

module.exports = router

