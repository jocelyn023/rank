$(function(){
	// 监听窗口大小改变
	$(window).resize(function(){		
	   	mobileReady();
	});
	// 监听手机横屏
	window.addEventListener("orientationchange", function() {
		// 宣布新方向的数值
		if(window.orientation==90||window.orientation == -90){
			mobileReady();
		}		
	}, false);
	// 页面初始化
	mobileReady();


	// 移动端ready
	function mobileReady(){
		var viewW = $(window).width(),
			viewH = $(window).height();
		var random = GetRandomNum(0,1);
		$('.bg1').css('display','block');

		var downloadUrl = '';

		if(viewW<641){
			// rem布局
			(function(win,doc){
		        function change(){
		            doc.documentElement.style.fontSize=doc.documentElement.clientWidth/375*20+'px';
		        }
		        change();
		        win.addEventListener('resize',change,false);
		    })(window,document);

		    if(viewW>viewH){
				$('.mobile').height(viewW);
			}else{
				$('.mobile').height(viewH);
			}
			// 移动端页面随机出现
			if(random==0){
				$('.bg1').css('background-image','url(statics/images/orun_index/bg.png)');
				$('.rand1').css('display', 'block');
				$('.rand2').css('display', 'none');

			}else{
				$('.bg1').css('background-image','url(statics/images/orun_index/bg2.png)');
				$('.rand2').css('display', 'block');
				$('.rand1').css('display', 'none');
			}

			var fs = parseInt(document.documentElement.style.fontSize);
			var bFlag = true;
		    var h2 = parseInt($('.toDownload').css('bottom'));
		    $('.qrclick').on('click', function(){
		        var h = $(window).height();
		        var disTop = (fs*20) + 'px';
		        if(bFlag){
		            $('.toDownload').css('bottom', fs*10);
		            $('.mobile').height(h + 120);
		            $(".qrMobile").fadeIn();
		            $('html,body').animate({scrollTop: $(document).height() + 'px'}, 1000);
		            bFlag = false;
		        }else{
		            $(".qrMobile").fadeOut();
		            // $('.toDownload').css('bottom', h2 );
		            $('.toDownload').animate({bottom: h2}, 200);
		            $('.mobile').animate({height: h}, 300);
		            bFlag = true;
		        }
		    })

			// 安卓微信遮罩层
			var u = navigator.userAgent;
		    var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		    var isWx = u.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
		    if(isIos){
		    	// $('.toDownload').attr('href', 'http://www.orunapp.com/dl/ios');
		    	downloadUrl = 'http://www.orunapp.com/dl/ios';
		    }else{
		    	if(isWx){   
			        $('.toDownload').on('touchstart', function(){
			           	$('.opa').css('display',"block");
			        })   
			    }else{
			    	// $('.toDownload').attr('href', 'http://www.sportchina.org.cn/dl/android');
			    	downloadUrl = 'http://www.sportchina.org.cn/dl/android';
			    }
		    }
		    $('.toDownload').on('click', function(){
		    	window.open(downloadUrl,'_blank');
		    });
		}else{
			$('.mobile').height('auto');
			$('.bg1').css('display','none');

			$('.contact').hover(function(){
				$('.contactWay').slideDown();
				$('.jiantou').addClass('active');
				$('.triangle').css('display','block');


			},function(){
				$('.contactWay').slideUp();
				$('.jiantou').removeClass('active');
				$('.triangle').css('display','none');
			})
			$('.toDown').on('click', function(){
				$("html,body").animate({scrollTop:$(window).height()+"px"},500)
			})
		}
	}
	// 随机数
	function GetRandomNum(Min,Max){   
		var Range = Max - Min;   
		var Rand = Math.random();   
		return(Min + Math.round(Rand * Range));   
	} 
})			

			