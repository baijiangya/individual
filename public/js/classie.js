

( function( window ) {

'use strict';



function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}
var hasClass, addClass, removeClass;




if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );

$(function(){
  // 导航左侧栏js效果 start
  $(".pullDownList li").hover(function(){
    $(".yMenuListCon").fadeIn();
    var index=$(this).index(".pullDownList li");
    if (!($(this).hasClass("menulihover")||$(this).hasClass("menuliselected"))) {
      $($(".yBannerList")[index]).css("display","block").siblings().css("display","none");
      $($(".yBannerList")[index]).removeClass("ybannerExposure");
      setTimeout(function(){
        $($(".yBannerList")[index]).addClass("ybannerExposure");
      },60)
    }else{
    }
    $(this).addClass("menulihover").siblings().removeClass("menulihover");
    $(this).addClass("menuliselected").siblings().removeClass("menuliselected");
    $($(".yMenuListConin")[index]).fadeIn().siblings().fadeOut();
  },function(){

  })
  $(".pullDown").mouseleave(function(){
    $(".yMenuListCon").fadeOut();
    $(".yMenuListConin").fadeOut();
    $(".pullDownList li").removeClass("menulihover");

  })
  // 导航左侧栏js效果  end

})