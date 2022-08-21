#!/usr/bin/python3
import socketio
import time
import RPi.GPIO as GPIO
from mfrc522 import MFRC522
from mfrc522 import SimpleMFRC522
from hx711 import HX711 


GPIO.setwarnings(False)
GPIO_TRIGGER = 23
GPIO_ECHO = 24
GPIO.setmode(GPIO.BCM)
GPIO.setup(GPIO_TRIGGER, GPIO.OUT)
GPIO.setup(GPIO_ECHO, GPIO.IN)
hx = HX711(dout_pin=21, pd_sck_pin=20)
sio=socketio.Client()
reader = SimpleMFRC522()
sio.connect('http://i7B110.p.ssafy.io:3010/')

prev_dist=60
standard_dist=30
max_distance=60
check=[False,False]
count=0
now_Id=-1

time_start=time.localtime()
excercise_time=str(time_start[0]) + '-'
if len(str(time_start[1])) < 2:
    excercise_time=excercise_time + '0'
excercise_time=excercise_time + str(time_start[1]) + '-'
if len(str(time_start[2])) < 2:
    excercise_time=excercise_time + '0'
excercise_time += str(time_start[2])


def distance():
    GPIO.output(GPIO_TRIGGER, True)
    time.sleep(0.00001)
    GPIO.output(GPIO_TRIGGER, False)
    StartTime = time.time()
    StopTime = time.time()
    while GPIO.input(GPIO_ECHO) == 0:
        StartTime = time.time()
    while GPIO.input(GPIO_ECHO) == 1:
        StopTime = time.time()
    TimeElapsed = StopTime - StartTime
    distance = (TimeElapsed * 34300) / 2
    return distance

def zeroWeight():
    hx = HX711(dout_pin=21, pd_sck_pin=20)
    err = hx.zero()
    if err:
        raise ValueError('Tare is unsuccessful.')
    reading = hx.get_data_mean()
    if reading:
        hx.set_scale_ratio(25.55)  # set ratio for current channel
    else:
        raise ValueError('Cannot calculate mean value. Try debug mode. Variable reading:', reading)
    
def checkWeight():
    prev_tmp=0
    now_weight=0
    unit_size=2
    tmp=hx.get_weight_mean(50)/1000
    return 50

def countSend():
    dist = distance()
    nowWeight=-1
    print('count',dist)
    if dist<200:
        time.sleep(1)
        if max_distance>dist:
            zeroWeight()
        if prev_dist>=standard_dist and dist<standard_dist:
            check[0]=True
            nowWeight=checkWeight()
        if check[0] and dist-10>=standard_dist:
            check[1]=True
    if check[0] and check[1]:
        check[0],check[1]=False,False
        sio.emit('equipmentData',{'rfidKey':now_Id,'excerciseDay':excercise_time,'equipmentName':'런닝머신','weightNow':nowWeight})

def equipmentWorkoutStart(id):
    global now_Id
    if now_Id!=id:
        sio.emit('equipmentStart',{'equipmentName':'런닝머신'})
        now_Id=id
        print('data send')

def equipmentWorkoutEnd(id):
    global now_Id
    if now_Id==id:
        sio.emit('equipmentEnd',{'equipmentName':'런닝머신'})
        now_Id=-1
        print('data send')

@sio.event
def equipmentRfidRecieved(data):
    print('I received a message!')
    print(data)
    print(type(data))
    print(data['equipmentId'])
    print(data['equipmentName'])

@sio.event
def connect():
    print("Connected")

zeroWeight()
try:
    while 1:
        id, text = reader.read()
        if now_Id==-1:
            if id:
                equipmentWorkoutStart(id)
        else:
            if id:
                equipmentWorkoutEnd(id)
        if now_Id>0:
            countSend()
except (KeyboardInterrupt, SystemExit):
    print('END')

finally:
    GPIO.cleanup()
