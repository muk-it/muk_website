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
 
	if($('#scrollUpSettings').length) {
		var settings = $('#scrollUpSettings');
		$.scrollUp({
	        scrollDistance: settings.data('scroll_distance') || 300,
	        scrollFrom: settings.data('scroll_from') || 'top',
	        scrollSpeed: settings.data('scroll_speed') || 300,
	        easingType: settings.data('easing_type') || 'linear',
	        animation: settings.data('animation') || 'fade',
	        animationSpeed: settings.data('animation_speed') || 200,
	        scrollTrigger: settings.data('scroll_trigger') || false,
	        scrollTarget: settings.data('scroll_target') || false,
	        scrollText: settings.data('scroll_text') || "<i class='fa fa-chevron-circle-up' aria-hidden='true'/>",
	        scrollTitle: settings.data('scroll_title') || false,
	        scrollImg: settings.data('scroll_img') || false,
	        activeOverlay: settings.data('active_overlay') || false,
	        zIndex: settings.data('z_index') || 2147483647,
	    });
	}
	
});
