# 大厂HTML5 作品赏析

- html5 标签
    audio   网易云音乐
    video   爱奇艺 B站

- background-size
    1. 移动端rem 宽高wh是多变的 而PC端没有这个问题
    2. 移动端 retina 3倍retina
        40*40 的大小应该放80*80 120*120
        200*200
    3. background-size: cover 背景图片大小
        等比例缩放背景图片并填满容器
        超出则剪裁
        contain 

- 库文件引入的位置
    1. css 放到 head 里
        css 应该尽早地参与网页的渲染
    2. js 放到 body 最下面 防止其阻塞页面渲染 降低页面渲染效率
        