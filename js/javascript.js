
$('.hamburger').click(function () {

  // $('.mobile-nav').animate({width:'toggle'});
  $('.mobile-nav').show(0);


});


$('.mobileView').click(function () {

    $('.mobile-nav').hide(0);

});


$(document).ready(function () {

  $('.home-nav').click(function() {
    $('html,body').animate({

      scrollTop: $('.home').offset().top -100},500);


  });

  // navigate to about us

  $('.about-nav').click(function() {
    $('html,body').animate({

      scrollTop: $('.about').offset().top -100},500);


  });


  $('.details-nav').click(function() {
    $('html,body').animate({

      scrollTop: $('.details').offset().top -100},500);



  });



  $('.roadmap-nav').click(function() {
    $('html,body').animate({

      scrollTop: $('.roadmap').offset().top -100},500);



  });



  $('.token-nav').click(function() {
    $('html,body').animate({

      scrollTop: $('.token').offset().top -100},500);


  });


  $('.team-nav').click(function() {
    $('html,body').animate({

      scrollTop: $('.team').offset().top -100},500);


  });


});




$('.whitepaperButton').click(function() {

window.open("mydAppr.php");

});


$(".mydapprIo").click(function() {

  window.open('https://mydappr.io','_blank');

});



$(".twitter").click(function() {

  window.open('https://twitter.com/mydappr','_blank');

});


$(".git").click(function() {

  window.open('https://Github.com/mydappr','_blank');

});





$(".medium").click(function() {

  window.open('https://medium.com/@mydappr','_blank');

});


  // $windowWidth=$(window).width;



$('.agbona').click(function() {

  // alert("lol")
  $('.slideInfo').slideToggle();
  $('.slideInfoAust').hide(0);
  $('.slideInfoFaisal').hide(0);
  $('.slideInfoGodwin').hide(0);
  $('.slideInfoJamie').hide(0);
  $('.slideInfoMarshal').hide(0);
  $('.slideInfoSam').hide(0);
  $('.slideInfoSegun').hide(0);


});

$('.agbonaLink').click(function() {

window.open(' https://www.linkedin.com/in/agbona/','_blank');

});




$('.aust').click(function() {

  // alert("lol")
  $('.slideInfoAust').slideToggle();
  $('.slideInfo').hide(0);
  $('.slideInfoFaisal').hide(0);
  $('.slideInfoGodwin').hide(0);
  $('.slideInfoJamie').hide(0);
  $('.slideInfoMarshal').hide(0);
  $('.slideInfoSam').hide(0);
  $('.slideInfoSegun').hide(0);


});

$('.austLink').click(function() {

window.open('https://twitter.com/@aust_jacobite','_blank');

});



$('.faisal').click(function() {


  $('.slideInfoFaisal').slideToggle();

  $('.slideInfo').hide(0);
  $('.slideInfoAust').hide(0);
  $('.slideInfoGodwin').hide(0);
  $('.slideInfoJamie').hide(0);
  $('.slideInfoMarshal').hide(0);
  $('.slideInfoSam').hide(0);
  $('.slideInfoSegun').hide(0);


});


$('.faisalLink').click(function() {

window.open('https://www.linkedin.com/in/faisal-sopyan-aa0a9b189/','_blank');

});


$('.godwin').click(function() {

  // alert("lol")
  $('.slideInfoGodwin').slideToggle();
  $('.slideInfo').hide(0);
  $('.slideInfoAust').hide(0);
  $('.slideInfoFaisal').hide(0);
  $('.slideInfoJamie').hide(0);
  $('.slideInfoMarshal').hide(0);
  $('.slideInfoSam').hide(0);
  $('.slideInfoSegun').hide(0);


});


$('.godwinLink').click(function() {

window.open('https://www.linkedin.com/in/godwin-boadi-2b2128114','_blank');

});


$('.godwingitLink').click(function() {

window.open('https://www.linkedin.com/in/godwin-boadi-2b2128114','_blank');

});


$('.jamieLink').click(function() {

window.open('https://www.github.com/AQUACY','_blank');

});



$('.jamie').click(function() {

  // alert("lol")
  $('.slideInfoJamie').slideToggle();
  $('.slideInfo').hide(0);
  $('.slideInfoAust').hide(0);
  $('.slideInfoFaisal').hide(0);
  $('.slideInfoGodwin').hide(0);
  $('.slideInfoMarshal').hide(0);
  $('.slideInfoSam').hide(0);
  $('.slideInfoSegun').hide(0);

});





$('.marshal').click(function() {

  // alert("lol")
  $('.slideInfoMarshal').slideToggle();
  $('.slideInfo').hide(0);
  $('.slideInfoAust').hide(0);
  $('.slideInfoFaisal').hide(0);
  $('.slideInfoGodwin').hide(0);
  $('.slideInfoJamie').hide(0);
  $('.slideInfoSam').hide(0);
  $('.slideInfoSegun').hide(0);


});


$('.marshalLink').click(function() {

window.open('https://www.linkedin.com/in/destiny-flamzy-marshall-a15726b0/','_blank');

});


$('.sam').click(function() {

  // alert("lol")
  $('.slideInfoSam').slideToggle();
  $('.slideInfo').hide(0);
  $('.slideInfoAust').hide(0);
  $('.slideInfoFaisal').hide(0);
  $('.slideInfoGodwin').hide(0);
  $('.slideInfoJamie').hide(0);
  $('.slideInfoMarshal').hide(0);
  $('.slideInfoSegun').hide(0);



});


$('.samTweetLink').click(function() {

window.open('https://twitter.com/@_kwusu','_blank');

});


$('.samLink').click(function() {

window.open('https://www.linkedin.com/in/samuel-kwadwo-owusu-95aa9066','_blank');

});


$('.segun').click(function() {

  // alert("lol")
  $('.slideInfoSegun').slideToggle();
  $('.slideInfo').hide(0);
  $('.slideInfoAust').hide(0);
  $('.slideInfoFaisal').hide(0);
  $('.slideInfoGodwin').hide(0);
  $('.slideInfoJamie').hide(0);
  $('.slideInfoMarshal').hide(0);
  $('.slideInfoSam').hide(0);



});


$('.segunLink').click(function() {

window.open('https://linkedin.com/in/segun-joshua','_blank');

});


$('.segungitLink').click(function() {

window.open('https://github.com/segunjosh','_blank');

});


$('#log-nav').click(function(){
  $(this).css("background-color","#FFAC35")

});

$('li').click(function(){
  $('li').css("color","")
  $(this).css("color","#FFAC35");

});

$(document).click(function(){

  $('.slideInfo').hide(0);
});

$(document).click(function(){

  $('.slideInfoAust').hide(0);
});

$(document).click(function(){

  $('.play-video').hide(0);
  $('.play').show(0);

});

$(document).click(function(){

  $('.slideInfoFaisal').hide(0);
});

$(document).click(function(){

  $('.slideInfoGodwin').hide(0);
});

$(document).click(function(){

  $('.slideInfoJamie').hide(0);
});

$(document).click(function(){

  $('.slideInfoMarshal').hide(0);
});

$(document).click(function(){

  $('.slideInfoSam').hide(0);
});

$(document).click(function(){

  $('.slideInfoSegun').hide(0);
});






$('.agbona').click(function (e) {

  e.stopPropagation();
  return false;


});


$('.play').click(function (e) {

  e.stopPropagation();
  return false;


});

$('.godwin').click(function (e) {

  e.stopPropagation();
  return false;


});


$('.segun').click(function (e) {

  e.stopPropagation();
  return false;


});


$('.aust').click(function (e) {

  e.stopPropagation();
  return false;


});

$('.sam').click(function (e) {

  e.stopPropagation();
  return false;


});

$('.marshal').click(function (e) {

  e.stopPropagation();
  return false;


});


$('.faisal').click(function (e) {

  e.stopPropagation();
  return false;


});


$('.jamie').click(function (e) {

  e.stopPropagation();
  return false;


});


$(document).click(function(){

  $('.mobile-nav').hide(0);
});


$('.hamburger').click(function (e) {

  e.stopPropagation();
  return false;


});

$('.play').click(function(){
   $('.play-video').slideToggle();
   $('#main').hide(0);
   $('#blue').hide(0);
   $('#orange').hide(0);


 });

 $('.play').mouseenter(function() {

   $('#main').attr("src","icons/play.png");

 });


 $('.play').mouseleave(function() {

   $('#main').attr("src","icons/blue.png");

 });


 $('.play').click(function() {

   $('#main').attr("src","icons/orange.png");

 });
