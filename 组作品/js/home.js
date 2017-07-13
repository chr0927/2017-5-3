var indexMenu=document.getElementById('indexMenu');
var essay = document.getElementById('essay');
var facsimile=document.getElementById('facsimile');
var message=document.getElementById('message');
var photos=document.getElementById('photos');
var work=document.getElementById('work');
var area_left=document.getElementsByClassName('area_left')[0];
var area_top=document.getElementsByClassName('area_top')[0];
var area_bottom=document.getElementsByClassName('area_bottom')[0];
var lis=indexMenu.getElementsByTagName('li');
var em=indexMenu.getElementsByTagName('em');
var span=indexMenu.getElementsByTagName('span');
var arrImg=['img/home_1.png','img/home_2.png','img/home_3.png','img/home_4.png','img/home_5.png','img/home_6.png','img/home_7.png'];
var color=['#e6c15a','#f0ab64','#ed2547','#D3206C','#4279c3','#1ac891','#94C076'];
var sel=document.getElementsByClassName('main_area')[0]
var selUl=sel.getElementsByTagName('ul')[0];
var selLi=selUl.getElementsByTagName('li');
var divs=document.getElementsByTagName('div');
location.hash='#path=home';
move({
	obj:indexMenu,
	attrs:{top:0},
	duration:300,
	fx:'linear',
})
var timer=setTimeout(function(){
	sel.style.width='70%';
	clearTimeout(timer)
},300)
selLi[0].className='act';
chuShi();
function chuShi(){
	for(var i=0;i<lis.length;i++){
	lis[i].style.height=indexMenu.offsetHeight/lis.length+'px';
	span[i].style.backgroundImage='url('+arrImg[i]+')';
	lis[i].index=i;
	lis[i].onmouseenter=function(){
		this.style.backgroundColor=color[this.index];
		span[this.index].style.transition='300ms';
		span[this.index].style.marginRight='60px';
		for(var i=0;i<selLi.length;i++){
			selLi[i].className='';
		}
		selLi[this.index].style.transition='300ms';
		selLi[this.index].className='act';
		
	}
	lis[i].onmouseleave=function(){
		selLi[this.index].style.transition='300ms';
		selLi[this.index].className='';
		this.style.backgroundColor=''
		span[this.index].style.marginRight='';
		}
	}
}

lis[0].onclick=function(ev){
	document.body.className='type_normal';
	indexMenu.style.top=0;
	clearDiv();
	/*ev.preventDefault();*/	
	/*area_left.style.opacity='';
	area_left.style.zIndex='';*/
	for(var i=0;i<lis.length;i++){
		setTimeout(function(i){
			move({
			obj:lis[i],
			attrs:{left:0},
			duration:300,
			})
		},i*50,i)
	}
	move({
			obj:sel,
			attrs:{width:(0.7*indexMenu.offsetWidth)},
			duration:300
		})
	chuShi();
}

lis[1].onclick=function(ev){
	indexMenu.style.top=0;
	/*ev.preventDefault();*/
	clearDiv();
	var hea=message.getElementsByClassName('hea')[0];
	hea.style.position='fixed';
	move({
		obj:message,
		attrs:{left:200},
		duration:300
		})
	move({
			obj:sel,
			attrs:{width:0},
			duration:20
		})
	for(var i=0;i<lis.length;i++){
		span[i].style.marginRight='';
		setTimeout(function(i){
			move({
			obj:lis[i],
			attrs:{left:-(0.95*indexMenu.offsetWidth)},
			duration:300,
			callBack:function(){
				document.body.className='type_normal';
				}
			})
		},i*50,i)
		lis[i].onmouseenter=function(){
				this.style.left='-87%';	
		}
		lis[i].onmouseleave=function(){
			this.style.left=-0.95*indexMenu.offsetWidth+'px';
		}
	}
}
lis[2].onclick=function(ev){
	/*ev.preventDefault();*/
	clearDiv();
	photos.style.display='block';
	move({
		obj:indexMenu,
		attrs:{top:-990},
		duration:100,
		callBack:function(){
			document.body.className='type_top';
			indexMenu.style.left=0;
			for(var i=0;i<lis.length;i++){
				span[i].style.marginRight='';
				lis[i].style.left='';
			}	
			
		}
	})
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseenter=function(){
			span[this.index].className='active';
			em[this.index].className='active';
		}
		lis[i].onmouseleave=function(){
			span[this.index].className='';
			em[this.index].className='';
		}
	}
}
lis[3].onclick=function(ev){
	clearDiv();
	document.body.className='type_right';
	
	move({
		obj:essay,
		attrs:{width:0.95*indexMenu.offsetWidth},
		duration:300
		})
	indexMenu.style.top=0;
	for(var i=0;i<lis.length;i++){
		timer=setTimeout(function(i){
			move({
			obj:lis[i],
			attrs:{left:0},
			duration:200
			})
		},i*50,i)
		lis[i].onmouseenter=function(){
			this.style.backgroundColor=color[this.index];
			span[this.index].className='active';
			em[this.index].className='active';
		}
		lis[i].onmouseleave=function(){
			this.style.backgroundColor='';
			span[this.index].className='';
			em[this.index].className='';
		}
	}	
}
lis[4].onclick=function(ev){
	/*ev.preventDefault();*/
	clearDiv();
	move({
		obj:facsimile,
		attrs:{height:320},
		duration:300
		})
	document.body.className='type_bottom';
	move({
			obj:sel,
			attrs:{width:0},
			duration:20
		})
	for(var i=0;i<lis.length;i++){
		span[i].style.left=0.4*indexMenu.offsetWidth/lis.length+'px';
		/*timer=setTimeout(function(i){
			move({
			obj:indexMenu,
			attrs:{top:200},
			duration:300
			})
		},i*50,i)*/
		lis[i].onmouseenter=function(){
			this.style.backgroundColor=color[this.index];
			span[this.index].className='active';
		}
		lis[i].onmouseleave=function(){
			this.style.backgroundColor='';
			span[this.index].className='';
		}
	}	
}
lis[5].onclick=function(ev){
	indexMenu.style.top=0;
	/*ev.preventDefault();*/
	clearDiv();
	
	move({
			obj:sel,
			attrs:{width:0},
			duration:20
		})
	for(var i=0;i<lis.length;i++){
		span[i].style.marginRight='';
		setTimeout(function(i){
			move({
			obj:lis[i],
			attrs:{left:-(0.95*indexMenu.offsetWidth)},
			duration:300,
			callBack:function(){
				document.body.className='type_normal';
				work.style.display='block';
				move({
					obj:work,
					attrs:{top:0},
					duration:400
					})
				}
			})
		},i*50,i)
		lis[i].onmouseenter=function(){
				this.style.left='-87%';	
		}
		lis[i].onmouseleave=function(){
			this.style.left=-0.95*indexMenu.offsetWidth+'px';
		}
	}
}
function clearDiv(){
	var divs=document.getElementsByTagName('div');
	for(var i=0;i<divs.length;i++){
		divs[i].style.cssText='';
	}
	var hea=message.getElementsByClassName('hea')[0];
	hea.style.position='';
}
