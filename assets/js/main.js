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
$(document).on('click','.cuslom_dropdown ul > li:first-child', function(){
	$('.cuslom_dropdown').removeClass('active');
    $('.cuslom_dropdown').find('ul').removeClass('active');
    $(this).parents('.cuslom_dropdown').addClass('active');
    $(this).parents('ul').addClass('active'); 
});
$(".cuslom_dropdown li").click(function(){
    $(this).parents('.cuslom_dropdown').find('ul > li:first-child').text($(this).text()); 
    $(this).parents('.cuslom_dropdown').find('ul > li:first-child').attr('class',$(this).attr('class')); 
    $(this).parents('.cuslom_dropdown').removeClass('active');
    $(this).parents('ul').removeClass('active'); 
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


//Radio
$(document).on('click', '.radio', function() {
	$(this).parents('form').find('.radio').removeClass('active');
	$(this).addClass('active');
});



// включаем обработчик в разрешённой зоне
$(".cuslom_dropdown").mouseout(function(){
    $("body").on("click",onClick); //разрешаем клик
});
// выключаем обработчик в запрещённой зоне
$(".cuslom_dropdown").mouseover(function(){
    $("body").off("click",onClick); //запрещаем клик
})
// обработчик
function onClick(){
    $('.cuslom_dropdown').removeClass('active');
    $('.cuslom_dropdown').find('ul').removeClass('active'); 
}

//EVENTS -- {


  	
//} -- EVENTS


