const express = require('express');
const { Register, RegisterSeller, SavePreferences, Login, getProfile, updateProfile,getFavorites,changePassword } = require('../Controller/user');
const { getGenres } = require('../Controller/genres');
const { getArtists } = require('../Controller/artists');
const { getAllConcerts, getConcertById, getRecommendedConcerts, getRecommendedLandingConcerts, createConcert, getConcertsBySeller, upload } = require('../Controller/concerts');
const { getUserById, saveTransaction } = require('../Controller/transactions');
const { getAllData, getFriends } = require('../Controller/friends');
const { getMessages, sendMessage, getUserById: getChatUserById } = require('../Controller/chat');
const { addToCart, getCartItems, deleteCartItem, updateCartItemQuantity } = require('../Controller/keranjang');

const router = express.Router();

router.post('/register', Register);
router.post('/registerSeller', RegisterSeller);
router.post('/preferences', SavePreferences);
router.post('/login', Login);
router.get('/genres', getGenres);
router.get('/artists', getArtists);
router.get('/concerts', getAllConcerts);
router.get('/concerts/recommended', getRecommendedConcerts);
router.get('/concerts/recommendedLanding', getRecommendedLandingConcerts);
router.get('/concerts/:id', getConcertById);
router.post('/createConcert', upload.single('imageData'), createConcert);
router.get('/seller/concerts', getConcertsBySeller);
router.get('/user', getUserById);
router.post('/saveTransaction', saveTransaction);
router.get('/alldata', getAllData);
router.get('/friends', getFriends); 
router.post('/cart', addToCart);
router.get('/cart', getCartItems);
router.delete('/cart/:id', deleteCartItem);
router.put('/cart/:id', updateCartItemQuantity); 
router.get('/profile', getProfile);
router.post('/profile', updateProfile);
router.get('/favorites', getFavorites);
router.post('/change-password', changePassword);

// Chat routes
router.get('/chat/messages', getMessages);
router.post('/chat/send', sendMessage);
router.get('/chat/user/:userId', getChatUserById); 

module.exports = router;
