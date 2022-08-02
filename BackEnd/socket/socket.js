const SocketIO = require('socket.io');

const io = SocketIO('http://i7b110.p.ssafy.io:3000/eqyipmentdata')
io.on('connection', (socket) => {
    io.on('equipment', (data) => {
    console.log(data);
    })
});