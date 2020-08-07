const express = require('express');
const app = express();
const fs= require('fs');

// var user= {
//     "user6": {
//         "id" : 6,
//         "firstname": "Toni",
//         "lastname": "Kroos",
//         "email" : "kroos8@gmail.com"
//       },
// }

app.get('/getUsers', function(req, res) {
    fs.readFile(__dirname + '/' + 'user.json', 'utf-8', function(err,data){
        console.log("Get Data=>",data);
        res.end(data)
    })
})

// app.post('/addUsers', function(req, res) {
//     fs.readFile(__dirname + '/' + 'user.json', 'utf-8', function(err,data){
//         console.log(data);
//         data = JSON.parse(data)
//         data["user5"] =user["user5"]
//         res.end(JSON.stringify(data))
        
//     })
// })

app.post('/:id', function(req, res) {
    fs.readFile(__dirname + '/' + 'user.json', 'utf-8', function(err,data){
        console.log(data);
        var users = JSON.parse(data)
        var user= users["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(data))
        
    })
})

app.delete('/deleteUser', function(req, res) {
    fs.readFile(__dirname + '/' + 'user.json', 'utf-8', function(err,data){
        console.log(data);
        data = JSON.parse(data)
        delete data["user" + 3]
        console.log(user);
        res.end(JSON.stringify(data))
        
    })
})

var server= app.listen(3000, function(){
    var host =server.address().address
    var port = server.address().port
    console.log("rest api demo app listening at http:// %s:%s", host, port);
})