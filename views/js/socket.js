module.exports = {
    gaming: function(io){ 
        setTimeout(() => {
            console.log('gaming podcklycheno')
            io.on('connection', (socket) => {
        
                const url = 'mongodb+srv://Admin:159963357741@cluster0.mjotf.mongodb.net/statie'
                const MongoClient = require('mongodb').MongoClient
                const mongoClient = new MongoClient(url, { 
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                 });
            
                mongoClient.connect((err, db)=>{
                    if(err) throw err;
                    var dbo = db.db("newdb")
            
                    dbo.collection("Gaming-industrie").find({}).sort({_id:-1}).limit(3).toArray((err, results)=>{ 
                        console.log("ok")
                        var a = [{"image": String(results[0].picture), "name": results[0].title, "id": results[0]._id},
                            {"image": String(results[1].picture), "name": results[1].title, "id": results[1]._id},
                            {"image": String(results[2].picture), "name": results[2].title, "id": results[2]._id}]
                        socket.emit('gaming', a);
                        console.log("new socket gaming ok")
                        db.close()
                    })
                    
                })
            });
        }, 0);
        return 0;
    },
    cybersport: function(io){ 
        setTimeout(() => {
            console.log('cybersport podcklycheno')
            io.on('connection', (socket) => {
        
                const url = 'mongodb+srv://Admin:159963357741@cluster0.mjotf.mongodb.net/statie'
                const MongoClient = require('mongodb').MongoClient
                const mongoClient = new MongoClient(url, { 
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                 });
            
                mongoClient.connect((err, db)=>{
                    if(err) throw err;
                    var dbo = db.db("newdb")
            
                    dbo.collection("Cybersports").find({}).sort({_id:-1}).limit(3).toArray((err, results)=>{ 
                        console.log("ok")
                        var a = [{"image": String(results[0].picture), "name": results[0].title, "id": results[0]._id},
                            {"image": String(results[1].picture), "name": results[1].title, "id": results[1]._id},
                            {"image": String(results[2].picture), "name": results[2].title, "id": results[2]._id}]
                    
                        socket.emit('cybersport', a);
                        console.log("new socket cybersport ok")
                        db.close()
                    })
                    
                })
            });
        }, 0);
        return 0;
    },
    computerGames: function(io){ 
        setTimeout(() => {
            console.log('computer-games podcklycheno')
            io.on('connection', (socket) => {
        
                const url = 'mongodb+srv://Admin:159963357741@cluster0.mjotf.mongodb.net/statie'
                const MongoClient = require('mongodb').MongoClient
                const mongoClient = new MongoClient(url, { 
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                 });
            
                mongoClient.connect((err, db)=>{
                    if(err) throw err;
                    var dbo = db.db("newdb")
            
                    dbo.collection("Computer-games").find({}).sort({_id:-1}).limit(3).toArray((err, results)=>{ 
                        console.log("ok")
                        var a = [{"image": String(results[0].picture), "name": results[0].title, "id": results[0]._id},
                            {"image": String(results[1].picture), "name": results[1].title, "id": results[1]._id},
                            {"image": String(results[2].picture), "name": results[2].title, "id": results[2]._id}]
                    
                        socket.emit('computer-games', a);
                        console.log("new socket computer-games ok")
                        db.close()
                    })
                    
                })
            });
        }, 0);
        return 0;
    },
    electronicEnginnering: function(io){ 
        setTimeout(() => {
            console.log('electronic-enginnering podcklycheno')
            io.on('connection', (socket) => {
        
                const url = 'mongodb+srv://Admin:159963357741@cluster0.mjotf.mongodb.net/statie'
                const MongoClient = require('mongodb').MongoClient
                const mongoClient = new MongoClient(url, { 
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                 });
            
                mongoClient.connect((err, db)=>{
                    if(err) throw err;
                    var dbo = db.db("newdb")
            
                    dbo.collection("Electronic-engineering").find({}).sort({_id:-1}).limit(3).toArray((err, results)=>{ 
                        console.log("ok")
                        var a = [{"image": String(results[0].picture), "name": results[0].title, "id": results[0]._id},
                            {"image": String(results[1].picture), "name": results[1].title, "id": results[1]._id},
                            {"image": String(results[2].picture), "name": results[2].title, "id": results[2]._id}]
                    
                        socket.emit('electronic-enginnering', a);
                        console.log("new socket electronic-enginnering ok")
                        db.close()
                    })
                    
                })
            });
        }, 0);
        return 0;
    }
}