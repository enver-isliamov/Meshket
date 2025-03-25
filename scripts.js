$(document).ready( function() 
{
	$("#callback-form").submit(function(e)
	{ e.preventDefault();
		let form = $(this);
        form.append('<input type="hidden" name="form-id" value="1" />');
        form.append('<input type="hidden" name="ref" value="'+document.referrer+'" />');
        form.append('<input type="hidden" name="url" value="'+window.location.href+'" />');

        $.ajax
        ({
            type : "POST",
            url : "/assets/include/b24.php",
            data : form.serialize(),
            success : function(result)
            {
                $.ajax
                ({
                    type : "POST",
                    url : "/system/mail.php",
                    data : form.serialize(),
                    success : function(result)
                    {
                        $(".popup.popup-action1").removeClass("active");
                        $(".popup.popup-action2").addClass("active");
                        
                        form.find("input").removeAttr("disabled");
                        form.find("[type='text'], [type='tel']").val('');
                        
        
                    }
                });
            }
        });
	});		
	
	$("#consult-form").submit(function(e)
	{
		let form = $(this);
        form.append('<input type="hidden" name="form-id" value="2" />');
        form.append('<input type="hidden" name="ref" value="'+document.referrer+'" />');
        form.append('<input type="hidden" name="url" value="'+window.location.href+'" />');
        
        $.ajax
        ({
            type : "POST",
            url : "/assets/include/b24.php",
            data : form.serialize(),
            success : function()
            {
                $.ajax
                ({
                    type : "POST",
                    url : "/system/mail.php",
                    data : form.serialize(),
                    success : function(result)
                    {
                        $(".overlay").addClass("active");
                        $(".popup.popup-action2").addClass("active");
                        
                        form.find("input").removeAttr("disabled");
                        form.find("[type='text'], [type='tel']").val('');
            
                    }
                });
            }
        });
	});
	
	$(".contacts-wrapper .contacts-callback").submit(function(e)
	{
		e.preventDefault();
		let form = $(this);
        form.append('<input type="hidden" name="form-id" value="3" />');
        form.append('<input type="hidden" name="ref" value="'+document.referrer+'" />');
        form.append('<input type="hidden" name="url" value="'+window.location.href+'" />');
        
        $.ajax
        ({
            type : "POST",
            url : "/assets/include/b24.php",
            data : form.serialize(),
            success : function()
            {
                $.ajax
                ({
                    type : "POST",
                    url : "/system/mail.php",
                    data : form.serialize(),
                    success : function(result)
                    {
                        $(".popup.popup-action1").removeClass("active");
                        $(".popup.popup-action2").addClass("active");
                        
                        $(".overlay").addClass("active");
                        
                        form.find("input").removeAttr("disabled");
                        form.find("[type='text'], [type='tel']").val('');
                    }
                });
            }
        });
	});
	
	
	/*----------------------WOW----------------------*/

	/*-------------------- MENU --------------------*/
	$('.nav-btn').on('click', function(){
		$('.nav-menu').toggleClass('active');
		$('body').toggleClass('fix');
		$(this).toggleClass('active');
		return false;
	});
	$('.trubka').on('click', function(){
		$('.header-phones').toggleClass('_viewfull');
		return false;
	});
	$('.overlay-menu').click(function(){
		$('.nav-btn').removeClass('active');
		$('.nav-menu').removeClass('active');
		$('body').removeClass('fix');
	});
	$(window).on('load', function(){
		var wW = $(this).width();
		if(wW > 767){
			wow = new WOW({offset:20});
			wow.init();
		}
		if(wW < 1200){
			$('.dropdown > span').on('click', function(){
				$('.dropdown').removeClass('active');
				$(this).parents('.dropdown').addClass('active');
				$('.nav-btn').toggleClass('not');
				$('.back-step').toggleClass('active');
				$(this).children('ul').toggleClass('active');
			});
			$('.back-step').on('click', function(){
				$('.dropdown ul, .dropdown').removeClass('active');
				$('.nav-btn').toggleClass('not');
				$(this).removeClass('active');
			});
		}
	});
	/*-----------------SEO TEXT-----------------*/
	$('.open-seo, .close-seo').on('click', function(){
		$(this).toggleClass('active').siblings('span').toggleClass('active');
		$('.hide').toggleClass('active');
	});
	/*-------------------- MASK --------------------*/
	$('input[type="tel"]').mask("+7 (999) 999-99-99");
	/*-------------------- MODAL WINDOW	--------------------*/
	$('.popup-open').on('click', function(){
		$('.nav-btn').removeClass('active');
		$('.overlay').addClass('active');
		$('body').removeClass('fix').addClass('modal');
		$('.popup').removeClass('active');
		rel=$(this).attr('rel');
		$('.popup-'+rel).addClass('active');
		return false;
	});
	$('.popup-close, .overlay').on('click', function(){
		$('.overlay').removeClass('active');
		$('body').removeClass('modal');
		$('.popup').removeClass('active');
	});
	/*--------------------------SLIDER--------------------------*/
	$('.single-prod-slider, .history-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 1500
	});
	$('.partners-slider').slick({
		slidesToScroll: 2,
		slidesToShow: 6,
		infinite: true,
		speed: 600,
		responsive: [
		{
			breakpoint: 1524,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});




$(window).on('scroll load', function(){
	var scrollWindow = $(window).scrollTop();
		if(scrollWindow > 0){
			$('.header').addClass('fix');
		} else {
			$('.header').removeClass('fix');
		}
	});
/*---------------------SCROLL SECTION---------------------*/
$('.prod-head-wrap').on('click', function(){
	var wW = $(window).width();
	if(wW > 1199){
		$('html, body').animate({
		scrollTop: $('.products-section').offset().top - 90
	}, 500);
	}
});
/*--------------------SCROLLING HISTORY--------------------*/
if ($('#slide1').length) {
	TimeLineInit();	
}

function TimeLineInit() {
		var controller = new ScrollMagic.Controller();
		var SlideCount = $('.slide').length;
		var SliderXOffset = 100 - (100 / SlideCount);
		var SlideWidth = document.getElementById("slide1").clientWidth;
		var OffsetLeft = (SlideWidth - $('.container').width()) / 2;
		var MaxWidth = (SlideWidth / 2) + (SlideWidth * (SlideCount - 1))
		var ProgWrap = $('.progress-timeline');
		var ProgWrapWidth = (MaxWidth - OffsetLeft) / 5;
		var TimeLineAnim = ProgWrapWidth * 4;
		var wW = $(window).width();
		var wH = $(window).height();
		if(wW < 991) {
		ProgWrapWidth = (MaxWidth - OffsetLeft) / 2;
			TimeLineAnim = ProgWrapWidth;
			var startPos = '-' + (($(window).height() - $('#timeline-container').height()) / 2);
		}
		var wipeAnimation = new TimelineMax().to("#slider-container", 1, {
			x: '-' + SliderXOffset + '%'
		}, 0).to(".prog-line-fill", 1, {
			width: ProgWrapWidth + 'px'
		}, 0).to(".progress-timeline", 1, {
			x: TimeLineAnim + 'px'
		}, 0)
		var startPos = '-' + (($(window).height() - $('#timeline-container').height()) / 2);
		if(wW < 768) {
			var startPos = startPos * 1.5;
		}
		if(wW < 768 && wH < 565) {
			var startPos = startPos * 1.7;
		}
		if(wW < 480) {
			var startPos = startPos * 1.2;
		}
		
		var scene = new ScrollMagic.Scene({
			triggerElement: "#timeline-container",
			//правки
			offset: startPos,
			triggerHook: 0,
			duration: SlideCount * 40 + "%"
		}).on("start", function(e){if(e.scrollDirection === "FORWARD"){$('.progress-timeline').addClass('anim');}}).setPin("#timeline-container").setTween(wipeAnimation).addTo(controller);
		$('#slider-container').css("width", SlideCount * 100 + "%");
		$('.slide').css("width", 100 / SlideCount + "%");
		ProgWrap.css({
			"left": OffsetLeft,
			"width": ProgWrapWidth
		});
		var YPosition = parseFloat(Math.trunc(ProgWrapWidth / (SlideCount - 1)));
		var YWrap = $('.years');
		var position;
		YWrap.each(function(index) {
			position = index * YPosition;
			$(this).css("left", position).attr("data-position", position);
		});
	}

	if ($('.wrapp-history-slider').length) {
		var otS = $('.wrapp-history-slider').offset().top;
		$(window).scroll(function() {
			var dsH = $('.wrapp-history-slider').offset().top - otS;
			if($('.wrapp-history-slider').offset().top > otS){
				$('.decor-sect').css({
					'height' :dsH
				});
			}
			var LineWidth = parseFloat(document.getElementById("prog-line-fill").offsetWidth);
			$('.years').each(function() {
				var LnPosition, selecto;
				LnPosition = $(this).data('position');
				selecto = '#' + $(this).data('text');
				if (LineWidth >= LnPosition) {
					$(this).addClass('fillpin');
					$(selecto).prev().removeClass('printed');
					$(selecto).addClass('printed');
				} else {
					$(this).removeClass('fillpin');
					$(selecto).removeClass('printed');
				}
			});
		});
	}
});



