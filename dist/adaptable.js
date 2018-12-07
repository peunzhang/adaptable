/*!
 * 名称 : adaptable 页面自动适配
 * 作者 ：白树 https://github.com/peunzhang/adaptable
 * 版本 ：0.0.1
 * 日期 ：2018-12-7
 * 兼容 ：ios 5+、android 2.3.5+、winphone 8+
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