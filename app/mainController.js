(function (angular) {
	'use strict';

	angular.module('nl.timvdalen.webmirror')
		.controller('mainController', function ($scope) {
			$scope.events = [{
				icon: 'fa-check',
				text: 'Test'
			}, {
				icon: 'fa-check',
				text: 'Test 2'
			}];
		});
}(this.angular));
