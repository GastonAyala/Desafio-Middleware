const express = require('express');
const router = express.Router();

const { services, design } = require('../controllers/services');

router.get("/", services)
router.get("/design", design)

module.exports = router;