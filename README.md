# adaptable
一行代码让你的页面适配所有的移动端浏览器
<img src="https://raw.githubusercontent.com/peunzhang/adaptable/master/adaptable_demo.gif" width="100%" style="max-width:100%;">

## 原理
要做页面适配其实无非是定义一套不同屏幕宽度的rem单位，如果去写媒体查询其实很难拿到所有屏幕的宽度，而如果我们通过动态获取屏幕宽度去计算页面的各个单位也是一个方法。
比如：
750px宽的视觉稿中有个300px宽度的按钮，那按照比例调整，这个按钮在640px宽的屏幕下的宽度为300/750*640
转化为rem的方法即 width:300/750rem，根元素的字体大小为640px

<pre>
.btn{
	 /*
	    按钮的宽度是300px，那么转化为rem是300/750 = 0.4rem ，高度是50px，那么转化为rem是50/750 = 0.066667rem
	    字号32px，那么转化为rem是32/750 = 0.042667rem
	 */
	width: 0.4rem;
	height: 0.066667rem;
	font-size: 0.042667rem;
}
</pre>
