$(window).on('load', function () {

	//Preloader
	var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');

	//textarea
	$('textarea').autosize();

});

$(document).ready(function(){
	$('a.anchor').bind("click", function(e){

		var offsetTop = 57;
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

		$('html, body').stop().animate({
	        'scrollTop': $target.offset().top - offsetTop
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });

	    return false;
	});
});

//Disable scroll
document.ontouchmove = function(e){
	if ($('body').hasClass('popup_open')){
		e.preventDefault();
        e.stopPropagation();
        return false;
    }
};

//Dropdown
$(document).on('click','.cuslom_dropdown', function(){
    $(this).toggleClass('active');
    $(this).find('ul').toggleClass('active'); 
});
$(".cuslom_dropdown li a").click(function(){
    $(this).parents('.cuslom_dropdown').find('ul > li:first-child > a').text($(this).text()); 
    $(this).parents('.cuslom_dropdown').find('ul > li:first-child > a').attr('class',$(this).attr('class')); 
});

//Placeholder
var oldPlaceholder = "";

$(document).on("focusin", "input,textarea", function(){
    oldPlaceholder = $(this).attr('placeholder');
    $(this).attr('placeholder',""); 
});

$(document).on("focusout", "input,textarea", function(){
    $(this).attr('placeholder',oldPlaceholder); 
});



//EVENTS -- {


  	
//} -- EVENTS


