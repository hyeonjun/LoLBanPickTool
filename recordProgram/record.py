import keyboard
import time
import cv2
while True:
    # if keyboard.is_pressed('space'):
    #     print('confirm ')
    #     time.sleep(0.1)
    shortcut = keyboard.is_pressed()
    print(shortcut)
    time.sleep(0.1)


