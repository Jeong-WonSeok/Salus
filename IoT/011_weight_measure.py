#!/usr/bin/env python3
import RPi.GPIO as GPIO  # import GPIO
from hx711 import HX711  # import the class HX711

try:
    GPIO.setmode(GPIO.BCM)
    hx = HX711(dout_pin=21, pd_sck_pin=20)
    err = hx.zero()
    # check if successful
    if err:
        raise ValueError('Tare is unsuccessful.')
    reading = hx.get_raw_data_mean()
    if reading:
        print('Data subtracted by offset but still not converted to units:',reading)
    else:
        print('invalid data', reading)
    reading = hx.get_data_mean()
    if reading:
        hx.set_scale_ratio(23.55)  # set ratio for current channel
        print('Ratio is set.')
    else:
        raise ValueError('Cannot calculate mean value. Try debug mode. Variable reading:', reading)
    prev_tmp=0
    now_weight=0
    unit_size=2
    while True:
        tmp=hx.get_weight_mean(30)/1000
        print(tmp, 'kg')
        if prev_tmp-tmp>unit_size*0.5:
            now_weight=round((prev_tmp-tmp)/2.0)*2
            print(now_weight) if now_weight>0 else print('nothing')

except (KeyboardInterrupt, SystemExit):
    print('Bye :)')

finally:
    GPIO.cleanup()