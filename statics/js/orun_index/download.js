/**
 * Created by Administrator on 2017/8/13.
 */
$(function(){
    (function(win,doc){
        function change(){
            doc.documentElement.style.fontSize=doc.documentElement.clientWidth/375*20+'px';
        }
        change();
        win.addEventListener('resize',change,false);
    })(window,document);


    var fs = parseInt(document.documentElement.style.fontSize);

    rdPage();
    // 移动端页面随机出现
    function rdPage(){
        var random = GetRandomNum(0,1);
        if(random==0){
            $('.bg1').css('background-image','url(statics/images/orun_index/bg.png)');
            $('.logo1').css('display', 'block');
            $('.logo2').css('display', 'none');

        }else{
            $('.bg1').css('background-image','url(statics/images/orun_index/bg2.png)');
            $('.logo1').css('display', 'none');
            $('.logo2').css('display', 'block');
        }
    }



    $('.mobile').height($(window).height());
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
            $('.toDownload').animate({bottom: h2}, 200);
            // $('.toDownload').css('bottom', h2 );
            $('.mobile').animate({height: h}, 300);
            bFlag = true;
        }
    })





    // 安卓苹果判断
    var u = navigator.userAgent;
    var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var isWx = u.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
    if(isIos){
        $('.toDownload').attr('href', 'http://www.orunapp.com/dl/ios');

    }else{
        // 微信遮罩层
        if(isWx){
            $('.toDownload').on('touchstart', function(){
                $('.opa').css('display',"block");
            })
        }else{
            $('.toDownload').attr('href', 'http://www.sportchina.org.cn/dl/android');
        }
    }

    // 随机数
    function GetRandomNum(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        return(Min + Math.round(Rand * Range));
    }
})