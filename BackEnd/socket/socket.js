const conn = require("../database/db")
const mybatisMapper = require('mybatis-mapper');
const express = require("express");
const SocketIO = require('socket.io');
const router = express.Router();

module.exports = (server) => {
    const io = SocketIO(server, {path: '/socket.io'});

    io.on('connection', async (socket) => {
        
        socket.on('equipmentdata', (data) => {
            console.log(data);
            const param = {
                userid : 13 //("여기에는 data가 들어감(rfid값)")
            }
            const format = { language: "sql", indent: ""};
            const query = mybatisMapper.getStatement(
                "kiosk",
                "searchDailyData",
                param,
                format
            )

            conn.query(query, (err, results) => {
                if(err) console.log(err);
                console.log(results)
                socket.emit('dailydata', (results) );
            });
        })

        // const test = KioskModel.searchDailyData({params : { userid : 13} });
        // console.log('test', test);
        

    });
}