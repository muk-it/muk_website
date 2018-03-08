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
 
	if($("#social_data").length >= 1) {
		var cbuttons = {};
		
		var facebook = $("#social_data").data("facebook");
		var twitter = $("#social_data").data("twitter");
		var linkedin = $("#social_data").data("linkedin");
		var youtube = $("#social_data").data("youtube");
		var googleplus = $("#social_data").data("googleplus");
		var github = $("#social_data").data("github");

		var phone = $("#social_data").data("phone");
		var email = $("#social_data").data("email");
		
		if(facebook) {
			cbuttons.facebook = { 
				class: 'facebook',
				use: true,
				icon: 'facebook',
				title: 'Follow on Facebook',
				link: facebook,
				extras: 'target="_blank"'
			}
		}
		if(twitter) {
			cbuttons.twitter = {
				class: 'twitter',
				use: true,
				icon: 'twitter',
				title: 'Follow on Twitter',
				link: twitter,
				extras: 'target="_blank"' 
			}
			
		}
		if(linkedin) {
			cbuttons.linkedin = {
				class: 'linkedin',
				use: true,
				icon: 'linkedin',
				title: 'Follow on linkedin',
				link: linkedin,
				extras: 'target="_blank"' 
			}
			
		}
		if(youtube) {
			cbuttons.youtube = {
				class: 'youtube',
				use: true,
				icon: 'youtube',
				title: 'Follow on Youtube',
				link: youtube,
				extras: 'target="_blank"' 
			}
		}
		if(googleplus) {
			cbuttons.google = {
				class: 'gplus',
				use: true,
				icon: 'google-plus',
				title: 'Follow on Google Plus',
				link: googleplus,
				extras: 'target="_blank"' 
			}
		}
		if(github) {
			cbuttons.github = {
				class: 'github',
				use: true,
				icon: 'github',
				title: 'Visit on Github',
				link: github,
				extras: 'target="_blank"' 
			}
		}
		
		if(phone) {
			cbuttons.phone = { 
					class: 'phone separated',
					use: true,
					icon: 'phone', 
					title: 'Call us',
					type: 'phone',
					link: phone 
			}
		}
		if(email) {
			cbuttons.email = { 
				class: 'email',
				use: true,
				icon: 'envelope',
				title: 'Contact us',
				type: 'email',
				link: email
			}
		}
		
		
		$.contactButtons({
			buttons: cbuttons,
	  	});

	}

});
