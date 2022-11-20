# 阿里巴巴双十一界面开发

- 设计稿
    750px 移动页面的一种尺寸
    Iphone 的 小尺寸375pt retina屏幕 为设计的标准 一个位置有两个发光点 375*2 -> 750
- 前端任务
    一像素不差的还原设计稿 
    HTML + CSS + JS 
    - 交互
    - CSS 美化页面 CSS动画
    - 设计稿是静态的 要做动态的 使用vue react套数据 
    - 兼容性 Alley 兼容性达到99.99%
    - HTML 搭建页面结构

- css reset
    1. 抹平不同浏览器的预设样式, 从零出发, 在所有浏览器上表现一致
    2. 利用css inherit 继承属性 预设好body的font-size font-family等属性
        font-size默认16px
- rem 单位
    1. 在移动端, 为了兼容一般不用px
    2. 先给html标签设置font-size
    37.5px 不固定
    需要等比例 1/10 方便去做栅格系统 布局
    如何在不同的设备上, 让1rem = 设备宽度/10
    3. html 的 font-size 要动态设置
        window.innerWidth 拿到设备宽度
        document.documentElement.style.fontSize = w + 'px'