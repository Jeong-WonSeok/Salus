const conn = require("../database/db")
const mybatisMapper = require('mybatis-mapper');
const express = require("express");
const SocketIO = require('socket.io');
const KioskModel = require("../model/kiosk/kioskModel");
const router = express.Router();

module.exports = (server) => {
    const io = SocketIO(server, {path: '/socket.io'});

    io.on('connection', async (socket) => {
        
        socket.on('equipmentdata', async (data) => {
            // console.log(data);
            // const param = {
            //     rfidKey : data //("여기에는 data가 들어감(rfid값)")
            // }
            // const format = { language: "sql", indent: ""};
            // const query = mybatisMapper.getStatement(
            //     "kiosk",
            //     "DailyData",
            //     param,
            //     format
            // )

            // conn.query(query, (err, results) => {
            //     if(err) console.log(err);
            //     console.log(results)
            //     socket.emit('dailydata', (results) );
            // });
            const test = await KioskModel.DailyData( {
                params : { rfidKey : '12341234' }
            })
            
            socket.emit('dailydata', test[0]);
        })
        
    });
}