//banner动效
{

	const circles=document.querySelectorAll(".banner_circle1");
	const imgs=document.querySelectorAll(".banner_tp");
	let banner=document.querySelector(".banner_img");
	let next=document.querySelector(".banner_img .banner_rbtn");
	let prev=document.querySelector(".banner_img .banner_btn");
	circles.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<imgs.length;i++){
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

	//让图片跟随点击速度切换，当点击快的时候不会出现闪屏
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	}
	prev.onclick=function(){
		n-=2;   //执行上一张
		move();
	}
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
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
    $(".tips").click(function(){
        let index=$(this).index(".tips");
        let ot=$(".remen").eq(index).offset().top-150;
        $("html,body").animate({scrollTop:ot},200)
    })
    $(window).scroll(function(){
        let st=$(window).scrollTop();
        $(".remen").each(function(index,ele){
            // console.log(this);
            if(st>=$(this).offset().top-150){
                $(".tips").removeClass("t_active").eq(index).addClass("t_active");
            }
        })
    })

	// var containers=document.querySelectorAll(".remen");
	// var tips=document.querySelectorAll(".tips");
	// let flag=true;
	// tips.forEach(function(ele,index){
	// 	ele.onclick=function(){
	// 		flag=false;
	// 		let ot=containers[index].offsetTop+466;
	// 		//console.log(ot);
	// 		document.documentElement.scrollTop=ot;
	// 		let speed=(ot-document.documentElement.scrollTop)/10;
	// 		let now=document.documentElement.scrollTop;
	// 		let time=0;
	// 		let t=setInterval(function(){
	// 			time+=25;
	// 			now+=speed;
	// 			if(time===250){
	// 				clearInterval(t);
	// 				flag=true;
	// 			}
	// 			document.documentElement.scrollTop=now;
	// 		},25)
	// 	}
	// })
	// window.addEventListener("scroll",function(){
	// 	if(flag){
	// 		let st=document.documentElement.scrollTop;
	// 		for(let i=0;i<containers.length;i++){
	// 			if(st>containers[i].offsetTop-50){
	// 				for(let i=0;i<tips.length;i++){
	// 					tips[i].classList.remove("t_active");
	// 				}
	// 				tips[i].classList.add("t_active");
	// 			}
	// 		}
	// 		}
	// })
}
//滑动到一定位置出现导航效果
{
	let topbar=document.querySelector(".fixed_nav_top");
	let leftbar=document.querySelector(".fixed_nav_left");
    let left1=document.querySelector(".b_nav_l");
    let nav=document.querySelector(".banner_cenav12");


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

    left1.onmouseenter=function(){
        nav.style.display="block";
	}
    left1.onmouseleave=function(){
        nav.style.display="none";

    }
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
	$(".icon_back8").each(function(index,ele) {
        $(this).mouseenter(function () {
            $(".icon_tan8").eq(index).animate({left: '-74px'}, "600");
            $(".icon_tan8").eq(index).show();
        })
    })

	$(".icon_back9").each(function (index, ele) {
		$(this).mouseenter(function () {
			$(".icon_tan9").eq(index).animate({left: '-55px'}, "500");
			$(".icon_tan9").eq(index).show();
		})
	})

	$(".icon_back8").each(function(index,ele){
		$(this).mouseleave(function(){
			$(".icon_tan8").eq(index).animate({left: '74px'}, "600");
			$(".icon_tan8").eq(index).hide();
		})
    })

	$(".icon_back9").each(function(index,ele){
		$(this).mouseleave(function(){
			$(".icon_tan9").eq(index).animate({left: '55px'}, "500");
			$(".icon_tan9").eq(index).hide();
		})
	})


        $(".icon_back6").mouseenter(function(){
            $(".icon_tan6").show();
            $(".f_r_tanchu_sanjiao").show();
        })
		$(".icon_back6").mouseleave(function(){
			$(".icon_tan6").hide();
            $(".f_r_tanchu_sanjiao").hide();
        })
}

//视频效果
{
		let prevs=document.querySelector(".t_prev");
		let nexts=document.querySelector(".t_next");
		let inners=document.querySelector(".shipin_inner");
		let content=document.querySelectorAll(".i_b");

    content.onmouseenter=function(){
            dhj_prev.style.display="block";
            dhj_next.style.display="block";

        }
        content.onmouseleave=function(){
            dhj_prev.style.display="none";
            dhj_next.style.display="none";
        }
        let n=1;
        let flag=true;
        nexts.onclick=function(){
            if(flag){
                flag=false;
                inners.style.transition="all 1s";
                n++;
                inners.style.marginLeft=-390*n+"px";
            }
        }
        inners.addEventListener("transitionend",function(){
            flag=true;
            if(n===4){
                inners.style.marginLeft=-390+"px";
                n=1;
                inners.style.transition="none";
            }
        })
        prevs.onclick=function(){
            if(flag){
                flag=false;
                inners.style.transition="all 1s";
                n--;
                inners.style.marginLeft=-390*n+"px";
            }

            inners.style.marginLeft=n*-390+"px";
        }
        inners.addEventListener("transitionend",function(){
            if(n===0){
                inners.style.marginLeft=-1170+"px";
                n=3;
                inners.style.transition="none";
            }
            flag=true;
        })


}
//头部效果
{
	let button=document.querySelector(".c_icon");
	let tck=document.querySelector(".head_tanchu");
	let tck1=document.querySelector(".head_tanchu1");
	let tck2=document.querySelector(".head_tanchu2");
	let head_wzk=document.querySelector(".head_wzk");
	let head_wzk1=document.querySelector(".head_wzk1");
	let head_wzk2=document.querySelector(".head_wzk20");
	let upicon=document.querySelector(".up_icon");
	let upicon1=document.querySelector(".up_icon1");
	let upicon2=document.querySelector(".up_icon2");
	let down_icon=document.querySelector(".down_icon");
	let down_icon1=document.querySelector(".down_icon1");
	let down_icon2=document.querySelector(".down_icon2");
	button.onclick=function(){
		tck.style.display="none";
		return;
	}
		head_wzk.onmouseenter=function(){
		tck.style.display="block";
		upicon.style.opacity=1;
		down_icon.style.opacity=0;
		}
		head_wzk1.onmouseenter=function(){
		tck1.style.display="block";
		upicon1.style.opacity=1;
		down_icon1.style.opacity=0;
		}
		head_wzk2.onmouseenter=function(){
		tck2.style.display="block";
		upicon2.style.opacity=1;
		down_icon2.style.opacity=0;
		}
		head_wzk.onmouseleave=function(){
			tck.style.display="none";
			upicon.style.opacity=0;
			down_icon.style.opacity=1;
		}
		head_wzk1.onmouseleave=function(){
			tck1.style.display="none";
			upicon1.style.opacity=0;
			down_icon1.style.opacity=1;
		}
		head_wzk2.onmouseleave=function(){
			tck2.style.display="none";
			upicon2.style.opacity=0;
			down_icon2.style.opacity=1;
		}


}
//头部弹出3
{
	let tck3=document.querySelector(".head_tanchu3");
	let head_wzk3=document.querySelector(".head_wzk3");
	let upicon3=document.querySelector(".up_icon3");
	let down_icon3=document.querySelector(".down_icon3");

	head_wzk3.onmouseenter=function(){
		tck3.style.display="block";
		upicon3.style.opacity=1;
		down_icon3.style.opacity=0;
		}

	head_wzk3.onmouseleave=function(){
			tck3.style.display="none";
			upicon3.style.opacity=0;
			down_icon3.style.opacity=1;
		}
}
//头部弹出4
{
	let tck4=document.querySelector(".head_tanchu4");
	let head_wzk4=document.querySelector(".head_wzk4");
	let upicon4=document.querySelector(".up_icon4");
	let down_icon4=document.querySelector(".down_icon4");

	head_wzk4.onmouseenter=function(){
		tck4.style.display="block";
		upicon4.style.opacity=1;
		down_icon4.style.opacity=0;
		}

	head_wzk4.onmouseleave=function(){
			tck4.style.display="none";
			upicon4.style.opacity=0;
			down_icon4.style.opacity=1;
		}
}
//头部弹出5
{
	let tck5=document.querySelector(".head_tanchu5");
	let head_wzk5=document.querySelector(".head_wzk5");
	let upicon5=document.querySelector(".up_icon5");
	let down_icon5=document.querySelector(".down_icon5");

	head_wzk5.onmouseenter=function(){
		tck5.style.display="block";
		upicon5.style.opacity=1;
		down_icon5.style.opacity=0;
		}

	head_wzk5.onmouseleave=function(){
			tck5.style.display="none";
			upicon5.style.opacity=0;
			down_icon5.style.opacity=1;
		}
}
//大汇聚效果
{
	$(".dajuhui").mouseenter(function(){
		$(".dhj_prev").show();
        $(".dhj_next").show();

    })
    $(".dajuhui").mouseleave(function(){
        $(".dhj_prev").hide();
        $(".dhj_next").hide();

    })
	let dahuiju_bottom=document.querySelector(".dahuiju_bottom");
	let dajuhui=document.querySelector(".dajuhui");
	let dahuiju_inner=document.querySelector(".dahuiju_inner");
	let dhj_prev=document.querySelector(".dhj_prev");
	let dhj_next=document.querySelector(".dhj_next");

	let n=1;
	let flag=true;
	dhj_next.onclick=function(){
		if(flag){
			flag=false;
			dahuiju_inner.style.transition="all 1s";
            n++;
			dahuiju_inner.style.marginLeft=-1000*n+"px";
		}
	}
	dahuiju_inner.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			dahuiju_inner.style.marginLeft=-1000+"px";
			n=1;
			dahuiju_inner.style.transition="none";
		}
	})
	dhj_prev.onclick=function(){
		if(flag){
			flag=false;
			dahuiju_inner.style.transition="all 1s";
			n--;
			dahuiju_inner.style.marginLeft=-1000*n+"px";
		}
	}
	dahuiju_inner.addEventListener("transitionend",function(){
		if(n===0){
			dahuiju_inner.style.marginLeft=-3000+"px";
			n=3;
			dahuiju_inner.style.transition="none";
		}
		flag=true;
	})
	$(".dajuhui_mid").mouseenter(function(){
		$(".dahuiju_bottom").show();
        $(".dahuiju_bottom1").hide();
    })
    $(".dajuhui_mid2").mouseenter(function(){
        $(".dahuiju_bottom1").show();
        $(".dahuiju_bottom").hide();
    })

}

//排行榜效果
{
		let prevs=document.querySelector(".prev2");
		let nexts=document.querySelector(".next2");
		let inners=document.querySelector(".paihangbang_inner");
		let content=document.querySelectorAll(".p_b");
	content.onmouseenter=function(){
		dhj_prev.style.display="block";
		dhj_next.style.display="block";

	}
	content.onmouseleave=function(){
		dhj_prev.style.display="none";
		dhj_next.style.display="none";
	}
	let n=1;
	let flag=true;
	nexts.onclick=function(){
		if(flag){
			flag=false;
			inners.style.transition="all 1s";
			n++;
			inners.style.marginLeft=-379*n+"px";
		}
	}
	inners.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			inners.style.marginLeft=-379+"px";
			n=1;
			inners.style.transition="none";
		}
	})
	prevs.onclick=function(){
		if(flag){
			flag=false;
			inners.style.transition="all 1s";
			n--;
			inners.style.marginLeft=-379*n+"px";
		}

			inners.style.marginLeft=n*-379+"px";
    }
	inners.addEventListener("transitionend",function(){
		if(n===0){
			inners.style.marginLeft=-1137+"px";
			n=3;
			inners.style.transition="none";
		}
		flag=true;
	})


}
//关注效果
{
	let item=document.querySelectorAll(".b_r_item1");
    let n=0;
    let t=setInterval(move,3000);
    function move(){
        n++;
        if(n===item.length){
            n=0;
        }
        if(n<0){
            n=item.length-1;
        }
    }
    for(let i=0;i<item.length;i++){
        item[i].classList.remove("bactive");
    }
    item[n].classList.add("bactive");

}