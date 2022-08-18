#!/usr/bin/python3
import socketio
import time
import RPi.GPIO as GPIO
from mfrc522 import MFRC522
from mfrc522 import SimpleMFRC522
from smbus import SMBus
import math

addr = 0x8 # bus address
bus = SMBus(1)
time.sleep(1)# indicates /dev/ic2-1
time_record=-1
GPIO.setwarnings(False)
reader = SimpleMFRC522()
sio=socketio.Client(logger=True, engineio_logger=True)

@sio.event
def rfidLoginRecieved(data): # name change required
    print('Recieved:',data)
    if data['attendanceCheck']==0:
        bus.write_byte(addr, 5)
        time_record=-1
        time.sleep(1)
    else:
        bus.write_byte(addr, 12)
        time_record=time.time()
        time.sleep(1)
sio.connect('http://i7B110.p.ssafy.io:3010/')
tmp_Id=-1

while 1:
    id, text = reader.read()
    if id and not math.isnan(id):
        print(time.time()-time_record,id)
        if time_record==-1:
            sio.emit('rfidLogin',{'rfidKey':id})
            tmp_Id=id
            time_record=time.time()
            print('data send')
        else:
            print('same')
    if time_record>0 and time.time()-time_record>2:
        time_record=-1

GPIO.cleanup()

@sio.event
def connect():
    print("Connected")

 
