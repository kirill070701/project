const express = require("express")
const app = express()


app.use(function(req, res) {
    res.type('text/plain')
    res.status(404)
    res.send('404 not found')
})



module.exports = app