const SocketIO = require('socket.io');
const exModel = require("../model/excercise/excerciseModel");
const kioskModel = require("../model/kiosk/kioskModel");

module.exports = (server) => {
    const io = SocketIO(server, {path: '/socket.io', cors: {origin:'*'}} );
	
    io.on('connection', async (socket) => {
	    socket.on('rfidLogin', async (data) => {
		console.log(data);
            io.emit('rfidcheck', data);   
            const todayCheck = await kioskModel.todayCheck({
                 params : { rfidKey : data.rfidKey}
	    });
		console.log("socket : " + todayCheck);
            socket.emit('rfidLoginRecieved', todayCheck);
        });
	    
        socket.on('equipmentStart', async (data) => {
		console.log("equipmentStart : " + data);
            const isStarted = await exModel.updateIsStarted( {
                params : { equipmentName : data.equipmentName }
            })
		console.log(isStarted[0]);
            socket.emit('equipmentRecieved', isStarted[0]);
        });
        socket.on('equipmentData', async (data) =>{
	    console.log("equipmentData : " + data);
            const equipmentData = await exModel.excerciseData({
                params : {
                    equipmentName : data.equipmentName,
                    excerciseDay : data.excerciseDay,
                    rfidKey : data.rfidKey,
                    weightNow : data.weightNow
                }
            });
	    const mobiledata = await exModel.mobileExcerciseData( {
		    params: {
			    weightNow : data.weightNow,
			    equipmentName: data.equipmentName,
			    rfidKey: data.rfidKey
		    }
	    });
	    io.emit('mobileData', mobiledata);
        });

        socket.on('equipmentEnd', async (data) =>{
		console.log("equipmentEnd : " + data);
            const isStarted = await exModel.updateIsStarted( {
                params : { equipmentName : data.equipmentName }
            })
		console.log("isStarted : " + isStarted[0]);
            io.emit('equipmentRecieved', isStarted[0]);
	    
        })
    });
}
