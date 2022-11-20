# The Good Parts

## 对象

### JS 数据类型
    - 简单类型
        1. 数值类型 number   JS 只有数据类型，JS不太适合复杂数据运算
            JS处理小数不够精确，因为存在计算机内的二进制转换
            0.1 + 0.2 ！= 0.3
        2. 字符串类型 string
        3. undefined
            - JS是弱类型，声明变量可以不指定具体类型
            - JS变量的类型由值决定，变量类型可变
                == 表值相等，具有隐式转换；=== 表恒等，值类型都相等
            - 变量声明之后，赋值之前，类型为undefined
        4. 布尔值
            boolean true | false
        5. null


    - 复杂数据类型
        复杂的就是对象 Object

### JS 关键字
    let 变量
    const 常量
    typeof 判断变量类型