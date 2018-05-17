$(function(){		
	// 监听窗口大小改变
	$(window).resize(function(){
		var w = $(window).width();
		var isMobile = !navigator.userAgent.match(/AppleWebKit.*Mobile.*/); //是否为移动终端

		if(w<1000){
			if(isMobile){
				var url = window.location.href;
				if(url.match("download")){
					window.location.href='orun3_mDownload.html';
				} else if(url.match("aboutUs")){
					window.location.href='orun3_maboutUs.html';
				} else{
					window.location.href='orun3_mIndex.html';
				}
			}			
		}
	});
	// 监听手机横屏
	window.addEventListener("orientationchange", function() {
		// 宣布新方向的数值
		if(window.orientation==90||window.orientation == -90){
		}		
	}, false);
	// 页面初始化
	
	//头部导航条
			$('#mNavbarBtn').on('click', function(){
				$('#mNavbarCon').slideDown();
			})
					
			$('.closeBtn').on('click', function(){
				$('#mNavbarCon').slideUp();
			})
})

//	function loadHead(json){
//		$('#mHead').load('orun3_mHead.html', function(){
//			var theme = json.theme;
//			$('#mNavbarBtn').on('click', function(){
//				$('#mNavbarCon').slideDown();
//			})
//					
//			$('.closeBtn').on('click', function(){
//				$('#mNavbarCon').slideUp();
//			})
//			
//			if(theme){
//				$('.navbar-toggle .icon-bar, .mLogo, .mLogoNav').addClass(theme);
//			}
//			
//			$('.mnavbar-nav li a').removeClass('active');
//			$('.mnavbar-nav li').eq(json.index).find('a').addClass('active');
//			$('.mLogoNav').html(json.content);
//		});
//	}
