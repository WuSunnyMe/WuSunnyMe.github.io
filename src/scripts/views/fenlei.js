// 引入模板
var tplFenlei = require('../tpl/fenlei.string');
// 定义一个视图
SPA.defineView('fenlei', {
  html: tplFenlei,
  
  bindEvents: {
    'beforeShow': function () {
      this.indexSwiper = new Swiper('#fenlei-swiper', {
      	direction:"vertical",
        loop: false,
//      onSlideChangeStart: function (swiper) {
//        $('#nav li').eq(swiper.activeIndex)
//          .addClass('active').siblings().removeClass('active');
//      }
      });
    }
  }
});