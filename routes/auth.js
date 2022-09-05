const express = require('express')

const router = express.Router();

// middleware
const { authCheck } = require("../middlewares/auth")

// controller
const { createOrUpdateUser } = require("../controllers/auth");

router.post('/create-or-update-user', authCheck , createOrUpdateUser);

module.exports = router;