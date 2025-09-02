import string
import time

text = 'Hello WOrl'
temp = ''

for ch in text:
    for i in string.printable:
        if i == ch or ch == ' ':
            time.sleep(0.05)
            print(temp + i)
            temp += ch
            break
        else:
            time.sleep(0.002)
