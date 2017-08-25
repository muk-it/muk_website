$(document).ready(function () {
 
    // check if logged in
	if($("#oe_main_menu_navbar").length >= 1) {
		$("header").addClass("muk_not_editable");
	}
	
	$(window).scroll(function() {
	    if ($(".muk_navbar_transparent").offset().top > 50) {
	        $(".muk_navbar_transparent").addClass("affix");
	        $(".muk_navbar_transparent").addClass("top-nav-collapse");
	    } else {
	        $(".muk_navbar_transparent").removeClass("affix");
	        $(".muk_navbar_transparent").removeClass("top-nav-collapse");
	    }
	});

});
