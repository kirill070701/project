const express = require("express")
const app = express()
const page = require("../views/js/page-numbering")

app.get('/gaming-industry', (req,res)=>{

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
            dbo.collection("Gaming-industrie").find({}).sort({_id:-1}).limit(10).toArray((err, results)=>{ 
                res.render('gaming-industry', {results: results, p:p, c: Math.floor(c)}) 
                db.close()
            })
        }else{
            cout()
            p = req.query.p
            var pp = Number.parseInt(p)+1
            dbo.collection("Gaming-industrie").find({}).sort({_id:-1}).limit((pp *10)).toArray((err, results)=>{  
                res.render('gaming-industry', {results: results, p:p, c: Math.floor(c)}) 
                db.close()     
            })
            
        }

        function cout(){
            dbo.collection("Gaming-industrie").estimatedDocumentCount({}, function(error, numOfDocs){
                c =numOfDocs / 10
                var a = page.name
                b = a(numOfDocs)
                if (b > 0) {
                    c = c + 1
                }
            })
        }
        

    })
    



    //res.render('gaming-industry')

    
})



module.exports = app