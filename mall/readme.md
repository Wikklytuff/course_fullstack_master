# 电商界面开发

- html css js 位置 ， 意义？
    1. html + css 完成静态页面的显示 越快越好
        css 放到head html + css 允许 并行 下载和执行
        - 下载html html DOM树：树状结构
        - 下载css
        css 不会阻塞html 继续下载，css 放到尽可能上面 head
        html + css 排版好 可看的
        t = t1 + t2 
        t = Math.max(t1, t2)
    2. js为什么放尾部
        下载的过程(1M)，阻塞html的下载
        js下载并执行完后，才恢复html下载
        t = Math.max(t1, t2) 
        js 执行 后台

- defer 
    1. 异步 下载html，不会影响后续DOM的渲染  
    2. 多个script标签都添加defer  a.js b.js c.js 
        文件的大小，下载的速度和标签的顺序不一样
        js 文件下载后执行
        script  立即执行，head， 下载时间+执行时间 = 拖慢首屏
        静态页面显示时间
        defer 确保 执行的顺序 和  标签的顺序 一致 （引入顺序
    3. defer脚本会在文档渲染完毕后，DOMContentLoaded事件调用前执行
        DOMContentLoaded(html + css都ready) 早于 load(资源加载都ready)

- async (chrome 新版 没有执行)
    - DOMContentLoaded 之后运行
    - 谁先加载完, 谁执行

- JS 事件 分不同的时期等级
    1. DOM0 级事件 onload onclick 时间里包含on
    2. DOM2 级事件 addEventListener('click', callback);

- 电商应用（页面开发）
    1. 界面能力良好, 原子级别(html标签+css排版)
    2. 组件(页面开发的思维提升, 工具)
        - css 命名技巧
        - 用一堆的html+css 组成了一个组件, 一个展示功能和能力的集合, 复用
        - 有一个框架提供了这些组件的话, 70%的工作省下
    3. 做项目
        - 调研weui 移动端最好的ui框架
        - 界面能力丰富 业务


- 引入weui框架(框架业务), 加速且方便开发, 组件开箱即用
- 打造项目可复用的组件   weui-mark
- 通用业务样式  特定项目  可能跨组件 或 样式功能的
    .bg_green
    .f_sm { font-size: 12px;}   小号字体
    .fr { float: right;}   浮动式布局的通用业务

- 70%  框架  