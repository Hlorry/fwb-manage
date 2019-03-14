//var apiHost = "http://106.12.209.182:9000/";
var apiHost = "http://api.gofwblife.com/";
urlHost = "http://image.ilorry.xyz/";

function add0(m) {
    return m < 10 ? '0' + m : m
}

function timestampToTime(timestamp) {
//shijianchuo是整数，否则要parseInt转换
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}

function contains(str, target) {
    if (str == null || str == undefined) {
        return false;
    }
    return str.indexOf(target) != -1;
}
function addClick(el) {
    if(el.getAttribute('class') === 'click') {
        el.classList.remove('click')
    } else {
        el.classList.add('click')
    }
}