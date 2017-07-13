/*背景图片的数组存放*/
var essayBac=['url(img/essay/essay1.jpg)','url(img/essay/essay2.jpg)','url(img/essay/essay3.jpg)']
var essay = document.getElementById('essay');
var essayLeft = document.getElementsByClassName('essayLeft');
var essayMenu = document.getElementsByClassName('essayMenu');
var menuBox = document.getElementsByClassName('menuBox');
var menuBtn = document.getElementsByClassName('menuBtn');
var essayContRight=document.getElementsByClassName('essayContRight')[0];
var ulSec1=document.getElementsByClassName('essaySection1')[0].getElementsByTagName('ul')[0];
var lisSec1=ulSec1.getElementsByTagName('li');
/*part1部分*/
console.log(document.body.offsetHeight);
var essayoriginal=document.getElementsByClassName('essayCommon');
for(var h=0;h<essayoriginal.length;h++){
	essayoriginal[h].style.height=document.body.offsetHeight+'px';
	essayoriginal[h].style.overflow='hidden';
}
var ulSec1=document.getElementsByClassName('essaySection1')[0].getElementsByTagName('ul')[0];
ulSec1.style.overflow='hidden';
for(var i=0;i<dataessay.zl.length;i++){
	if((i+1)*90<document.body.offsetHeight){
	var li1=document.createElement('li');
	var divtle1=document.createElement('div');
	divtle1.className='essaySec1tle';
	divtle1.innerText=dataessay.zl[i].name;
	var span1=document.createElement('span');
	span1.innerText=dataessay.zl[i].date;
	divtle1.appendChild(span1);
	var divcon1=document.createElement('div');
	divcon1.className='essaySec1con';
	for(var h=0;h<dataessay.zl[i].content.length;h++){
		var p1=document.createElement('p');
		p1.innerText=dataessay.zl[i].content[h];
		divcon1.appendChild(p1);
	}
	li1.appendChild(divtle1);
	li1.appendChild(divcon1);
	li1.onOff=true;
	li1.index=i
	li1.onclick=function(){
		var essaySec1tle=this.getElementsByClassName('essaySec1tle')[0];
		if(this.onOff){
			this.className='activeSec1ul';
			essaySec1tle.style.paddingLeft=60+'px';
			ulSec1.style.top=-90*this.index+10+'px';
		}
		else{
			this.className=''
			essaySec1tle.style.cssText='';
			ulSec1.style.cssText='';
		}
		this.onOff=!this.onOff;
	}
	ulSec1.appendChild(li1);
	}
}
/*Part2部分*/
var ulSec2=document.getElementsByClassName('essaySection2')[0].getElementsByTagName('ul')[0];
for(var i=0;i<dataessay.mw.length;i++){
	var li2=document.createElement('li');
	li2.onOff=true;
	var divbox2=document.createElement('div');
	divbox2.className='essaySec2bac'+(i+1);
	divbox2.classList.add('essaySec2Common');
	var h22=document.createElement('h2');
	h22.innerText=dataessay.mw[i].name;
	var divcon2=document.createElement('div');
	for(var h=0;h<dataessay.mw[i].content.length;h++){
		var p2=document.createElement('p');
		p2.innerText=dataessay.mw[i].content[h];
		divcon2.appendChild(p2);
	}
	divbox2.appendChild(h22);
	divbox2.appendChild(divcon2);
	li2.appendChild(divbox2);
	li2.onclick=function(){
		var op=this.getElementsByClassName('essaySec2Common')[0];
		var pos=-(this.getBoundingClientRect().top);
		if(this.onOff){
			op.style.zIndex=1;
		   	 move({
		   	 	obj:op,
		 		attrs:{top:pos},
		 		duration:500,
		 		callBack:function(){
		 			move({
		 			obj:op,
		 			attrs:{height:895},
		 			duration:500,
		 			
		 		}) 	 	
		 		}
		   	 });
	   	}
		else{
		   	move({
		   	 	obj:op,
		 		attrs:{height:0},
		 		duration:500,
		 		callBack:function(){
		 			move({
		 			obj:op,
		 			attrs:{top:0},
		 			duration:500,
		 			callBack:function(){op.style.zIndex=0;}
		 		}) 	 	
		 		}
		   	 });
		}
		this.onOff=!this.onOff;
	}	
	ulSec2.appendChild(li2);
}
/*part3部分*/
var ulSec3=document.getElementsByClassName('essaySection3')[0].getElementsByTagName('ul')[0];
for(var i=0;i<dataessay.yp.length;i++){
	var li3=document.createElement('li');
	li3.onOff=true;
	var divbox3=document.createElement('div');
	divbox3.className='essaySec3Common';
	var h23=document.createElement('h2');
	h23.innerText=dataessay.yp[i].name;
	var divcon3=document.createElement('div');
	for(var h=0;h<dataessay.yp[i].content.length;h++){
		var p3=document.createElement('p');
		p3.innerText=dataessay.yp[i].content[h];
		divcon3.appendChild(p3);
	}
	divbox3.appendChild(h23);
	divbox3.appendChild(divcon3);
	li3.appendChild(divbox3);
	li3.onclick=function(){
		var op=this.getElementsByClassName('essaySec3Common')[0];
		var pos=this.getBoundingClientRect().left-ulSec3.getBoundingClientRect().left
		if(this.onOff){
			op.style.zIndex=1;
			op.classList.add('active');
		   	 move({
		   	 	obj:op,
		 		attrs:{left:-pos},
		 		duration:500,
		 		callBack:function(){
		 			move({
		 			obj:op,
		 			attrs:{width:900},
		 			duration:500,		 			
		 		}) 	 	
		 		}
		   	 });
	   	}
		else{
			move({
		   	 	obj:op,
		 		attrs:{width:60},
		 		duration:500,
		 		callBack:function(){
		 			move({
		 			obj:op,
		 			attrs:{left:0},
		 			duration:500,
		 			callBack:function(){op.style.zIndex=0;op.classList.remove('active')}
		 		}) 	 	
		 		}
		   	 });
		}
		this.onOff=!this.onOff;	
	}
	ulSec3.appendChild(li3);
}
var lisSec1=ulSec1.getElementsByTagName('li');
var lisSec2=ulSec2.getElementsByTagName('li');
var lisSec3=ulSec3.getElementsByTagName('li');
for(var i=0;i<menuBox.length;i++){
	menuBox[i].index = i;
	menuBox[i].onmouseover = function(){
		this.style.background = 'rgba(205,92,92,0.2)';
		menuBtn[this.index].style.background = 'rgba(128,0,0,0.4)';
	}
	menuBox[i].onmouseout = function(){
		this.style.cssText = '';
		menuBtn[this.index].style.cssText = '';
	}
	menuBox[i].onmousedown = function(){
		checkclose();
		this.parentNode.style.top = (this.offsetTop + 2)+'px';
		this.parentNode.style.left = (this.offsetLeft + 2)+'px';
		this.parentNode.style.boxShadow = '2px 2px 4px #000';
		essay.style.backgroundImage=essayBac[this.index];
		essayContRight.style.top=-0.334*essayContRight.offsetHeight*this.index+'px';
	}
	menuBox[i].onmouseup = function(){
		this.parentNode.style.top = '';
		this.parentNode.style.left = '';
		this.parentNode.style.boxShadow = '';
	}
	function checkclose(){
		for(var i=0;i<lisSec1.length;i++){
			if(!lisSec1[i].onOff){
				var essaySec1tle=lisSec1[i].getElementsByClassName('essaySec1tle')[0];
				lisSec1[i].className=''
				essaySec1tle.style.cssText='';
				ulSec1.style.cssText='';
				lisSec1[i].onOff=true;
			}
		}
		for(var i=0;i<lisSec2.length;i++){
			if(!lisSec2[i].onOff){
				var op=lisSec2[i].getElementsByClassName('essaySec2Common')[0];
				move({
			   	 	obj:op,
			 		attrs:{height:0},
			 		duration:500,
			 		callBack:function(){
			 			move({
			 			obj:op,
			 			attrs:{top:0},
			 			duration:500,
			 			callBack:function(){op.style.zIndex=0;}
			 		}) 	 	
			 		}
			   	 })
				lisSec2[i].onOff=true;
			}
		}
		for(var i=0;i<lisSec3.length;i++){
			if(!lisSec3[i].onOff){
				var op=lisSec3[i].getElementsByClassName('essaySec3Common')[0];
				var pos=lisSec3[i].getBoundingClientRect().left-ulSec3.getBoundingClientRect().left
				move({
			   	 	obj:op,
			 		attrs:{width:60},
			 		duration:500,
			 		callBack:function(){
			 			move({
			 			obj:op,
			 			attrs:{left:0},
			 			duration:500,
			 			callBack:function(){op.style.zIndex=0;op.classList.remove('active')}
			 		}) 	 	
			 		}
			   	 });
				lisSec3[i].onOff=true;
			}
		}		
	}
}