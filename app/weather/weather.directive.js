(function (angular) {
	'use strict';

	angular.module('nl.timvdalen.webmirror.weather')
		.directive('mirrorWeather', function () {
			return {
				restrict: 'E',
				scope: {
					weatherInfo: '=info'
				},
				templateUrl: 'app/weather/weather.html'
			};
		});
}(this.angular));
