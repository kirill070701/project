const express = require('express')
const app = express()


app.get('/advertisement', (req, res)=>{
            res.render('advertisement') 
})

module.exports = app