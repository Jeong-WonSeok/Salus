#!/usr/bin/env python

import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
from smbus import SMBus

addr=0x8
bus=SMBus(1)
bus.write_byte(addr,0x0)

GPIO.setwarnings(False)
reader = SimpleMFRC522()
try:
    id,text = reader.read()
    print(id)
    print(text)
    bus.write_byte(addr,0x1)
finally:
    GPIO.cleanup()

