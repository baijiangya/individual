$(function () {
    $('#nav li').click(function () {
        $(this).removeClass('f')
        $(this).addClass('selected')
        $(this).siblings().removeClass('selected');
        $(this).siblings().addClass('f');
//                $('#menu_con div').eq($(this).index()).siblings().css('display','none');
//                $('#menu_con div').eq($(this).index()).css('display','block')
        var men = $('#menu_con >div');
        var index = $(this).index()
        men.css('display', 'none')
        men.eq(index).css('display', 'block')
    })
});
function onlogin(form) {
    var _name = form.name.value;
    var _pwd = form.pwd.value;
    if (!_name) {
        alert('用户名称不能为空');
        return;
    }
    if (!_pwd) {
        alert('密码不能为空');
        return;
    }
    $.ajax({
        url: '/sign',//你对数据库的操作路径
        data: {//这是参数
            name: _name,
            pwd: _pwd
        },
        type: 'POST',//提交方式
        dataType: 'json',//返回数据的类型
        success: function (data) {//后台处理数据成功后的回调函数

        },
        error: function (data) {//后台处理数据失败后的回调函数

        }
    });

    //form.submit();

}
//function onselectimage() {
//    var xmlHttpReq = null;
//    //IE浏览器使用ActiveX
//    if (window.ActiveXObject) {
//        xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
//    }
//    //其它浏览器使用window的子对象XMLHttpRequest
//    else if (window.XMLHttpRequest) {
//        xmlHttpReq = new XMLHttpRequest();
//    }
//    var filenode = document.getElementById("file");
//
//
//    if (xmlHttpReq != null) {
//        //设置回调，当请求的状态发生变化时，就会被调用
//        xmlHttpReq.onreadystatechange = function () {
//            //等待上传结果
//            if (xmlHttpReq.readyState == 1) {
//                filenode.parentNode.style.backgroundImage = "url('/images/bigloader.gif')";
//            }
//            //上传成功，返回的文件名，设置到div的背景中
//            if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
//                filenode.parentNode.style.backgroundImage = "url('/upload/" + xmlHttpReq.responseText + "')";
//            }
//        }
//        //构造form数据
//        var form = new FormData();
//        form.append("file", filenode.files[0]);
//
//
//        //设置请求（没有真正打开），true：表示异步
//        xmlHttpReq.open("POST", "/upload", true);
//        //不要缓存
//        //xmlHttpReq.setRequestHeader("If-Modified-Since", "0");
//        //提交请求
//        xmlHttpReq.send(form);
//        //清除掉，否则下一次选择同样的文件就进入不到onchange函数中了
//        filenode.value = null;
//    }
//}
