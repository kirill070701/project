const express = require('express')
const app = express()


app.get('/contacts', (req, res)=>{
    res.render('contacts') 
})

module.exports = app