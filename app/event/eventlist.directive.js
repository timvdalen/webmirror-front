(function (angular) {
	'use strict';

	angular.module('nl.timvdalen.webmirror.event')
		.directive('mirrorEventList', function () {
			return {
				restrict: 'E',
				scope: {
					events: '='
				},
				controller: function () {},
				templateUrl: 'app/event/eventlist.html'
			};
		});
}(this.angular));
