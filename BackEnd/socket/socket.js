const conn = require("../database/db")
const mybatisMapper = require('mybatis-mapper');
const express = require("express");
const SocketIO = require('socket.io');
const KioskModel = require("../model/kiosk/KioskModel");
const router = express.Router();

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
        
    });
}
