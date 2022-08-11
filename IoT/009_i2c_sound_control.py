from smbus import SMBus
import time

addr = 0x8 # bus address
bus = SMBus(1)
time.sleep(1)# indicates /dev/ic2-1
 
numb = 1
 
print ("Enter 1 ,2,3")
while numb == 1:
 
    md = int(input())
 
    if md==1:
        bus.write_byte(addr, 5)
        time.sleep(1)
    elif md==2:
        bus.write_byte(addr, 5)
        time.sleep(1)
    elif md==3:
        bus.write_byte(addr, 5)
        time.sleep(1)
        bus.write_byte(addr, 5)
        time.sleep(1)
        bus.write_byte(addr, 5)
        time.sleep(1)

    else:
        numb = 0
        bus.write_byte(addr, 25)
        time.sleep(1)
