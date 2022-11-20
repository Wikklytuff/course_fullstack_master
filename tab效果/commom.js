var list = document.querySelector('.box-th').querySelectorAll('li');
var items = document.querySelector('.box-tb').querySelectorAll('.item');
for (var i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        // 导航栏样式切换，排他算法
        for (var i = 0; i < list.length; i++) {
            list[i].className = '';
        }
        this.className = 'current';

        // 下面展示内容切换，排他算法
        var index = this.getAttribute('data-index');
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        items[index].style.display = 'block';
    }
}
