var hobby = document.getElementById('hobby');
var hobbyBj = document.getElementsByClassName('hobbyBj')[0];
var bgLis = hobbyBj.getElementsByTagName('li');
var hobbyCont = document.getElementsByClassName('hobbyCont')[0];
var hobbyNav = document.getElementsByClassName('hobbyNav')[0];
var hobbyBtn = document.getElementsByClassName('hobbyBtn')[0];
var navLis = hobbyNav.getElementsByTagName('li');
var btnp = hobbyBtn.getElementsByTagName('span');
var btnFinder = document.getElementsByClassName('btnFinder')[0];
var as = btnFinder.getElementsByTagName('a');
var hobbyList = document.getElementsByClassName('hobbyList')[0];
var hobbyWheel = document.getElementsByClassName('hobbyWheel')[0];
hobbyBtn.check = false;
var maxN = 0;
var maxn = document.body.clientHeight-hobbyWheel.offsetHeight-80;
var n1 = 0;
var n2 = 0;
//页面刚刚加载的效果
window.onload = function(){
	var n = -1;
	var h = bgLis[0].offsetHeight;
	hobbyBj.timer = setInterval(function(){
		n++;
		bgLis[n].style.backgroundPositionY = -n*h+'px';
		bgLis[n].style.transform = 'rotateX(0deg)';
		if(n==bgLis.length-1){
			clearInterval(hobbyBj.timer);
		}
	},50)
}


var arrMove  = [{left:-123,top:-10},
				{left:-76,top:-70},
				{left:0,top:-100},
				{left:76,top:-70},
				{left:127,top:-10}]
	

hobbyBtn.onmouseover = function(){
	clearTimeout(hobbyBtn.onOff);
	btnp[0].style.transform = 'scale(1.5)';
	btnp[0].style.opacity = '0';
	btnp[1].style.transform = 'scale(1)';
	btnp[1].style.opacity = '1';
	for(var i=0;i<as.length;i++){
		setTimeout(function(i){
			move(
				{obj:as[i],
				attrs:arrMove[i%arrMove.length],
				duration:200},
			)	
		},i*100,i)
	}
}
hobbyBtn.onmouseleave = function(){
	btnp[0].style.transform = 'scale(1)';
	btnp[0].style.opacity = '1';
	btnp[1].style.transform = 'scale(1.5)';
	btnp[1].style.opacity = '0';
	hobbyBtn.onOff = setTimeout(function(){	
		for(var i=0;i<as.length;i++){
			setTimeout(function(i){
				move(
					{obj:as[i],
					attrs:{top:0,left:0},
					duration:200}
				)	
			},i*100,i)
		}
	},300)
}
for(var i=0;i<as.length;i++){
	as[i].onmouseover = function(){
		btnp[0].style.transform = 'scale(1.5)';
		btnp[0].style.opacity = '0';
		btnp[1].style.transform = 'scale(1)';
		btnp[1].style.opacity = '1';
		clearTimeout(hobbyBtn.onOff);
		this.children[0].style.transform = 'rotate(135deg)';
	}
	as[i].onmouseleave = function(){
		this.children[0].style.transform = '';
		hobbyBtn.onOff = setTimeout(function(){
			btnp[0].style.transform = 'scale(1)';
			btnp[0].style.opacity = '1';
			btnp[1].style.transform = 'scale(1.5)';
			btnp[1].style.opacity = '0';
			for(var i=0;i<as.length;i++){
				setTimeout(function(i){
					move(
						{obj:as[i],
						attrs:{top:0,left:0},
						duration:200}
					)	
				},i*100,i)
			}
		},300)
	}
}
navLis[0].className = 'borChang';
for(var i=0;i<navLis.length;i++){
	navLis[i].index = i;
	navLis[i].onclick = function(){
		for(var i=0;i<navLis.length;i++){
			navLis[i].className = '';
			
		}
		this.className = 'borChang';
		if (this.index==0) {
			allshowessay()
		}
		if(this.index==1){
			hobbyList.innerHTML = '';
			for(var h in hobbyData.film){
				var li =document.createElement('li');
				li.innerHTML=`
							<h1>${hobbyData.film[h]['name']}</h1>
							 <h3><span>by</span> Puppet</h3>
							<p>${hobbyData.film[h]['txt']}</p>
							<div class="line">
								<a href="#">read more</a>
								<div></div>
							</div>
							<div class="date">
								<p>${hobbyData.film[h].sj[1]}-${hobbyData.film[h].sj[2]}</p>
								<span>${hobbyData.film[h].sj[0]}</span>
							</div>`;
				hobbyList.appendChild(li);
				hobbyTab()
			}
		}
		if(this.index==2){
			hobbyList.innerHTML = '';
			for(var h in hobbyData.travel){
				var li =document.createElement('li');
				li.innerHTML=`
							<h1>${hobbyData.travel[h]['name']}</h1>
							 <h3><span>by</span> Puppet</h3>
							<p>${hobbyData.travel[h]['txt']}</p>
							<div class="line">
								<a href="#">read more</a>
								<div></div>
							</div>
							<div class="date">
								<p>${hobbyData.travel[h].sj[1]}-${hobbyData.travel[h].sj[2]}</p>
								<span>${hobbyData.travel[h].sj[0]}</span>
							</div>`;
				hobbyList.appendChild(li);
				hobbyTab()
			}
		}
		if(this.index==3){
			hobbyList.innerHTML = '';
			for(var h in hobbyData.fitness){
				var li =document.createElement('li');
				li.innerHTML=`
							<h1>${hobbyData.fitness[h]['name']}</h1>
							 <h3><span>by</span> Puppet</h3>
							<p>${hobbyData.fitness[h]['txt']}</p>
							<div class="line">
								<a href="#">read more</a>
								<div></div>
							</div>
							<div class="date">
								<p>${hobbyData.fitness[h].sj[1]}-${hobbyData.fitness[h].sj[2]}</p>
								<span>${hobbyData.fitness[h].sj[0]}</span>
							</div>`;
				hobbyList.appendChild(li);
				hobbyTab()
			}
		}	
		maxN = hobbyCont.offsetHeight-document.body.clientHeight+80;
	}
}
allshowessay()
function allshowessay(){
	hobbyList.innerHTML='';
	for(var k in hobbyData){
		for(var h in hobbyData[k]){
			var li =document.createElement('li');
			li.innerHTML=`
						<h1>${hobbyData[k][h]['name']}</h1>
						 <h3><span>by</span> Puppet</h3>
						<p>${hobbyData[k][h]['txt']}</p>
						<div class="line">
							<a href="#">read more</a>
							<div></div>
						</div>
						<div class="date">
							<p>${hobbyData[k][h].sj[1]}-${hobbyData[k][h].sj[2]}</p>
							<span>${hobbyData[k][h].sj[0]}</span>
						</div>`;
			hobbyList.appendChild(li);
			maxN = hobbyCont.offsetHeight-document.body.clientHeight+80;
			hobbyTab()
		}
	}	
}
//滚轮事件
function addMouseWheel(init){
	init.ele.onmousewheel = fn
	init.ele.addEventListener('DOMMouseScroll',fn)
	function fn(ev){
		var onOff = null;
		if(ev.wheelDelta){
			if(ev.wheelDelta>0){
				onOff = true;
			}else{
				onOff = false;
			}
		}else{
			if(ev.detail<0){
				onOff = true;
			}else{
				onOff = false;
			}
		}
		if(onOff){
			typeof init.fnUp == 'function' && init.fnUp();
		}else{
			typeof init.fnDown == 'function' && init.fnDown();
		}
		
	}
}
addMouseWheel({
	ele:hobbyCont,
	fnUp:function(){
		n1--;
		n2--;
		if(n1<0){
			n1=0;
		}
		if(n2<0){
			n2=0;
		}
		console.log(maxN)
		hobbyCont.style.top = 80-n1/20*maxN+'px';
		console.log(n1)
		hobbyWheel.style.top = 80+n2/20*maxn+'px';
	},
	fnDown:function(){
		n1++;
		n2++;
		if(n1>20){
			n1=20;
		}
		if(n2>20){
			n2=20;
		}
		hobbyCont.style.top = 80-n1/20*maxN+'px';
		hobbyWheel.style.top = 80+n2/20*maxn+'px';	
		console.log(n1)
	}
})
function hobbyTab(){
	var lis = hobbyList.getElementsByTagName('li');
	for (var i=0;i<lis.length;i++) {
		lis[i].onmouseover = function(){
			this.style.background = '#000';
			this.style.opacity = '0.6';
			this.firstElementChild.style.color = '#fff';
		}
		lis[i].onmouseout = function(){
			this.style.background = '';
			this.style.opacity = '';
			this.firstElementChild.style.color = '';
		}
	}
}
hobbyBtn.onclick = function(){
	open('homepage.html','_self');
}
