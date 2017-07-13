(function(){
	var message=document.getElementById('message');
	var scroll = message.getElementsByClassName('scroll')[0];
	var scroll2 = message.getElementsByClassName('scroll2')[0];
	var jspPane = message.getElementsByClassName('jspPane')[0];
	var mes_n = 0;
	var maxN = jspPane.offsetHeight-document.body.clientHeight+jspPane.offsetTop+100;
	var maxn = document.body.clientHeight-scroll2.offsetHeight;
	scroll2.onmousedown = function(ev){
		//console.log(scroll2)
		var disY = ev.clientY - this.getBoundingClientRect().top;
		var maxT = document.body.clientHeight - this.offsetHeight;
		var maxH = jspPane.offsetHeight - document.body.clientHeight;
		//阻止默认行为
		document.addEventListener('mousedown',function(ev){
			ev.preventDefault()
		})
		document.onmousemove = function(ev){
			var y = ev.clientY-disY-scroll.getBoundingClientRect().top;
			//console.log(y)
			if(y<0){
				y = 0;
			}
			if(y>maxT){
				y = maxT;
			}
			scroll2.style.top = y+'px';
			var scale = y/maxT;
			jspPane.style.top = -scale*maxH+'px';
		}
		document.onmouseup = function(){
			document.onmousemove = document.onmouseup = null;
		}
	}
	window.onmousewheel = function(ev){
		if(ev.wheelDelta<0){
			mes_n++;
			if(mes_n>15){
				mes_n = 15;
			}
			scroll2.style.top = mes_n/15*maxn+'px';
			jspPane.style.top = -mes_n/15*maxN+'px';
		}else{
			mes_n--;
			if(mes_n<0){
				mes_n = 0;
			}
			scroll2.style.top = mes_n/15*maxn+'px';
			jspPane.style.top = -mes_n/15*maxN+'px';
		}
	}
	//删除表单
	var spans = message.getElementsByTagName('span');
	var bix2 = message.getElementsByClassName('bix2');
	for(var i=0;i<spans.length;i++){
		
		spans[i].index = i;
		spans[i].onclick = function(){
			console.log(this.index)
			bix2[this.index].style.transform = 'rotateX(90deg)';
			bix2[this.index].style.opacity = '0';
			bix2[this.index].style.margin = 0;
			bix2[this.index].style.padding = 0;
			setTimeout(function(_this){
				bix2[_this.index].style.display = 'none';
			},1000,this)
		}
	}
	//移入菜单
	var imgg = document.getElementById('imgg');
	var cd = message.getElementsByClassName('caidan')[0];
	var inp = cd.getElementsByTagName('input');
	var onOff = true;
	
	imgg.onmouseover = function(){
		cd.style.display = 'block';
	}
	imgg.onmouseout = function(){
		setTimeout(function(){
			cd.style.display = '';
		},4000)
	}
	for(var i=0;i<inp.length;i++){
		inp[i].index = i;
		inp[i].onclick = function(){
			if(!this.checked){
				bix2[this.index].style.transform = 'rotateX(90deg)';
				bix2[this.index].style.opacity = '0';
				bix2[this.index].style.margin = 0;
				bix2[this.index].style.padding = 0;
				setTimeout(function(_this){
					bix2[_this.index].style.display = 'none';
				},1000,this)
				
			}else if(this.checked){
				bix2[this.index].style.display = 'block';
				setTimeout(function(_this){
					bix2[_this.index].style.transform = 'rotateX(0deg)';
					bix2[_this.index].style.opacity = '1';
					bix2[_this.index].style.margin = '';
					bix2[_this.index].style.padding = '';
				},0,this)
			}
		}
		
	}
})();

