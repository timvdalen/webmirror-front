(function (angular) {
	'use strict';

	angular.module('nl.timvdalen.webmirror')
		.controller('mainController', function ($scope, Data) {
			$scope.data = Data;
		});
}(this.angular));
