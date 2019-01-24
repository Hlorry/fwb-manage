//var apiHost = "http://127.0.0.1:9000/";
var apiHost="http://106.12.209.182:9000/";
urlHost = "http://image.ilorry.xyz/";

function timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
}

function contains(str, target) {
    if(str==null||str==undefined){
        return false;
    }
    return str.indexOf(target) != -1;
}