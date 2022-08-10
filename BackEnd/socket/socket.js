const SocketIO = require('socket.io');
<<<<<<< HEAD
const KioskModel = require("../model/kiosk/KioskModel");
const router = express.Router();
=======
const KioskModel = require("../model/kiosk/kioskModel");
const exModel = require("../model/excercise/excerciseModel");
>>>>>>> master

module.exports = (server) => {
    const io = SocketIO(server, {path: '/socket.io'});

    io.on('connection', async (socket) => {
        socket.on('equipmentdata', async (data) => {
		console.log(data);
            const test = await exModel.updateIsStarted( {
                params : { equipmentId : data.equipmentId }
            })
            console.log(test[0][0]);
            socket.emit('equipmentRfidRecieved', test[0][0]);
        })
    });
}
