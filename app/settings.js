(function (angular, location) {
	'use strict';

	angular.module('nl.timvdalen.webmirror')
		.constant('SERVER', {
			host: location.host.split(":")[0],
			port: 4000
		});
}(this.angular, this.location));
