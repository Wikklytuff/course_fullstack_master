# -*- coding: utf-8 -*-
"""
Created on Thu Nov  3 20:55:30 2022

@author: Wikklytuff
"""
from pyperclip import copy
import sys

pwd_dict = {

    "gmail": "fkdqjhryhu",  # 此字典值为加密后的密文
    
    "campus":"fdpsxv456",
    
    "163email": "klssrsrwdpxv",
    
    "taobao": "uklqrfhurv",
    
    "mobilephone":"prelohccb6",  #  密码明文为：mobile9983
    
    "soft": "mAxihvriw"

}

account = sys.argv[1]
r_move = int(sys.argv[2])
pre_pwd = pwd_dict.get(account)
real_pwd = "" 
for a in pwd_dict[account]:
    if (51 <= ord(a) <= 57) or (68 <= ord(a) <= 90) or (100 <= ord(a) <= 122):
        temp = ord(a) - r_move
    elif 48 <= ord(a) <= 50:
        temp = ord(a) + 40
    elif 65 <= ord(a) <= 67:
        temp = ord(a) + 55
    elif 97 <= ord(a) <= 99:
        temp = ord(a) - 42
    real_pwd += chr(temp)
print(real_pwd)
copy(real_pwd)


# hello
