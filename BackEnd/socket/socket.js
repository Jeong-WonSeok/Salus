const SocketIO = require('socket.io');
const KioskModel = require("../model/kiosk/kioskModel");
const exModel = require("../model/excercise/excerciseModel");

module.exports = (server) => {
    const io = SocketIO(server, {path: '/socket.io'});

    io.on('connection', async (socket) => {
        
        socket.on('equipmentdata', async (data) => {
            const test = await KioskModel.DailyData( {
                params : { rfidKey : data }
            })
            console.log(test);
            socket.emit('dailydata', test[0]);
        })
        socket.on('test', async (data) => {
            const test = await exModel.updateIsStarted( {
                params : { equipmentId : data }
            })
            console.log(test[0]);
            socket.emit('updateIsStarted', test[0]);
        })
    });
}