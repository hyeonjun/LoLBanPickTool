# importing the required packages
import pyautogui
import cv2
import numpy as np
import datetime
import ffmpeg_streaming
import time
# Specify resolution
import os
import keyboard
resolution = (1920, 1080)

# Specify video codec
codec = cv2.VideoWriter_fourcc(*"XVID")
global out, video
flag = ""
video = False
start = 0
b = 0
play_video_name = ""
while True:
    # Take screenshot using PyAutoGUI
    img = pyautogui.screenshot()

    # Convert the screenshot to a numpy array
    frame = np.array(img)

    # Convert it from BGR(Blue, Green, Red) to
    # RGB(Red, Green, Blue)
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Create an Empty window
    cv2.namedWindow("Live", cv2.WINDOW_NORMAL)

    # Resize this window
    cv2.resizeWindow("Live", 480, 270)

    # Specify name of Output file
    now = datetime.datetime.now().strftime("%d_%H-%M-%S")
    filename = "C:\\Users\\user\\Videos\\ScreenRecord_" + str(now) + ".avi"
    # Optional: Display the recording screen
    cv2.imshow('Live', frame)

    key = cv2.waitKey(1)
    # Stop recording when we press 'q'
    if keyboard.is_pressed('ctrl+c'): # 종료
        break
    elif keyboard.is_pressed('ctrl+z'): # 녹화 시작
        print(str(now))
        # Write it to the output file
        # Creating a VideoWriter object
        flag = True
        out = cv2.VideoWriter(filename, codec, 20.0, resolution)
        start = time.time()
        b = 0
        video = cv2.VideoCapture(filename)

    elif keyboard.is_pressed('ctrl+x'): # 녹화 종료
        try:
            print("stop")
            flag = False
            out.release()
        except:
            print("Not Start")
            pass

    elif keyboard.is_pressed('space'):
        try:
            print("stop record")
            flag = False
            out.release()
            print("restart record")
            flag = True
        except:
            print("Not Start")
            pass

    if flag == True:
        out.write(frame)
        a = int(time.time()) - int(start)
        print(a)
        if int(a) == 15:
            flag = False
            out.release()
            start=0
            a = 0
            flag =True

            # print(video.isOpened())

    # if(video.isOpened()):
    #     print("enable")
# Release the Video writer
# out.release()
# Destroy all windows
cv2.destroyAllWindows()