from smbus import SMBus
import time

addr = 0x8 # bus address
bus = SMBus(1)
time.sleep(1)# indicates /dev/ic2-1
 
numb = 1
 
while numb == 1:
 
    ledstate = int(input())
 
    if 0<=ledstate <21:
        bus.write_byte(addr,ledstate)
        time.sleep(1)# switch it on

    else:
        numb = 0
        bus.write_byte(addr, 0x0)
        time.sleep(1)