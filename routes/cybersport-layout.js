const express = require('express')
const app = express()


app.get('/cybersport/:id', (req, res)=>{
    
    const url = 'mongodb+srv://Admin:159963357741@cluster0.mjotf.mongodb.net/newdb'
    const MongoClient = require('mongodb').MongoClient
    const mongoClient = new MongoClient(url, { 
        useUnifiedTopology: true,
        useNewUrlParser: true
     });

    var address = "http://127.0.0.1:3000/cybersport/" + req.params['id']
    mongoClient.connect((err, db)=>{
        if(err) throw err;
        var dbo = db.db("newdb")
        dbo.collection("Cybersports").find({_id: Number.parseInt(req.params['id'])}).toArray((err, results)=>{  
            res.render('layout-cybersport', {results: results, name:"Cybersport", reference: address}) 
            db.close()
        })

        
    })

    
})

module.exports = app