const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

const uuid = require('uuid')

router.post('/getPlaylists', async(req, res)=>{
    const username = req.body.username

    try {
        const foundUser = await user.findOne({username:username});
        if(foundUser){
            return res.send(foundUser.playlist)     
        }
            return res.status(404).send('No Match Found')

        } catch (error) {
            return res.status(404).send(error);
        }
})

module.exports = router

