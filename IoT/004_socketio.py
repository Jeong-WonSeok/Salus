import socketio
import time
sio=socketio.Client()

time_start=time.localtime()
excercise_time=str(time_start[0]) + '-'
if len(str(time_start[1])) < 2:
    excercise_time=excercise_time + '0'
excercise_time=excercise_time + str(time_start[1]) + '-'
if len(str(time_start[2])) < 2:
    excercise_time=excercise_time + '0'
excercise_time += str(time_start[2])

@sio.event
def connect():
    print("Connected")
    
sio.connect('http://i7B110.p.ssafy.io:3000/')
sio.emit('equipmentdata',{'RFID':12341234,'equipmentId':1,'excerciesDay':excercise_time,'weight':50})
#RFID, weight, excerciesDay , equipmnentId