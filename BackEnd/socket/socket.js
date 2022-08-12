const SocketIO = require('socket.io');
const exModel = require("../model/excercise/excerciseModel");

module.exports = (server) => {
    const io = SocketIO(server, {path: '/socket.io'});

    io.on('connection', async (socket) => {
        console.log(aa);
        socket.on('equipmentdata', async (data) => {
            console.log(data);
            const test = await exModel.updateIsStarted( {
                params : { equipmentId : data.equipmentId }
            })
            console.log(test[0][0]);
            socket.emit('equipmentRfidRecieved', test[0][0]);
        })
        socket.on('RFIDLogin', (data) => {
                console.log("check:",data);
                io.emit('RFIDcheck', (data));
        });

        await exModel.excerciseData({
            params:{
                excerciseData : '2022-08-12',
                weightNow : 40,
                equipmentName : '토탈 힙',
                rfidKey: 977237223725
            }
        })

        const mobiledata = await exModel.mobileExcerciseData( {
            params : {
                    weightNow : 40,
                    equipmentName: "토탈 힙",
                    rfidKey: "977237223725"
            }
        })
        console.log(mobiledata);
        //     var test = { rfidKey : 977237223725};
        socket.emit('test', { count : 5, volume : 40,  calorie : 50, time: '01:03' } );
    });
}
