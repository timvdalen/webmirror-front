(function (angular) {
	'use strict';

	angular.module('nl.timvdalen.webmirror.clock')
		.directive('mirrorClock', function () {
			return {
				restrict: 'E',
				scope: {},
				controller: function ($scope, $interval, dateFilter) {
					var update, iv;

					update = function () {
						$scope.time = dateFilter(new Date(), 'hh:mm');
					};

					update();
					iv = $interval(update, 1000);

					$scope.$on('$destroy', function () {
						$interval.cancel(iv);
					});
				},
				templateUrl: 'app/clock/clock.html'
			};
		});
}(this.angular));
