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

prev_dist=30
standard_dist=10
max_distance=30
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
        hx.set_scale_ratio(25550)  # set ratio for current channel
    else:
        raise ValueError('Cannot calculate mean value. Try debug mode. Variable reading:', reading)
prev_tmp=0    
def checkWeight():
    global prev_tmp
    now_weight=0
    unit_size=2
    tmp=hx.get_weight_mean(10)/1000
    print('tmp',tmp)
    if abs(tmp)>unit_size*0.5:
        return abs(tmp) if tmp>0 else -1

def countSend():
    dist = distance()
    print(dist)
    if dist<200:
        time.sleep(1)
        if max_distance>dist:
            zeroWeight()
        if prev_dist>=standard_dist and dist<standard_dist:
            check[0]=True
        if check[0] and dist-10>=standard_dist:
            check[1]=True
    if check[0] and check[1]:
        nowWeight=checkWeight()
        check[0],check[1]=False,False
        if nowWeight>0:
            print('workout')
            zeroWeight()

def equipmentWorkoutStart():
    global now_Id
    id, text = reader.read()
    if id and now_Id!=id:
        now_Id=id
        print('data send')

def equipmentWorkoutEnd():
    global now_Id
    id, text = reader.read()
    if id and now_Id!=id:
        now_Id=-1
        print('data send end')
num=0
zeroWeight()
while 1:
        num+=1
        if now_Id==-1:
                equipmentWorkoutStart()
        else:
                equipmentWorkoutEnd()
        if now_Id>0:
            countSend()
            print(now_Id)       

GPIO.cleanup()

