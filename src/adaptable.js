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