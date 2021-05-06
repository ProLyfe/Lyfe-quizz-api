const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server)

let users = [];

io.on('connection', socket => {
    socket.emit('connecter', 'Vous êtes connecté');
    socket.on('newUser', data => {
        // console.log(data)
        users.push(data);
        socket.broadcast.emit('sendUsersList', users);
    });

});

server.listen(8900, () => {
    console.log('Connecté au serveur');
});