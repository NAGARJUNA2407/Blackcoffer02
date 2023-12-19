// this is demo route

const express = require('express');
const router = express.Router();
const {testComp} = require('../controllers/testComp.js');
const sendUser = require('../controllers/sendUser.js');
const getUser = require('../controllers/getUser.js');


router.get('/test',testComp)
router.post('/senduser', sendUser);
router.get('/getuser', getUser);


module.exports = router;