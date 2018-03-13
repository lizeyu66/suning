{
	//banner动效
	const circles=document.querySelectorAll(".banner_circle1");
	const imgs=document.querySelectorAll(".banner_tp");
	let banner=document.querySelector(".banner_img");
	let next=document.querySelector(".banner_img .banner_rbtn");
	let prev=document.querySelector(".banner_img .banner_btn");
	circles.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(var i=0;i<imgs.length;i++){
					circles[i].classList.remove("active");
					imgs[i].classList.remove("active1");
				}
				this.classList.add("active");
				imgs[index].classList.add("active1");
				n=index;
			}
	})

	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			circles[i].classList.remove("active");
			imgs[i].classList.remove("active1");
		}
		circles[n].classList.add("active");
		imgs[n].classList.add("active1");

	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	next.onclick=function(){
		move();
	}
	prev.onclick=function(){
		n-=2;   //执行上一张
		move();
	}
}
	//大汇聚动效
{	var btns=document.querySelectorAll(".dajuhui_mid");
	var cons=document.querySelectorAll(".dahuiju_bottom_l");
	for(let i=0;i<btns.length;i++){
		btns[i].onmouseenter=function(){
			for(let j=0;j<btns.length;j++){
				cons[j].style.zIndex="";
			}
			cons[i].style.zIndex=10;
		}
	}

	// //排行榜动效
	// var bottoms=document.querySelectorAll(".paihangbang .haohuo_bottom");
	// let next=document.querySelector(".paihangbang .banner_rbtn");
	// let prev=document.querySelector(".paihangbang .banner_btn");
}
//右侧导航栏点击回到顶部效果
{
	var totop=document.querySelector(".toTop");
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=300;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)	
	}

}
//左导航回到顶部
{
	var totop=document.querySelector(".toTop2");
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=300;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)	
	}

}
//左导航效果
{
	var containers=document.querySelectorAll(".remen");
	var tips=document.querySelectorAll(".tips");
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=containers[index].offsetTop+466;
			//console.log(ot);
			document.documentElement.scrollTop=ot;
			let speed=(ot-document.documentElement.scrollTop)/10;
			let now=document.documentElement.scrollTop;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===250){
					clearInterval(t);
				}
				document.documentElement.scrollTop=now;
			},25)
		}
	})
	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		for(let i=0;i<containers.length;i++){
			if(st>containers[i].offsetTop-50){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("t_active");
				}
				tips[i].classList.add("t_active");
			}
		}
	})
}
//滑动到一定位置出现导航效果
{
	let topbar=document.querySelector(".fixed_nav_top");
	let leftbar=document.querySelector(".fixed_nav_left");
	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		if(st>700){
			topbar.style.display="block";
		}else{
			topbar.style.display="none";
		}
		if(st>2600){
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}
	})

}
//左导航弹出详细内容效果
{
	let label=document.querySelectorAll(".banner_cenav1");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	label.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			menus[index]=obj;
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}

	})
}
//右导航弹出
{
	let label=document.querySelectorAll(".icon_back");
	let menus=document.querySelectorAll(".icon_tan");
	let obj=menus[0];
	label.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			menus[index]=obj;
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}

	})

}

//排行榜效果
{
		let prevs=document.querySelector(".prev2");
		let nexts=document.querySelector(".next2");
		let inners=document.querySelector(".paihangbang_inner");
		let content=document.querySelectorAll(".p_b");
		let pagers=document.querySelectorAll(".yuan1");
		let n=0;    //代表当前往左边移动几屏
		nexts.onclick=function(ele,index){
			n++;
			if(n===content.length){
				n=content.length-1;
				return;
			}
			inners.style.marginLeft=n*-379+"px";
			pagers[n].classList.add("activee");
			pagers[n-1].classList.remove("activee");
			obj=pagers[n];
		}
		prevs.onclick=function(ele,index){
			n--;
			if(n<0){
				n=0;
				return;
			}
			
			inners.style.marginLeft=n*-379+"px";
			pagers[n].classList.add("activee");
			pagers[n+1].classList.remove("activee");
			obj=pagers[n];

			let obj=pagers[0];
			pagers.forEach(function(ele,index){
				ele.onclick=function(){
					obj.classList.remove("activee");
					ele.classList.add("activee");
					obj=this;
					inners.style.marginLeft=-379*n+"px";
					n=index;
				}
			})

		}

		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("activee");
				this.classList.add("activee");
				obj=this;
				inners.style.marginLeft=index*-379+"px";
				n=index;
			}
		})

}
//视频效果
{
		let prevs=document.querySelector(".t_prev");
		let nexts=document.querySelector(".t_next");
		let inners=document.querySelector(".shipin_inner");
		let content=document.querySelectorAll(".img_b");
		let n=0;
		nexts.onclick=function(ele,index){
			n++;
			if(n===content.length){
				n=content.length;
				return;
			}
			inners.style.marginLeft=n*-390+"px";
			n=index;
		}
		prevs.onclick=function(ele,index){
			n--;
			if(n<0){
				n=0;
				return;
			}
			
			inners.style.marginLeft=n*-390+"px";
			n=index;

		}

}

// {
// 	let wenzi=document.querySelectorAll(".b_r_midx1");
// 	let n=0;
// 	let t=setInterval(move,3000);
// 	function move(){
// 		n++;
// 		if(n===wenzi.length){
// 			n=0;
// 		}
// 		if(n<0){
// 			n=wenzi.length-1;
// 		}
// 	}
// }