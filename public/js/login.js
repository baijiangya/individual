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
function onlogin(_name,_pwd) {
    //var _name = form.name.value;
    //var _pwd = form.pwd.value;
    //if (!name) {
    //    alert('用户名称不能为空');
    //    return;
    //}
    //if (!pwd) {
    //    alert('密码不能为空');
    //    return;
    //}
    //$.ajax({
    //    url: '/sign',
    //    data: {name: _name, pwd: _pwd},
    //    type: 'post',
    //    dataType: 'json',
    //    success: function (date) {
    //
    //    }
    //});

    $.ajax({
        url: '/sign',//你对数据库的操作路径
        data: {//这是参数
            name: _name,
            pwd: _pwd
        },
        type: 'POST',//提交方式
        dataType: 'json',//返回数据的类型
        success: function (data) {//后台处理数据成功后的回调函数
            // alert(data);
            //  在这里执行对页面的数据刷新
            //$("div .a").html(data);
            alert("111");
        },
        error: function (data) {//后台处理数据失败后的回调函数
            //   alert(data)
            alert("222");
        }
    });

    //form.submit();

}