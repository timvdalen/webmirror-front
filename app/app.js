(function (angular) {
	'use strict';

	angular.module('nl.timvdalen.webmirror', [
		'nl.timvdalen.webmirror.event',
		'nl.timvdalen.webmirror.clock',
		'angular-websocket'
	]);
}(this.angular));
