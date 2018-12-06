/* 
 * 名称 ：adaptable 页面自动适配
 * 作者 ：白树 http://peunzhang.cnblogs.com
 * 版本 ：0.0.1
 * 日期 ：2018.12.6
 * 兼容 ：ios 5+、android 2.3.5+、winphone 8+
 * 说明：
   要做页面适配其实无非是定义一套不同屏幕宽度的rem单位，如果去写媒体查询其实很难拿到所有屏幕的宽度，而如果我们通过动态获取屏幕宽度去计算页面的各个单位也是一个方法。
   比如：750px宽的视觉稿中有个300px宽度的按钮，那按照比例调整，这个按钮在640px宽的屏幕下的宽度为300/750*640,转化为rem的方法即 width:300/750rem，根元素的字体大小为640px，所以我们有了下面的写法：
   你另外要做的事情是：把页面中的所有单位都除以视觉稿的宽度，转化为rem单位
 */
(function adaptable(window, document){
  var currentClientWidth; //当前浏览器窗口宽度
  var rootElement = document.documentElement; //根元素，即html标签
  function resizeHtmlFontSize(){
    currentClientWidth = rootElement.clientWidth;
    rootElement.style.fontSize = currentClientWidth + "px"; 
  }
  document.addEventListener('DOMContentLoaded', resizeHtmlFontSize);
  window.addEventListener('resize', resizeHtmlFontSize);
}(window, document))