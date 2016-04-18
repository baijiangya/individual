window.onload = function () {
    var lst = $('#nav li');
    var la = $('#na>div');
    var na = $('#na');
    lst.mouseover(function () {
        var index = $(this).index()
        na.css('display', 'block')
        na.fadeIn();
        $(this).addClass('csls');
        $(this).siblings().removeClass('csls');
        la.css('display', 'none')
        la.eq(index).css('display', 'block')
    })
    $('#nas').mouseleave(function () {
        na.css('display', 'none')
        la.fadeOut();
        lst.removeClass('csls')
        la.css('display', 'none')
    })
}