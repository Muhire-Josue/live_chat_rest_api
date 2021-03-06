const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));