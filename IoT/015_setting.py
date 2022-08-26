import cv2
import numpy as np

cap = cv2.VideoCapture(0)
if cap.isOpened():
        ret,a=cap.read()
        checking=0
        
        while ret: 
                ret,a=cap.read()
                a=a[261:288,81:460]
                dst = a.copy()
                a=cv2.medianBlur(a,7)
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
                
                cv2.imshow("camera", dst)
                cv2.imshow('b',img_mask)
                print(checking)
                checking =0
                if cv2.waitKey(1) & 0xFF == 27:
                    break

cap.release()
cv2.destroyAllWindows()