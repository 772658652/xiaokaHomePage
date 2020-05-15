import $ from '../utils/jquery';
import '../css/culture.scss';

$(function(){
  let ismaskShow = false;

  const $mask = $('#mask');
  $('.menu-area').on('touchstart', function (event) {
    event.preventDefault();
    let topTxt = ismaskShow ? '-100%' : '0';
    $mask.show().animate({
      top: topTxt
    }, 500, 'linear');
    $('.pagehead').toggleClass('menu-open');
    ismaskShow = !ismaskShow;
  });
});
