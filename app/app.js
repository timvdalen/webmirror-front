(function (angular) {
	'use strict';

	angular.module('nl.timvdalen.webmirror', [
		'nl.timvdalen.webmirror.event',
		'nl.timvdalen.webmirror.clock',
		'nl.timvdalen.webmirror.weather',
		'angular-websocket'
	]);
}(this.angular));
