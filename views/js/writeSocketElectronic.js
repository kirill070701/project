var socket = io();
setTimeout(()=>{
        socket.on('cybersport', function(msg) {
            nameElem.setAttribute('src', "/")
            document.form1.action = "/cybersport/" + msg[0].id 
            imgElem.setAttribute('src', "data:image/jpg;base64," + `${msg[0].image}`);
            document.getElementById("nameElem").innerHTML = msg[0].name
            document.form2.action = "/cybersport/" + msg[1].id 
            imgElem1.setAttribute('src', "data:image/jpg;base64," + `${msg[1].image}`);
            document.getElementById("nameElem1").innerHTML = msg[1].name
            document.form3.action = "/cybersport/" + msg[2].id 
            imgElem2.setAttribute('src', "data:image/jpg;base64," + `${msg[2].image}`);
            document.getElementById("nameElem2").innerHTML = msg[2].name
        });
} ,0)
setTimeout(()=>{
    socket.on('computer-games', function(msg) {
        console.log(msg)
        nameElem.setAttribute('src', "/")
        document.form4.action = '/computer-games/' + msg[0].id 
        imgElem3.setAttribute('src', "data:image/jpg;base64," + `${msg[0].image}`);
        document.getElementById("nameElem3").innerHTML = msg[0].name
        document.form5.action = '/computer-games/' + msg[1].id 
        imgElem4.setAttribute('src', "data:image/jpg;base64," + `${msg[1].image}`);
        document.getElementById("nameElem4").innerHTML = msg[1].name
        document.form6.action = '/computer-games/' + msg[2].id 
        imgElem5.setAttribute('src', "data:image/jpg;base64," + `${msg[2].image}`);
        document.getElementById("nameElem5").innerHTML = msg[2].name
    });
}, 0)
setTimeout(()=>{
    socket.on('gaming', function(msg) {
        console.log(msg)
        nameElem.setAttribute('src', "/")
        document.form7.action = '/gaming-industry/' + msg[0].id 
        imgElem6.setAttribute('src', "data:image/jpg;base64," + `${msg[0].image}`);
        document.getElementById("nameElem6").innerHTML = msg[0].name
        document.form8.action = '/gaming-industry/' + msg[1].id 
        imgElem7.setAttribute('src', "data:image/jpg;base64," + `${msg[1].image}`);
        document.getElementById("nameElem7").innerHTML = msg[1].name
        document.form9.action = '/gaming-industry/' + msg[2].id 
        imgElem8.setAttribute('src', "data:image/jpg;base64," + `${msg[2].image}`);
        document.getElementById("nameElem8").innerHTML = msg[2].name
    });
}, 0)