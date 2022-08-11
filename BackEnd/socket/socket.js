const express = require('express');
const SocketIO = require('socket.io');
const KioskModel = require("../model/kiosk/KioskModel");
const excerciseModel = require("../controller/excercise/excerciseController");
const router = express.Router();

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
        socket.emit('mobileData', {param : {
            weightNow : 100,
            rfidKey : 977237223725,
            equipmentName : "숄더프레스 머신"
        }});
    });
}
