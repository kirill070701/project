const express                   = require("express")
const bodyParser                = require("body-parser")
const fs                        = require('fs')

const gameind                   = require("./routes/gaming-industry")
const cybersport                = require("./routes/cybersport")
const computerGames             = require("./routes/computer-games")
const electronicEnginnering     = require("./routes/electronic-engineering")
const electronicEnginneringLayout = require("./routes/electronic-enginnering-layout")
const gamingLayout              = require("./routes/gaming-industry-layout")
const cybersportLayout          = require("./routes/cybersport-layout")
const advertisement             = require("./routes/advertisement")
const computerGamesLayout       = require("./routes/computer-games-layout")
const about                     = require("./routes/about")
const contacts                  = require('./routes/contacts')
const error404                  = require('./routes/errors-pages/http-404')
const socket                    = require('./views/js/socket')

const app                       = express()
const http                      = require('http').Server(app);
const io                        = require('socket.io')(http);

const port                      = process.env.port || 3000

const urlecodedParser = bodyParser.urlencoded({extended: false})

app.set("view engine", "ejs")

app.use(express.static(__dirname + '/views'))

app.use(gameind)
app.use(cybersport)
app.use(gamingLayout)
app.use(cybersportLayout)
app.use(computerGames)
app.use(computerGamesLayout)
app.use(electronicEnginnering)
app.use(electronicEnginneringLayout)
app.use(about)
app.use(advertisement)
app.use(contacts)


app.use('/robots.txt', (req, res)=>{
    const fileContent = fs.readFileSync("robots.txt", "utf8");
    res.type('text/plain');
    console.log(fileContent)
    res.send(fileContent)
})

app.use('/sitemap.xml', (req, res)=>{
    fs.readFile(__dirname + '/sitemap.xml', 'utf8', function(err, data) {
        if (!err) {
            console.log(data);
            res.send(data)
        }
    });
})


app.get('/', urlecodedParser, (req, res)=>{
    res.render('index')
})

socket.gaming(io)
socket.cybersport(io)
socket.computerGames(io)
socket.electronicEnginnering(io)

app.use(error404)

http.listen(port, ()=>{
    console.log(`Port- ${port}`)
})