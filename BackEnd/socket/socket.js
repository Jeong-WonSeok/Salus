const SocketIO = require('socket.io');
const exModel = require("../model/excercise/excerciseModel");

module.exports = (server) => {
    const io = SocketIO(server, {path: '/socket.io'});
	
    io.on('connection', async (socket) => {
	console.log('aa');
        socket.on('equipmentdata', async (adata) => {
            console.log(data);
            const test = await exModel.updateIsStarted( {
                params : { equipmentId : data.equipmentId }
            })
            console.log('equipmentdata', test[0][0]);
            socket.emit('equipmentRfidRecieved', test[0][0]);
        })
        socket.on('rfidLogin', (data) => {
                console.log("check:",data);
                io.emit('rfidcheck', (data));
        });
        await exModel.excerciseData({
		params:{
			excerciseDay : '2022-08-12',
		        weightNow : 50,
		        equipmentName : '토탈 힙',
		        rfidKey: 977237223725
		}
	})
	    //     var test = { rfidKey : 977237223725};
	const mobiledata = await exModel.mobileExcerciseData( {
		params : {
			weightNow : 50,
			equipmentName: "토탈 힙",
			rfidKey: "977237223725"
		}
	})
	
	console.log('mobile', mobiledata);
        socket.emit('test', mobiledata);
    });
}
