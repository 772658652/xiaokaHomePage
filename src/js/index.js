import $ from '../utils/jquery';
import lottie from 'lottie-web';
import '../css/index.scss';
// import MyPlugin from '../utils/app';
$(function () {
  const $mask = $('#mask'), $pageani2 = $('#page2-ani');
  const assetsurl = $("#assetsurl").val();
  console.log('assetsurl',assetsurl);
  let ismaskShow = false;
  let isDownloading = false;
  let isHuoZhuRun = false, isSijiRun = false, isXiuliRun = false, isSanRun = false;
  lottie.loadAnimation({
    container: document.querySelector('#page1-ani'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `./assets/ani_1/data.json`
  });

  lottie.loadAnimation({
    container: document.querySelector('#page3-ani'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `./assets/ani_3/data.json`
  //  path: `${assetsurl}/assets/ani_3/data.json`
  });

  lottie.loadAnimation({
    container: document.querySelector('.slider1 .car1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `./assets/car_1/data.json`
  });

  lottie.loadAnimation({
    container: document.querySelector('.slider1 .car2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `./assets/car_2/data.json`
  });

  lottie.loadAnimation({
    container: document.querySelector('.slider1 .car3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `./assets/car_3/data.json`
  });

  lottie.loadAnimation({
    container: document.querySelector('.slider2 .car1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `./assets/car_1/data.json`
  });

  lottie.loadAnimation({
    container: document.querySelector('.slider2 .car2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `./assets/car_2/data.json`
  });

  lottie.loadAnimation({
    container: document.querySelector('.slider2 .car3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `./assets/car_3/data.json`
  });

  lottie.loadAnimation({
    container: document.querySelector('.slider3 .car1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `./assets/car_1/data.json`
  });

  lottie.loadAnimation({
    container: document.querySelector('.slider3 .car2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `./assets/car_2/data.json`
  });

  lottie.loadAnimation({
    container: document.querySelector('.slider3 .car3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `./assets/car_3/data.json`
  });

  let rightX = -2130;
  setInterval(function () {
    $pageani2.css({
      left: `${rightX}px`
    });
    rightX += 1;
    if (rightX === 0) {
      rightX = -2130;
    }
  }, 10);

  function initBottom() {
    if (document.body.clientHeight < 600) {
      $('.page1-content').css({
        bottom: '-1rem'
      });
      $('.page2-content').css({
        bottom: '-1rem'
      });
      $('.page3-content').css({
        bottom: '0'
      });
    } else {
      $('.page1-content').css({
        bottom: '-3rem'
      });
      $('.page2-content').css({
        bottom: '-4rem'
      });
      $('.page3-content').css({
        bottom: '-3rem'
      });
    }
  }
  initBottom();
  window.addEventListener('resize', initBottom, false);

  $('.menu-area').on('touchstart', function (event) {
    event.preventDefault();
    let topTxt = ismaskShow ? '-100%' : '0';
    $mask.show().animate({
      top: topTxt
    }, 500, 'linear');
    $('.pagehead').toggleClass('menu-open');
    ismaskShow = !ismaskShow;
  });

  document.body.addEventListener('touchmove', function (event) {
    event = event ? event : window.event;
    if (event.preventDefault) {
      event.preventDefault()
    } else {
      event.returnValue = false
    }
  }, false);
  const pages = function (obj) {
    const box = document.getElementById(obj.wrap);
    const box2 = document.getElementById(obj.wrap2);
    let len = obj.len;
    let n = obj.n;
    let startY, moveY, cliH;
    const getH = function () {
      cliH = document.body.clientHeight;
    };
    getH();

    window.addEventListener('resize', getH, false);

    const touchstart = function (event) {
      if (!event.touches.length) {
        return;
      }
      startY = event.touches[0].pageY;
      moveY = 0;
    };

    const touchmove = function (event) {
      if (!event.touches.length) {
        return;
      }
      moveY = event.touches[0].pageY - startY;
      box2.style.transform = 'translateY(' + (-n * cliH + moveY) + 'px)';
    };

    const touchend = function (event) {
      if (moveY < -50) n++;
      if (moveY > 50) n--;
      if (n < 0) n = 0;
      if (n > len - 1) n = len - 1;
      box2.style.transform = 'translateY(' + (-n * 10) + '%)';
      pageChaneAni(n);
    };
    //touch事件绑定
    const $box = $(`#${obj.wrap}`);
    $box.on('touchstart', function (event) {
      // event.preventDefault();
      touchstart(event)
    });
    $box.on('touchmove', function (event) {
      event.preventDefault();
      touchmove(event)
    });
    $box.on('touchend', function (event) {
      touchend(event)
    });
  };

  pages({
    wrap: 'index',
    wrap2: 'wrap2',
    len: 5,
    n: 0
  });


  function pageChaneAni(n) {
    const $page3ani = $("#page3-ani");
    if (n === 2) {
      if (!isSanRun) {
        $page3ani.animate({
          bottom: '0'
        }, 1000, 'linear', function () {
          isSanRun = false;
        });
      }
      isSanRun = true;
    } else {
      if (!isSanRun) {
        $page3ani.animate({
          bottom: '-200%'
        }, 500, 'linear');
      }
    }
    if (n === 3) {
      if (!isHuoZhuRun && !isSijiRun && !isXiuliRun) {
        yuanhuAni({
          left: 40,
          top: 0,
          r: 60,
          angle: 320,
          endangle: 140,
          type: 'huozhu'
        }, $('#page4-warn .huozhu'));
        yuanhuAni({
          left: 60,
          top: -90,
          r: 60,
          angle: 240,
          endangle: 60,
          type: 'xiuli'
        }, $('#page4-warn .xiuli'));
        yuanhuAni({
          left: -60,
          top: -50,
          r: 60,
          angle: 90,
          endangle: 270,
          type: 'siji'
        }, $('#page4-warn .siji'));
      }
    } else {
      if (!isHuoZhuRun && !isSijiRun && !isXiuliRun) {
        $('#page4-warn .man').css({
          transform: 'translate(0,0)',
          opacity: 0
        });
      }
    }

  }

  function yuanhuAni(initobj, el) {
    if (isHuoZhuRun && isSijiRun && isXiuliRun) {
      return;
    }
    let initLeft = initobj.left, initTop = initobj.top, r = initobj.r, angle = initobj.angle, endangle = initobj.endangle;
    let opacityAdd = endangle > angle ? endangle - angle : 360 - (angle - endangle);
    opacityAdd = 1 / opacityAdd;
    let nextOpacity = 0;
    let aniid = setInterval(function () {
      angle++; //增加度数
      nextOpacity = nextOpacity + opacityAdd;
      let currLeft = initLeft + r * Math.sin((angle / 180) * Math.PI) + 'px';
      let currTop = initTop + (r - r * Math.cos((angle / 180) * Math.PI)) + 'px';
      el.css({
        transform: `translate(${currLeft},${currTop})`,
        opacity: nextOpacity
      });
      if (angle === 360) {
        angle = 0;
      }
      if (angle === endangle) {
        isHuoZhuRun = false;
        isSijiRun = false;
        isXiuliRun = false;
        clearInterval(aniid);
      }
    }, 1);
    switch (initobj.type) {
      case 'huozhu':
        isHuoZhuRun = true;
        break;
      case 'siji':
        isSijiRun = true;
        break;
      case 'xiuli':
        isXiuliRun = true;
        break;
    }
  }

  // 防抖函数
  function throttle(fn) {
    let canRun = true;
    return function () {
      if (!canRun) {
        return;
      }
      canRun = false;
      setTimeout(() => {
        fn.call(this, arguments);
        canRun = true;
      }, 2000);
    };
  }

  $(".download-btn").click(function () {
    onDownload();
  });
  $(".download-guide").click(function () {
    $(".download-guide").css('display','block');
  });

  function onDownload() {
    let url = 'http://test.api.xiaoyikafu.com'; // 请求下载链接的端口地址，若部署，需替换
    let ua = navigator.userAgent.toLowerCase();
    let isWeixin = ua.indexOf('micromessenger') != -1;
    // this.props.onClose();
    if (isWeixin) {
      $(".download-guide").css('display','none');
    } else {
      if(!isDownloading){
        isDownloading = true;
        $.ajax({
          url: url + '/share/download',
          method: 'GET',
          // data: $('#form').serialize(),
          success: function (data) {
            if (data['code'] == '0000') {
              isDownloading = false;
              let link = document.createElement('a');//设置下载的文件名
              link.download = '小易货车宝';
              link.style.display = 'none';//设置下载路径
              link.href = data['data'];//触发点击
              document.body.appendChild(link);
              link.click();//移除节点
              document.body.removeChild(link);
            }
          },
          error: function (error) {

          }
        });
      }

    }
  }
});
