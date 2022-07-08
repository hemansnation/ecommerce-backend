const express = require('express')

const router = express.Router();

router.get('/create-or-update-user',  (req,res) => {
    res.json({
        data: "hello you just hit create-or-update-user API",
    })
})

module.exports = router;