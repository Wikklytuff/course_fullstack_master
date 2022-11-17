# -*- coding: utf-8 -*-
"""
Created on Mon Nov  7 14:15:40 2022

@author: Wikklytuff
"""

import xlrt
import xlrd

file = r"school.xls"
wb = xlrd.open_workbook(file)
sheet = wb.sheet_by_index(0)
school = []

for row in range(sheet.nrows):
    school = []
    for col in range(sheet.ncols):
        content = sheet.cell_value(row, col)
        school.append(content)
    schools.append(school)
    
for school in schools:
    print(school)