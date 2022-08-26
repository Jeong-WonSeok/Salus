import cv2
import numpy as np
cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH,500)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT,300)
if cap.isOpened():
    ret,a=cap.read()
    while ret:
        ret,a=cap.read()

        dst = a.copy()
        a=cv2.medianBlur(a,5)
        a=a[31:170,146:260]
        dst=dst[31:170,146:260]
        gray = cv2.cvtColor(a, cv2.COLOR_BGR2HSV)
        hsv_1=np.array([95,70,100])
        hsv_2=np.array([135,255,255])
        img_mask=cv2.inRange(gray,hsv_1,hsv_2)
        cnt, labels, stats, centroids = cv2.connectedComponentsWithStats(img_mask)
        for i in range(1,cnt):
            (x,y,w,h,area)=stats[i]
            if area <5:
                continue
            cv2.rectangle(dst,(x-5,y-5,w+10,h+10),(255,255,255))

        #circles = cv2.HoughCircles(img_mask, cv2.HOUGH_GRADIENT, 1, 100, param1 = 255, param2 = 10, minRadius = 2, maxRadius = 25)
        #if circles is not None:
        #    for i in circles[0]:
        #        cv2.circle(dst, (int(i[0]), int(i[1])), int(i[2]), (255, 255, 255), 5)

        cv2.imshow("camera",dst)
        cv2.imshow("camera2",img_mask)
        if cv2.waitKey(1) & 0xFF == 27:
            break
cap.release()
cv2.destroyAllWindows()