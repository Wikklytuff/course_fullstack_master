# bytedance css 考题

- 选择器
    : 伪类 状态   伪元素
    :hover
    :before :after 伪元素 content: '' 必须要有
    html 元素 都是有标签的，  
    而:before 像元素一样插入页面，没有标签， css来声明，完成一些任务
    - 有些任务用标签也能做， 但副作用重
        li border-bottom: 1px solid red;
        li 盒子在文档流中 如何绘制出来？ ->盒模型
    盒模型:  盒子大小在页面占位的精确计算
            显卡画出来的  算好大小
            
            盒模型 = content + padding + border + margin
