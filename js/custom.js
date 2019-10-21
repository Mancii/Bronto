
	/* load */

	$(window).load('body', function(){
		setTimeout(function(){
	        $('.site-preloader-wrap').addClass('loaded');
	    }, 1000);
		
	});
	
	/* on Upperbar */
    
	$(".contact-us-bar a").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
	});


	/* Search Screen Script */

	btnOpenSearch = $(".search-btn"),
    searchScreenItem = $(".search-screen"),
	closeSearchScreen = $(".close-search");
		
    btnOpenSearch.on("click", function (e) {
        e.preventDefault();
        searchScreenItem.addClass("open");
    });
    closeSearchScreen.on("click", function (e) {
        e.preventDefault();
        searchScreenItem.removeClass("open");
	});
	
	/* Side Menu script */

	btnOpenSideMenu = $(".side-menu-btn"),
    sideMenuItem = $(".side-menu"),
    closeSidebarOverLay = $(".close-menu-sidebar"),
     btnCloseSideMenu = $(".close-side-menu"),
    body = $("body")

    btnOpenSideMenu.on("click", function (e) {
        e.preventDefault();
        sideMenuItem.addClass("open");
        closeSidebarOverLay.addClass("open");
        body.css('overflow', 'hidden');
    });
    
    closeSidebarOverLay.on("click", function (e) {
        e.preventDefault();
        sideMenuItem.removeClass("open");
        closeSidebarOverLay.removeClass("open");
        body.css('overflow', 'auto');
    });
    
    btnCloseSideMenu.on("click", function (e) {
        e.preventDefault();
        sideMenuItem.removeClass("open");
        closeSidebarOverLay.removeClass("open");
        body.css('overflow', 'auto');
	});

	// navbar menu
	
	btnMenuNavbar = $('.navbar-toggle'),
    navMenu = $(".nav-menu"),
    listMenu = $("ul.nav-menu li a"),
    navbar = $('.nav-bar-two'),
    
	btnMenuNavbar.on("click", function (e) {
        e.preventDefault();
        navMenu.slideToggle();
        $(this).toggleClass("navbar-toggle-active");
        bb =  $('.home').css('margin-top')
        if(bb == '0px'){
            $('.home').animate({marginTop:'300px'},500)
        }
        else{
            $('.home').animate({marginTop:'0'})
        }
        $('.nav-item.has-dropdown').on('click',function(){
            bb =  $('.home').css('margin-top')
            if(bb == '300px'){
                $('.home').animate({marginTop:'500px'},0)
            }
            else{
                $('.home').animate({marginTop:'300px'},0)
            }
        })
    });

    // Scroll To Top

    $(window).scroll(function(){
        if(this.pageYOffset >= 423){
            $('.scroll-up').fadeIn(400)
        }else{
            $('.scroll-up').fadeOut(400)
        }
    })

    $('.scroll-up').click(function(){
        $('html,body').animate({scrollTop:'0'},1000)
    })

    
    listMenu.on("click", function (e) {
        var submenu = this.parentNode.getElementsByTagName("ul").item(0);
        if (submenu !== null) {
            e.preventDefault();
            $(submenu).slideToggle();
        }
    });

    // if ($('.case-item')[0]) {

    //     $('.case-item').magnificPopup({
    //         delegate: '.zoom-case a',
    //         type: 'image',
    //         gallery: {
    //             enabled: true
    //         }
    //     });
    // }

    $('.slickk').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        // dots: true,
        infinite: true,
        // variableWidth: true,
        autoplay: true,
        autoplaySpeed: 222000,
      });





    var	testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
      touchStartPos,
      touchEndPos,
      touchPosDiff,
      ignoreTouch = 30;
;

window.onload = function() {

  // Testim Script
  function playSlide(slide) {
      for (var k = 0; k < testimDots.length; k++) {
          testimContent[k].classList.remove("active");
          testimContent[k].classList.remove("inactive");
          testimDots[k].classList.remove("active");
      }

      if (slide < 0) {
          slide = currentSlide = testimContent.length-1;
      }

      if (slide > testimContent.length - 1) {
          slide = currentSlide = 0;
      }

      if (currentActive != currentSlide) {
          testimContent[currentActive].classList.add("inactive");            
      }
      testimContent[slide].classList.add("active");
      testimDots[slide].classList.add("active");

      currentActive = currentSlide;
  
      clearTimeout(testimTimer);
      testimTimer = setTimeout(function() {
          playSlide(currentSlide += 1);
      }, testimSpeed)
  }

  testimLeftArrow.addEventListener("click", function() {
      playSlide(currentSlide -= 1);
  })

  testimRightArrow.addEventListener("click", function() {
      playSlide(currentSlide += 1);
  })    

  for (var l = 0; l < testimDots.length; l++) {
      testimDots[l].addEventListener("click", function() {
          playSlide(currentSlide = testimDots.indexOf(this));
      })
  }

  playSlide(currentSlide);

  // keyboard shortcuts
  document.addEventListener("keyup", function(e) {
      switch (e.keyCode) {
          case 37:
              testimLeftArrow.click();
              break;
              
          case 39:
              testimRightArrow.click();
              break;

          case 39:
              testimRightArrow.click();
              break;

          default:
              break;
      }
  })
      
      testim.addEventListener("touchstart", function(e) {
              touchStartPos = e.changedTouches[0].clientX;
      })
  
      testim.addEventListener("touchend", function(e) {
              touchEndPos = e.changedTouches[0].clientX;
          
              touchPosDiff = touchStartPos - touchEndPos;
          
              console.log(touchPosDiff);
              console.log(touchStartPos);	
              console.log(touchEndPos);	

          
              if (touchPosDiff > 0 + ignoreTouch) {
                      testimLeftArrow.click();
              } else if (touchPosDiff < 0 - ignoreTouch) {
                      testimRightArrow.click();
              } else {
                  return;
              }
          
      })
}

// Choose Color

    var colorValue = $('.colors-list ul li')
    colorValue.eq(0).css("background-color","#2f81cb");
    colorValue.eq(1).css({backgroundColor:"#68b235"});
    colorValue.eq(2).css({backgroundColor:'#fab82c'});
    colorValue.eq(3).css({backgroundColor:'#ff5a01'});
    colorValue.eq(4).css({backgroundColor:'#8601b0'});
    colorValue.eq(5).css({backgroundColor:"#ab8b40"});
    colorValue.eq(6).css({backgroundColor:"#14c599"});
    colorValue.eq(7).css({backgroundColor:"#fe3737"});

    $('.color-trigger').on('click', function () {
        $(this).parent().toggleClass('visible-palate');
    });
	
	$('.color-palate .colors-list .palate').on('click', function() {
        var colorValue = $(this).css("background-color");

        $('.changeColor').css({color:colorValue});
        $('.changeBackground').css({backgroundColor:colorValue});
	   $('.color-palate .colors-list .palate').removeClass('active');
        $(this).addClass('active');
	});

