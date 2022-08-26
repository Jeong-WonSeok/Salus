#!/usr/bin/python3
import socketio
import time
import RPi.GPIO as GPIO
from mfrc522 import MFRC522
from mfrc522 import SimpleMFRC522
from hx711 import HX711
from smbus import SMBus
import cv2
import numpy as np

cap = cv2.VideoCapture(0)

addr = 0x8
bus = SMBus(1)
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

prev_dist=55
standard_dist=40
prev_dist=-1
max_distance=58
check=[False,False]
count=0
now_Id=-1
time_record=-1

time_start=time.localtime()
excercise_time=str(time_start[0]) + '-'
if len(str(time_start[1])) < 2:
    excercise_time=excercise_time + '0'
excercise_time=excercise_time + str(time_start[1]) + '-'
if len(str(time_start[2])) < 2:
    excercise_time=excercise_time + '0'
excercise_time += str(time_start[2])


def distance():
    print('dist start')
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
    print('dist end')
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
tmp_num=0   
nowWeight=-1
def countSend():
    global tmp_num,prev_dist, nowWeight
    dist = distance()
    print('count',dist)
    if dist<200:
        time.sleep(1)
        if dist<40:
            check[0]=True
            nowWeight=weightChecking()
        if check[0] and dist>56:
            check[1]=True
    print(check)
    if check[0] and check[1]:
        check[0],check[1]=False,False
        tmp_num+=1
        print(tmp_num, 'sended')
        if nowWeight>0:
            sio.emit('equipmentData',{'rfidKey':now_Id,'excerciseDay':excercise_time,'equipmentName':'펙덱 플라이 머신','weightNow':nowWeight})
            nowWeight= -1
        check[0]=False
        check[1]=False
    prev_dist=dist   

def equipmentWorkoutStart(id):
    global now_Id
    if now_Id!=id:
        sio.emit('equipmentStart',{'equipmentName':'펙덱 플라이 머신'})
        now_Id=id
        print('data send')
        bus.write_byte(addr, 5)
        time.sleep(1)

def equipmentWorkoutEnd(id):
    global now_Id
    if now_Id==id:
        sio.emit('equipmentEnd',{'equipmentName':'펙덱 플라이 머신'})
        now_Id=-1
        print('data send done')
        bus.write_byte(addr, 5)
        time.sleep(1)

def weightChecking():
    if cap.isOpened():
        ret,a=cap.read()
        checking=0
        
        while checking==0: 
            if ret:
                ret,a=cap.read()
                
                a=a[261:288,81:460]
                dst = a.copy()
                a=cv2.medianBlur(a,5)
                gray = cv2.cvtColor(a, cv2.COLOR_BGR2HSV)
                hsv_1=np.array([85,70,100])
                hsv_2=np.array([145,255,255])
                img_mask=cv2.inRange(gray,hsv_1,hsv_2)
                cnt, labels, stats, centroids = cv2.connectedComponentsWithStats(img_mask)
                centroids=list(centroids)
                centroids.sort(key=lambda x:x[0])
                tmp_data=centroids[0][0]
                
                for i in range(0,cnt):
                    (x,y,w,h,area)=stats[i]
                    if area <60 or area>500:
                        continue
                    if centroids[i][0]-tmp_data<100:
                        checking+=1
                    tmp_data=centroids[i][0]
                    cv2.rectangle(dst,(x-5,y-5,w+10,h+10),(0,0,255))
                print(checking)
            
        return 90-checking*10
    return None

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


try:
    while 1:
        id, text = reader.read()
        if now_Id==-1:
            if id and time_record==-1:
                time_record=time.time()
                equipmentWorkoutStart(id)
        else:
            if id:
                time_record=-1
                equipmentWorkoutEnd(id)
                break
        if now_Id>0:
            print(now_Id)
            countSend()
        if time_record>0 and time.time()-time_record>2:
            time_record=-1
except (KeyboardInterrupt, SystemExit):
    print('END')

finally:
    GPIO.cleanup()
