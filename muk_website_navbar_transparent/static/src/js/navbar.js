/**********************************************************************************
* 
*    Copyright (C) 2017 MuK IT GmbH
*
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU Affero General Public License as
*    published by the Free Software Foundation, either version 3 of the
*    License, or (at your option) any later version.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU Affero General Public License for more details.
*
*    You should have received a copy of the GNU Affero General Public License
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
**********************************************************************************/

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
