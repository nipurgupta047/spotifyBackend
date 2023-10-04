const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

const uuid = require('uuid')

router.post('/getLikedSongs', async(req, res)=>{
    const username = req.body.username

    try {
        const foundUser = await user.findOne({username:username});
        if(foundUser){
            return res.send(foundUser.likedSongs)     
        }
            return res.status(404).send('No Match Found')

        } catch (error) {
            return res.status(404).send(error);
        }
})

module.exports = router

