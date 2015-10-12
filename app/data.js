(function (angular, location) {
	'use strict';

	angular.module('nl.timvdalen.webmirror')
		.service('Data', function ($websocket, SERVER) {
			var socket,
				ret = {
					events: [],
					weather: {
						icon: 'wi-na',
						text: 'Loading...',
						temperature: -1
					}
				};

			socket = $websocket('ws://' + SERVER.host + ':' + SERVER.port);

			socket.onMessage(function (message) {
				var data = JSON.parse(message.data);
				switch (data.type) {
				case 'update':
					// Load in the new event data
					ret.events = data.data;
					break;
				case 'weather':
					// Load in the new weather data
					ret.weather = data.data;
					break;
				case 'refresh':
					// Force a browser refresh
					location.reload();
					break;
				}
			});

			return ret;
		});
}(this.angular, this.location));
