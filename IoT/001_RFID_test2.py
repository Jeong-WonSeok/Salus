#!/usr/bin/env python
import requests
import RPi.GPIO as GPIO
from mfrc522 import MFRC522
from mfrc522 import SimpleMFRC522
GPIO.setwarnings(False)
reader = SimpleMFRC522()
check=True
while check:
    id, text = reader.read()
    print(id)
GPIO.cleanup()