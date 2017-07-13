	var boxs = document.getElementById('workBox');
	var sp = document.getElementById('workBar');
	var jsp = document.getElementsByClassName('jspScrollable')[0];
	var work_jspPane = document.getElementsByClassName('work_jspPane')[0];
	var worKn = 0;
	var worKm = 0;
	var workmaxN = work_jspPane.offsetHeight-document.body.clientHeight;
	var workmaxn = document.body.clientHeight-sp.offsetHeight;
	sp.onmousedown = function(ev){
		var disY = ev.clientY - this.getBoundingClientRect().top;
		var maxT = boxs.clientHeight-this.offsetHeight;
		var maxH = jsp.scrollHeight-jsp.clientHeight;
		document.onmousemove = function(ev){
			var y = ev.clientY-disY-boxs.getBoundingClientRect().top;
			if(y<0){
				y = 0;
			}
			if(y>maxT){
				y = maxT;
			}
			sp.style.top = y+'px';
			var scale = y/maxT;
			work_jspPane.style.top = -scale*maxH+'px';
			
		}
		document.onmouseup = function(){
			document.onmousemove = document.onmouseup = null;
		}
	}
	
	
	
	
	function addMouseWheel(init){
		init.ele.onmousewheel = fn
		init.ele.addEventListener('DOMMouseScroll',fn)
		function fn(ev){
			//true:上，false:下
			var onOff = null;
			if(ev.wheelDelta){
				//其他
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
				//上
				typeof init.fnUp == 'function' && init.fnUp();
			}else{
				//下
				typeof init.fnDown == 'function' && init.fnDown();
			}
			
		}
	}
	addMouseWheel({
		ele:work_jspPane,
		fnUp:function(){	
			worKn--;
			worKm--;
			if(worKn<0){
				worKn=0;
				worKm=0;
			}
			work_jspPane.style.top = worKm/30*workmaxN+'px';
			sp.style.top = worKn/30*workmaxn+'px';
		},
		fnDown:function(){
			worKn++;
			worKm++;
			if(worKn>30){
				worKn=30;
				worKm=30;
			}
			work_jspPane.style.top = worKm/30*workmaxN+'px';
			sp.style.top = worKn/30*workmaxn+'px';
		}
	})