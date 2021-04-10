$(function(){
    var banner=$(".banner");
    var aLi=$(".banner_con li");
    var iLen=aLi.size();
    var aBtn=$(".index_banner_xpic span");
    var banner_1_pic1=$(".banner_con .banner_1_pic1");
    var banner_1_txt1=$(".banner_con .banner_1_txt1");
    var banner_1_txt2=$(".banner_con .banner_1_txt2");
    var banner_1_txt3=$(".banner_con .banner_1_txt3");
    var banner_2_txt3=$(".banner_con .banner_2_txt3");
    var banner_2_txt1=$(".banner_con .banner_2_txt1");
    var banner_2_txt2=$(".banner_con .banner_2_txt2");
    var banner_4_pic1=$(".banner_con .banner_4_pic1");
    var banner_4_txt1=$(".banner_con .banner_4_txt1");
    var banner_5_pic1=$(".banner_con .banner_5_pic1");
    var banner_5_txt1=$(".banner_con .banner_5_txt1");
    var banner_btn=$(".banner_btn");
	var oTimer = null;
    var num=0;
    show();
	function show(){
		oTimer=setInterval(function(){
			num++;
			num=num%iLen;
			animateShow();
		},3000);
	}
	banner.hover(function(){
		clearInterval(oTimer);
		banner_btn.stop().animate({
			bottom:0
		},400);
	},function(){
		show();
		banner_btn.stop().animate({
			bottom:-65
		},400);
	})
	function animateShow(){
			if(num==0){
				banner_2_txt1.animate({opacity:0,top:80});
				banner_2_txt2.animate({opacity:0,top:183});
				banner_2_txt3.animate({opacity:0});
				banner_4_pic1.animate({opacity:0,top:20});
				banner_4_txt1.animate({opacity:0,top:125});
				banner_5_pic1.animate({opacity:0,top:40});
				banner_5_txt1.animate({opacity:0,top:110});
			}
			if(num==1){
				banner_1_pic1.animate({opacity:0,top:20});
				banner_1_txt1.animate({opacity:0,top:30});
				banner_1_txt2.animate({opacity:0,top:190});
				banner_1_txt3.animate({opacity:0});
				banner_4_pic1.animate({opacity:0,top:20});
				banner_4_txt1.animate({opacity:0,top:125});
				banner_5_pic1.animate({opacity:0,top:40});
				banner_5_txt1.animate({opacity:0,top:110});
			}
			if(num==2){
				banner_1_pic1.animate({opacity:0,top:20});
				banner_1_txt1.animate({opacity:0,top:30});
				banner_1_txt2.animate({opacity:0,top:190});
				banner_1_txt3.animate({opacity:0});
				banner_2_txt1.animate({opacity:0,top:80});
				banner_2_txt2.animate({opacity:0,top:183});
				banner_2_txt3.animate({opacity:0});
				banner_4_pic1.animate({opacity:0,top:20});
				banner_4_txt1.animate({opacity:0,top:125});
				banner_5_pic1.animate({opacity:0,top:40});
				banner_5_txt1.animate({opacity:0,top:110});
			}
			if(num==3){
				banner_1_pic1.animate({opacity:0,top:20});
				banner_1_txt1.animate({opacity:0,top:30});
				banner_1_txt2.animate({opacity:0,top:190});
				banner_1_txt3.animate({opacity:0});
				banner_2_txt1.animate({opacity:0,top:80});
				banner_2_txt2.animate({opacity:0,top:183});
				banner_2_txt3.animate({opacity:0});
				banner_5_pic1.animate({opacity:0,top:40});
				banner_5_txt1.animate({opacity:0,top:110});
			}
			aLi.eq(num).siblings().animate({
				opacity:0
			},800);
			aLi.eq(num).animate({
				opacity:1
			},800,function(){

				if(num==0){
					banner_1_pic1.animate({opacity:1,top:0});
					banner_1_txt1.animate({opacity:1,top:52});
					banner_1_txt2.animate({opacity:1,top:170});
					banner_1_txt3.animate({opacity:1});
				}
				if(num==1){
					banner_2_txt1.animate({opacity:1,top:105},500);
					banner_2_txt2.animate({opacity:1,top:173},function(){
						banner_2_txt3.animate({opacity:1},800);
					});
				}
				if(num==2){
					banner_4_pic1.animate({opacity:1,top:0});
					banner_4_txt1.animate({opacity:1,top:146});
				}
				if(num==3){
					banner_5_pic1.animate({opacity:1,top:23});
					banner_5_txt1.animate({opacity:1,top:126});
				}
			});
			aBtn.removeClass("qf_xpic_mask");
			aBtn.parent().removeClass("active1");
			aBtn.eq(num).addClass("qf_xpic_mask").end().eq(num).parent().addClass("active1");
	}
	aBtn.each(function(index){
		$(this).mouseover(function(){
			aLi.stop();
			num=index;
			animateShow();
		});
	});
});