#!/usr/bin/python3
import socketio
import time
import RPi.GPIO as GPIO
from mfrc522 import MFRC522
from mfrc522 import SimpleMFRC522

GPIO.setwarnings(False)
reader = SimpleMFRC522()
sio=socketio.Client()

@sio.event
def equipmentRfidRecieved(data):
    print('I received a message!')
    print(data)
    print(type(data))
    print(data['equipmentId'])
    print(data['equipmentName'])



time_start=time.localtime()
excercise_time=str(time_start[0]) + '-'
if len(str(time_start[1])) < 2:
    excercise_time=excercise_time + '0'
excercise_time=excercise_time + str(time_start[1]) + '-'
if len(str(time_start[2])) < 2:
    excercise_time=excercise_time + '0'
excercise_time += str(time_start[2])
sio.connect('http://i7B110.p.ssafy.io:3010/')
tmp_Id=-1

while 1:
    id, text = reader.read()
    if id and tmp_Id!=id:
        sio.emit('equipmentdata',{'rfidKey':id,'equipmentId':1,'equipmentName':'런닝머신',},)
        sio.emit('RFIDLogin',{'rfidKey':id})
        tmp_Id=id
        print('data send')
                
#RFID, weight, excerciesDay , equipmnentId


GPIO.cleanup()

@sio.event
def connect():
    print("Connected")

 