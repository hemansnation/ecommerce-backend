const express = require('express')

const router = express.Router();

router.get('/user',  (req,res) => {
    res.json({
        data: "hello you just hit user API",
    })
})

module.exports = router;