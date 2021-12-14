const express = require('express')
const app = express()


app.get('/computer-games/:id', (req, res)=>{
    
    const url = 'mongodb+srv://Admin:159963357741@cluster0.mjotf.mongodb.net/newdb'
    const MongoClient = require('mongodb').MongoClient
    const mongoClient = new MongoClient(url, { 
        useUnifiedTopology: true,
        useNewUrlParser: true
     });

    var address = "http://stormgames.ru/cybersport/" + req.params['id']
    mongoClient.connect((err, db)=>{
        if(err) throw err;
        var dbo = db.db("newdb")
        dbo.collection("Computer-games").find({_id: Number.parseInt(req.params['id'])}).toArray((err, results)=>{  
            res.render('layout-computer-games', {results: results, name:"Компьютерные игры", reference: address}) 
            db.close()
        })
    })
})
module.exports = app