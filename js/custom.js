$(function(){
    
  /* sticky menu start*/
  $(window).on('scroll', function(event) {    
    var scroll = $(window).scrollTop();
    if (scroll < 700) {
        $(".menu_bar").removeClass("sticky");
    } else{
        $(".menu_bar").addClass("sticky");
    }
  });
  /* sticky menu end */
    /*toggle menu begin*/
    $("#wrapper").click( function() {
        $(".icon").toggleClass("close");
    });
    /*toggle menu end*/
    
  /* smooth scroll start */
  var scroll = new SmoothScroll('a[href*="#"]');
  /* smooth scroll end */
    
    
  /* counter start*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  /* counter end*/

    
  /* slider start */
  $('.slider_active').slick({
    arrows: true,
    prevArrow: ".pre_arrow",
    nextArrow: ".next_arrow",
    autoplay: true,
  });
  /* slider end */

    
  /* back to top button begin */
 //hide and show button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back_to_top').fadeIn(200)
    } else{
        $('.back_to_top').fadeOut(200)
    }
  });
  //animate scroll to top
  $('.back_to_top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1500);
  });
  /* back to top button end */
  
    
  /* preloader begin */
  $(window).on('load', function(event) {
    $('.preloader').delay(500).fadeOut(500);
  }); 
  /* preloader end */


});