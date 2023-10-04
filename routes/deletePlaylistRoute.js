const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

const uuid = require('uuid')

router.post('/deletePlaylist', async(req, res)=>{
    const username = req.body.username
    const _id = req.body._id

    try {
        const foundUser = await user.findOne({username:username});
        if(foundUser){
            for(let i=0; i<foundUser.playlist.length; i++){
                if(foundUser.playlist[i]._id === _id){
                    foundUser.playlist.splice(i,1)
                    foundUser.save()
                    return res.send('Playlist Deleted Successfully')  
                }
            }               
        }
            return res.send('No Match Found')

        } catch (error) {
            return res.send(error);
        }
})

module.exports = router

