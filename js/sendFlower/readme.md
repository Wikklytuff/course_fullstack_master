<<<<<<< HEAD
# 送花
## talk in JS

1. js 运行在浏览器代理中（url），宿主环境（window 全局对象）
    - typeof window  对象 
    - a b name 全局作用域
    - c 声明在函数中 函数 局部作用域

- es6 let const 与 var 
    1. 相同点：都属于声明所在的作用域
        直接用变量名来直接访问
        a,
        b,
        name

    2. var 会自动挂载在window对象上
        其实是副作用，不太对
        window.a  The Bad parts 
        let完全可以取代var

    3. let const 不会挂载在window对象上
    
    4. const 常量 值不可以修改
        1. 如果是简单数据类型，值不能改变
=======
# 送花
## talk in JS

1. js 运行在浏览器代理中（url），宿主环境（window 全局对象）
    - typeof window  对象 
    - a b name 全局作用域
    - c 声明在函数中 函数 局部作用域

- es6 let const 与 var 
    1. 相同点：都属于声明所在的作用域
        直接用变量名来直接访问
        a,
        b,
        name

    2. var 会自动挂载在window对象上
        其实是副作用，不太对
        window.a  The Bad parts 
        let完全可以取代var

    3. let const 不会挂载在window对象上
    
    4. const 常量 值不可以修改
        1. 如果是简单数据类型，值不能改变
>>>>>>> 4336100b51fb52fa4c574f514e1cf57c84de7918
        2. 如果是复杂数据类型，值可以变，但是obj的类型不能变