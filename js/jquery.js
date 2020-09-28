/*메인슬라이드*/
var imgs = 2;
var now = 0;

jQuery(document).ready(function () {

	$('.mainslide').fadeIn('background-image','../img/mainimg2.jpg');


});


    start();

    function start() {
        $(".slider1>.slider2").eq(0).mainslide().css({
            "margin-left": "-2000px"
        });
        setInterval(function () {
            slide();
        }, 2000);
    }

    function slide() {
        now = now == imgs ? 0 : now += 1;
        $(".slider1>.slider2").eq(now - 1).css({
            "margin-left": "-2000px"
        });
        $(".slider1>.slider2").eq(now).css({
            "margin-left": "0px"
        });
    }


/*배너슬라이드*/


/*모바일메뉴
		$(document).ready(function(){
			$(".sub").hide();
			$(".menu li").click(function(){
				$("ul",this).slideToggle("fast");
			});
		});
*/

/*
$(document).ready(function(){
			$("#nav ul.sub").hide();
			$("#nav ul.menu li").click(function(){
				$("ul",this).slideToggle("fast");
			});
		});
*/


/*좌석이미지 모달
$(".partner img").click(function() {
            $("#modal").addClass("active");
        });
        $("#modal button").click(function() {
            $("#modal").removeClass("active");
        });
*/