#!/usr/bin/env python

import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
GPIO.setwarnings(False) 
reader = SimpleMFRC522()

while 1:
        id, text = reader.read()
        print(id)
        print(text)
GPIO.cleanup()
#try:
#        id, text = reader.read()
#        print(id)
#        print(text)
#finally:
#        GPIO.cleanup()
