import RPi.GPIO as GPIO
import time
 
#GPIO Mode (BOARD / BCM)
GPIO.setmode(GPIO.BCM)
 
#set GPIO Pins
GPIO_TRIGGER = 23
GPIO_ECHO = 24
 
#set GPIO direction (IN / OUT)
GPIO.setup(GPIO_TRIGGER, GPIO.OUT)
GPIO.setup(GPIO_ECHO, GPIO.IN)
prev_dist=60
standard_dist=40
check=[False,False]
count=0
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
 
if __name__ == '__main__':
    try:
        while True:
            dist = distance()
            if dist<200:
                time.sleep(1)
                if prev_dist>=standard_dist and dist<standard_dist:
                    check[0]=True
                if check[0] and dist-10>=standard_dist:
                    check[1]=True
            if check[0] and check[1]:
                check[0],check[1]=False,False
                count+=1
            prev_dist=dist            
            print(count,*check)
                
                
        # Reset by pressing CTRL + C
    except KeyboardInterrupt:
        print("Measurement stopped by User")
        GPIO.cleanup()
