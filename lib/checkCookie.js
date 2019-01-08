//var apiHost="http://106.12.209.182:9000/";
$(function () {

    if (sessionStorage.getItem('mToken') == null || sessionStorage.getItem('mToken') == "") {
        parent.location.href = "login.html";
    }

});
