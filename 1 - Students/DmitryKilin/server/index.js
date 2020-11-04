const express = require('express');
const fs = require('fs');

const chats = require('./src/controllers/chat.js');

const server = express();
server.use(express.json());

server.get('/chats', (req, res) => {
    fs.readFile('./server/src/db/chats.json', 'utf-8', (e, data) => {
        if(!e) {
            res.json(JSON.parse(data));
        }
    })
})

// server.get('/chats/:user', chats.loadChats); //bind possible

server.listen(4000, () => { console.log('running at 4000') })