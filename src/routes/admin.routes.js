const express = require('express');
const router = express.Router();

const { admin } = require('../controllers/admin');
const { checkAdmin } = require('../middlewares');

router.get("/", checkAdmin, admin)

module.exports = router;