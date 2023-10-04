
const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

router.get('/deleteAccount', async(req, res)=>{

    const username = req.body.username
    const password = req.body.password
    try {
        const deleted =  await user.deleteOne({ username:username, password:password });
        if(deleted.deletedCount === 1)
        return res.send("User Deleted Successfully");
        else
        return res.send('User Does not exist')
    } catch (error) {
        return res.send('Cannot delete user');
    }

})

module.exports = router