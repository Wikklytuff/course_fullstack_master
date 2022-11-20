# 泡咖啡
    1. 把水煮沸
    2. 用沸水冲泡咖啡
    3. 把咖啡倒进杯子
    4. 加糖和牛奶 

传统的面向对象
Coffee 类
kpcn instance 实例

- JS 面向对象的实现方式
    1. 对象字面量 表达性强 独一无二
         {
            name: "嘟嘟可",

        }
    2. 模板批量生产
        class + construct + new 
    3. 函数生成

- 类构建的过程
    1. 定义了一个类 Coffee 模板
    2. 在构造函数construct中 传了type属性 
        this.type this是实例后的对象
        将需要的实例对象构建出来 
    3. 在class中仍能添加方法, public 公有方法
        cof.boil();

- instanceof 判断该实例是否为某对象的实例

- 面向对象的语法总结
    1. class 类的抽象 咖啡和茶的类的抽象 成为了饮品的父类
    2. extends 继承
        子类拥有了父类的模板
    3. 多个子类 细节略有不同
        重新写父类（同样的方法名）的方法
        super 代表调用父类的方法