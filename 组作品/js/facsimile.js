var box = document.getElementsByClassName('oneBox')[0];
var btn1 = document.getElementsByClassName('Btn1')[0];
var btn2 = document.getElementsByClassName('Btn2')[0];
var btn3 = document.getElementsByClassName('Btn3')[0];
var one = document.getElementsByClassName('one')[0];
var jj = document.getElementsByClassName('facsimileSynopsis')[0];
var timer = null;
var check = true;
/*简介事件*/
btn1.onclick = function(){
	if(check){
		check = false;
		box.style.transform = 'rotateY(90deg)';
		this.timer = setTimeout(function(){
			jj.style.zIndex=3;
			box.style.transform = 'rotateY(180deg)';
			check = true;
		},50)
	}
}
/*返回事件*/
btn3.onclick = function(){
	if(check){
		check = false;
		box.style.transform = 'rotateY(90deg)';
		this.timer = setTimeout(function(){
			jj.style.zIndex=1;
			box.style.transform = 'rotateY(0deg)';
			check = true;
		},50)
	}
}
/*打开事件*/
btn2.onclick = function(){
	open('www/去哪网/where_to_go.html')
}
var Box = document.getElementsByClassName('twoBox')[0];
var Btn1 = Box.getElementsByClassName('Btn1')[0];
var Btn2 = Box.getElementsByClassName('Btn2')[0];
var Btn3 = Box.getElementsByClassName('Btn3')[0];
var One = Box.getElementsByClassName('one')[0];
var Jj = Box.getElementsByClassName('facsimileSynopsis')[0];
var timer = null;
var check = true;
/*简介事件*/
Btn1.onclick = function(){
	if(check){
		check = false;
		Box.style.transform = 'rotateY(90deg)';
		this.timer = setTimeout(function(){
			Jj.style.zIndex=3;
			Box.style.transform = 'rotateY(180deg)';
			check = true;
		},50)
	}
}
/*返回事件*/
Btn3.onclick = function(){
	if(check){
		check = false;
		Box.style.transform = 'rotateY(90deg)';
		this.timer = setTimeout(function(){
			Jj.style.zIndex=1;
			Box.style.transform = 'rotateY(0deg)';
			check = true;
		},50)
	}
}
/*打开事件*/
Btn2.onclick = function(){
	open('www/中粮我买网/COFCO.html')
}