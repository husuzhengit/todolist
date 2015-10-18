/*创建遮罩层*/
function maskFun(){
	var div = document.createElement('div');
	div.setAttribute('class','pg-mask');
	document.getElementsByTagName('body')[0].appendChild(div);
}