(function (angular) {
	'use strict';

	angular.module('nl.timvdalen.webmirror.event')
		.directive('mirrorEvent', function () {
			return {
				restrict: 'E',
				require: '^mirrorEventList',
				scope: {
					eventInfo: '=info'
				},
				templateUrl: 'app/event/event.html'
			};
		});
}(this.angular));
