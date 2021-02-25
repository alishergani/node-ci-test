const express = require('express');
const router = express.Router();
const axios = require('axios');
const { response } = require('express');

let URL = "https://api.github.com/users"


router.get('/', (req, res) => {
    res.send("IT WORKS")
})

router.get('/users', (req, res) => {
    

    axios.get(URL)
        .then( (response) => {
            res.json(response.data)
        })
        // .then(data => {
        //     res.send("data")
        // })
    // res.send("data")
})


module.exports = router