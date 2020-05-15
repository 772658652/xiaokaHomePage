; (function (global) {
  //开启严格模式
  "use strict";
  //构造函数定义一个类    传参数
  function MyPlugin(el, options) {
    //some code

  };


  //原型上提供方法
  MyPlugin.prototype = {
    //定义方法
    show: function () {
      //some code
    }

  };

  if (typeof module !== 'undefined' && module.exports) {    //兼容CommonJs规范 
    module.exports = MyPlugin;
  } else if (typeof define === 'function') {   //兼容AMD/CMD规范
    define(function () {
      return MyPlugin
    })
  } else {    //注册全局变量，兼容直接使用script标签引入插件
    global.MyPlugin = MyPlugin;
  }
})(this);
