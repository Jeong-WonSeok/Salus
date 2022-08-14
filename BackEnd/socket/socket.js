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
            const isStarted = await exModel.updateIsStarted( {
                params : { equipmentName : data.equipmentName }
            })
            socket.emit('equipmentRecieved', isStarted[0][0]);
        });

        socket.on('equipmentData', async (data) =>{
            const equipmentData = await exModel.excerciseData({
                params : {
                    equipmentName : data.equipmentName,
                    excerciseDay : data.excerciseDay,
                    rfidKey : data.rfidKey,
                    weightNow : data.weightNow
                }
            });
        });

        socket.on('equipmentEnd', async (data) =>{
            const isStarted = await exModel.updateIsStarted( {
                params : { equipmentName : data.equipmentName }
            })
            socket.emit('equipmentRecieved', isStarted[0][0]);
        })


    //     await exModel.excerciseData({
	// 	params:{
	// 		excerciseDay : '2022-08-13',
	// 	        weightNow : 50,
	// 	        equipmentName : '토탈 힙',
	// 	        rfidKey: 977237223725
	// 	}
	// })
	// const mobiledata = await exModel.mobileExcerciseData( {
	// 	params : {
	// 		weightNow : 50,
	// 		equipmentName: "토탈 힙",
	// 		rfidKey: "977237223725"
	// 	}
	// })
	
	// console.log('mobile', mobiledata);
	// setInterval( () => {
	// 	io.emit('test', mobiledata);
	// }, 30000);
    });
}
