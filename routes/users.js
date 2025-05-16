const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const { getMe, updateUsername, deleteUser } = require('../controllers/authController');

router.get('/', (req, res) => {
    res.send('Liste des utilisateurs');
});

router.get('/me', verifyToken, getMe);
router.put('/update', verifyToken, updateUsername);
router.delete('/delete', verifyToken, deleteUser);

module.exports = router;
