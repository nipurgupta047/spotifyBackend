
const express = require('express')
const app = express()
require('dotenv').config()

const cors = require('cors')
app.use(cors())

const bodyParser = require("body-parser");
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
const port = 8000 || process.env.PORT;


const mongoose = require('mongoose')
const artist = require('./models/artist')
const song = require('./models/song')
const spotifyPlaylist = require('./models/spotifyPlaylist')
const user = require('./models/user')
const MONGODB_DATABASE_URL = process.env.MONGODB_DATABASE_URL
mongoose.connect(MONGODB_DATABASE_URL)
const con = mongoose.connection
con.on('open', async () => { 
})

const uuid = require('uuid')

// pending
const loginRoute = require('./routes/loginRoute')
app.post('/login', loginRoute)

const signupRoute = require('./routes/signupRoute')
app.post('/signup', signupRoute)

// pending
app.get('/logout', (req, res)=>{

})

const isLoggedInRoute = require('./routes/isLoggedInRoute')
app.post('/isLoggedIn', isLoggedInRoute)

const deleteAccountRoute = require('./routes/deleteUserRoute')
app.get('/deleteAccount', deleteAccountRoute)

const changePasswordRoute = require('./routes/changePasswordRoute')
app.post('/changePassword',changePasswordRoute)

const searchSongRoute = require('./routes/searchSongRoute')
app.post('/search/song',searchSongRoute)

const searchArtistRoute = require('./routes/searchArtistRoute')
app.post('/search/artist',searchArtistRoute)

const searchSpotifyPlaylistRoute = require('./routes/searchSpotifyPlaylistRoute')
app.post('/search/spotifyPlaylist',searchSpotifyPlaylistRoute)

const songByIdRoute = require('./routes/songByIdRoute')
app.get('/song/:songId', songByIdRoute)

const likeSongRoute = require('./routes/likeSongRoute')
app.post('/likeSong', likeSongRoute)

const getPlaylistsRoute = require('./routes/getPlaylistsRoute')
app.post('/getPlaylists', getPlaylistsRoute)

const getLikedSongsRoute = require('./routes/getLikedSongsRoute')
app.post('/getLikedSongs', getLikedSongsRoute)

const removeLikeSongRoute = require('./routes/removeLikeSongRoute')
app.post('/removeLikeSong', removeLikeSongRoute)

const artistByIdRoute = require('./routes/artistByIdRoute')
app.get('/artist/:artistId', artistByIdRoute)

const artistSongByIdRoute = require('./routes/artistSongByIdRoute')
app.get('/artistSongs/:artistId', artistSongByIdRoute)

const userPlaylistByIdRoute = require('./routes/userPlaylistByIdRoute')
app.post('/userPlaylist/:playlistId', userPlaylistByIdRoute)

const spotifyPlaylistRoute = require('./routes/spotifyPlaylistRoute')
app.get('/spotifyPlaylist', spotifyPlaylistRoute)

const spotifyPlaylistByIdRoute = require('./routes/spotifyPlaylistByIdRoute')
app.get('/spotifyPlaylistById/:spotifyPlaylistId', spotifyPlaylistByIdRoute)

const createPlaylistRoute = require('./routes/createPlaylistRoute')
app.post('/createPlaylist', createPlaylistRoute)

const deletePlaylistRoute = require('./routes/deletePlaylistRoute')
app.post('/deletePlaylist', deletePlaylistRoute)

const deleteSongFromPlaylistRoute = require('./routes/deleteSongFromPlaylistRoute')
app.post('/deleteSongFromPlaylist', deleteSongFromPlaylistRoute)

const addSongToPlaylistRoute = require('./routes/addSongToPlaylistRoute')
app.post('/addSongToPlaylist', addSongToPlaylistRoute)

const createSongRoute = require('./routes/createSongRoute')
app.post('/createSong', createSongRoute)

const createArtistRoute = require('./routes/createArtistRoute')
app.post('/createArtist', createArtistRoute)

const createSpotifyPlaylistRoute = require('./routes/createSpotifyPlaylistRoute')
app.post('/createSpotifyPlaylist', createSpotifyPlaylistRoute)

app.listen(port, ()=>{
    console.log("server started at port ", port);
})