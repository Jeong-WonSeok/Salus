const SocketIO = require('socket.io');
const KioskModel = require("../model/kiosk/kioskModel");
const exModel = require("../model/excercise/excerciseModel");

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
	    socket.emit("RFIDcheck", 12341234);
	//socket.on('RFIDLogin', async (data) => {
	//	console.log("check:",data);
	//	io.emit('RFIDcheck', (data));
	//});
	//socket.on('RFIDcheck', (data) => {
	//	console.log(data);
	//});
	//socket.emit('RFIDcheck', ('data'));
		
    });
}
