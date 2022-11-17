# -*- coding: utf-8 -*-
"""
Created on Mon Nov 14 19:08:14 2022

@author: Wikklytuff
"""

txt = open("alice.txt", 'r', encoding='utf-8').read()
txt = txt.lower()
for ch in '!"#$&()*+,-./:;<=>?@[\\]^_{|}·~’':
    txt = txt.replace(ch, "")
txt_new=txt.split()
dic = {}
for i in txt_new:
    if i not in dic:
        dic[i] = 1
    else:
        dic[i] = dic[i] + 1
print(dic.keys())
items = list(dic.items())
items.sort(key=lambda x: x[1], reverse=True)
print("前十词频最多的单词：")
for i in range(10):
    word, count = items[i]
    print( "{0:<10}{1:>5}".format(word, count))