const express = require('express');
const { Register, SavePreferences, Login } = require('../Controller/user');
const { getGenres } = require('../Controller/genres');
const { getArtists } = require('../Controller/artists');
const { getAllConcerts, getConcertById, getRecommendedConcerts } = require('../Controller/concerts');
const { getUserById, saveTransaction } = require('../Controller/transactions');

const router = express.Router();

router.post('/register', Register);
router.post('/preferences', SavePreferences);
router.post('/login', Login);
router.get('/genres', getGenres);
router.get('/artists', getArtists);
router.get('/concerts', getAllConcerts);
router.get('/concerts/recommended', getRecommendedConcerts);
router.get('/concerts/:id', getConcertById); 
router.get('/user', getUserById);
router.post('/saveTransaction', saveTransaction);

module.exports = router;
