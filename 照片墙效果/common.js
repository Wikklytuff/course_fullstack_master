var str = '';
var imgPage = document.querySelector('#imgPage');
for (var i = 0; i < 18; i++) {
    str += '<img src="./images/' + (i + 1) + '.png" alt="">';
}
console.log(str);
imgPage.innerHTML = str;

var endNum = 0;

//按钮
var imgs = imgPage.children;
var btn = document.querySelector('#btn');
var canClick = true;

btn.onclick = function () {
    if (!canClick) {//动画进行不可点击
        return;
    }
    canClick = false;

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.animation = 'twinkle .7s ' + Math.random() * 1000 + 'ms';
        imgs[i].addEventListener('animationend', end);
    }
}

// 动画结束事件
function end(event) {
    endNum++;

    if (event.animationName == 'twinkle') { //twinkle的end事件发生
        this.style.opacity = 0;
        //所有图片透明度都为0
        if (endNum == imgs.length) {
            rotate();
            endNum = 0;
        }
    }

    if (event.animationName == 'rotate') {//rotate的end事件发生
        this.removeAttribute('style')

        if(endNum==imgs.length){
            canClick=true;
            endNum = 0;
        }
    }
}

// 旋转
function rotate() {
    // console.log(123);
    //所有图片沿Z轴向后走
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.transform = 'rotate(0deg) translateZ(-' + Math.random() * 500 + 'px)';
        imgs[i].style.animation = 'rotate 2s ' + Math.random() * 1000 + 'ms';
    }
}