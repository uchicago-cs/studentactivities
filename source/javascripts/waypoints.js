/*!
jQuery Waypoints - v1.1.7
Copyright (c) 2011-2012 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/MIT-license.txt
https://github.com/imakewebthings/jquery-waypoints/blob/master/GPL-license.txt
*/
/*
Waypoints is a small jQuery plugin that makes it easy to execute a function
whenever you scroll to an element.

GitHub Repository: https://github.com/imakewebthings/jquery-waypoints
Documentation and Examples: http://imakewebthings.github.com/jquery-waypoints

Changelog:
	v1.1.7
		- Actually fix the post-load bug in Issue #28 from v1.1.3.
	v1.1.6
		- Fix potential memory leak by unbinding events on empty context elements.
	v1.1.5
		- Make plugin compatible with Browserify/RequireJS. (Thanks @cjroebuck)
	v1.1.4
		- Add handler option to give alternate binding method. (Issue #34)
	v1.1.3
		- Fix cases where waypoints are added post-load and should be triggered
		  immediately. (Issue #28)
	v1.1.2
		- Fixed error thrown by waypoints with triggerOnce option that were
		  triggered via resize refresh.
	v1.1.1
		- Fixed bug in initialization where all offsets were being calculated
		  as if set to 0 initially, causing unwarranted triggers during the
		  subsequent refresh.
		- Added onlyOnScroll, an option for individual waypoints that disables
		  triggers due to an offset refresh that crosses the current scroll
		  point. (All credit to @knuton on this one.)
	v1.1
		- Moved the continuous option out of global settings and into the options
		  object for individual waypoints.
		- Added the context option, which allows for using waypoints within any
		  scrollable element, not just the window.
	v1.0.2
		- Moved scroll and resize handler bindings out of load.  Should play nicer
		  with async loaders like Head JS and LABjs.
		- Fixed a 1px off error when using certain % offsets.
		- Added unit tests.
	v1.0.1
		- Added $.waypoints('viewportHeight').
		- Fixed iOS bug (using the new viewportHeight method).
		- Added offset function alias: 'bottom-in-view'.
	v1.0
		- Initial release.
	
Support:
	- jQuery versions 1.4.3+
	- IE6+, FF3+, Chrome 6+, Safari 4+, Opera 11
	- Other versions and browsers may work, these are just the ones I've looked at.
*/
(function(e,t,n,r,i){"$:nomunge";var s=e(r),o="waypoint.reached",u=function(e,n){e.element.trigger(o,n),e.options.triggerOnce&&e.element[t]("destroy")},a=function(e,t){if(!t)return-1;var n=t.waypoints.length-1;while(n>=0&&t.waypoints[n].element[0]!==e[0])n-=1;return n},f=[],l=function(t){e.extend(this,{element:e(t),oldScroll:0,waypoints:[],didScroll:!1,didResize:!1,doScroll:e.proxy(function(){var t=this.element.scrollTop(),r=t>this.oldScroll,i=this,s=e.grep(this.waypoints,function(e,n){return r?e.offset>i.oldScroll&&e.offset<=t:e.offset<=i.oldScroll&&e.offset>t}),o=s.length;(!this.oldScroll||!t)&&e[n]("refresh"),this.oldScroll=t;if(!o)return;r||s.reverse(),e.each(s,function(e,t){(t.options.continuous||e===o-1)&&u(t,[r?"down":"up"])})},this)}),e(t).bind("scroll.waypoints",e.proxy(function(){this.didScroll||(this.didScroll=!0,r.setTimeout(e.proxy(function(){this.doScroll(),this.didScroll=!1},this),e[n].settings.scrollThrottle))},this)).bind("resize.waypoints",e.proxy(function(){this.didResize||(this.didResize=!0,r.setTimeout(e.proxy(function(){e[n]("refresh"),this.didResize=!1},this),e[n].settings.resizeThrottle))},this)),s.load(e.proxy(function(){this.doScroll()},this))},c=function(t){var n=null;return e.each(f,function(e,r){if(r.element[0]===t)return n=r,!1}),n},h={init:function(r,i){return this.each(function(){var s=e.fn[t].defaults.context,u,h=e(this);i&&i.context&&(s=i.context),e.isWindow(s)||(s=h.closest(s)[0]),u=c(s),u||(u=new l(s),f.push(u));var p=a(h,u),d=p<0?e.fn[t].defaults:u.waypoints[p].options,v=e.extend({},d,i);v.offset=v.offset==="bottom-in-view"?function(){var t=e.isWindow(s)?e[n]("viewportHeight"):e(s).height();return t-e(this).outerHeight()}:v.offset,p<0?u.waypoints.push({element:h,offset:null,options:v}):u.waypoints[p].options=v,r&&h.bind(o,r),i&&i.handler&&h.bind(o,i.handler)}),e[n]("refresh"),this},remove:function(){return this.each(function(t,n){var r=e(n);e.each(f,function(e,t){var n=a(r,t);n>=0&&(t.waypoints.splice(n,1),t.waypoints.length||(t.element.unbind("scroll.waypoints resize.waypoints"),f.splice(e,1)))})})},destroy:function(){return this.unbind(o)[t]("remove")}},p={refresh:function(){e.each(f,function(t,r){var i=e.isWindow(r.element[0]),s=i?0:r.element.offset().top,o=i?e[n]("viewportHeight"):r.element.height(),a=i?0:r.element.scrollTop();e.each(r.waypoints,function(e,t){if(!t)return;var n=t.options.offset,i=t.offset;if(typeof t.options.offset=="function")n=t.options.offset.apply(t.element);else if(typeof t.options.offset=="string"){var f=parseFloat(t.options.offset);n=t.options.offset.indexOf("%")?Math.ceil(o*(f/100)):f}t.offset=t.element.offset().top-s+a-n;if(t.options.onlyOnScroll)return;i!==null&&r.oldScroll>i&&r.oldScroll<=t.offset?u(t,["up"]):i!==null&&r.oldScroll<i&&r.oldScroll>=t.offset?u(t,["down"]):!i&&r.element.scrollTop()>t.offset&&u(t,["down"])}),r.waypoints.sort(function(e,t){return e.offset-t.offset})})},viewportHeight:function(){return r.innerHeight?r.innerHeight:s.height()},aggregate:function(){var t=e();return e.each(f,function(n,r){e.each(r.waypoints,function(e,n){t=t.add(n.element)})}),t}};e.fn[t]=function(n){if(h[n])return h[n].apply(this,Array.prototype.slice.call(arguments,1));if(typeof n=="function"||!n)return h.init.apply(this,arguments);if(typeof n=="object")return h.init.apply(this,[null,n]);e.error("Method "+n+" does not exist on jQuery "+t)},e.fn[t].defaults={continuous:!0,offset:0,triggerOnce:!1,context:r},e[n]=function(e){return p[e]?p[e].apply(this):p.aggregate()},e[n].settings={resizeThrottle:200,scrollThrottle:100},s.load(function(){e[n]("refresh")})})(jQuery,"waypoint","waypoints",window);