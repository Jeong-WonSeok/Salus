const SocketIO = require('socket.io');

module.exports = (server) => {
    const io = SocketIO(server, {path: '/socket.io'});

    io.on('connection', (socket) => {
        
        socket.on('equipmentdata', (data) => {
        console.log(data);
        })

        // socket.interval = setInterval(() => {
        //     socket.emit('equipmentdata', 'Hello Socket.IO');
        // }, 3000);

    });
}