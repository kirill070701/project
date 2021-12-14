const express = require("express")
const app = express()
const page = require("../views/js/page-numbering")
const socket = require('../views/js/socket')
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/electronic-enginnering', (req,res)=>{
    const url = 'mongodb+srv://Admin:159963357741@cluster0.mjotf.mongodb.net/newdb'
    const MongoClient = require('mongodb').MongoClient
    const mongoClient = new MongoClient(url, { 
        useUnifiedTopology: true,
        useNewUrlParser: true
     });

    mongoClient.connect((err, db)=>{
        if(err) throw err;
        var dbo = db.db("newdb")
        var p
        var b
        var c = 0
        
        if (req.query.p == null) {
            p=0
            cout()
            dbo.collection("Electronic-engineering").find({}).sort({_id:-1}).limit(10).toArray((err, results)=>{ 
                res.render('electronic-enginnering', {results: results, p:p, c: Math.floor(c)}) 
                db.close()
            })
        }else{
            cout()
            p = req.query.p
            var pp = Number.parseInt(p)+1
            dbo.collection("Electronic-engineering").find({}).sort({_id:-1}).limit((pp *10)).toArray((err, results)=>{  
                res.render('electronic-enginnering', {results: results, p:p, c: Math.floor(c)})    
                db.close()  
            })
            
        }

        function cout(){
            dbo.collection("Electronic-engineering").estimatedDocumentCount({}, function(error, numOfDocs){
                c =numOfDocs / 10
                var a = page.name
                b = a(numOfDocs)
                if (b > 0) {
                    c = c + 1
                }
            })
        }
        

    })

    
})



module.exports = app