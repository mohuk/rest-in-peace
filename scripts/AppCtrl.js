(function(){


	angular.module('app', ['ui.router', 'toastr'])
		.config(configuration);

	function configuration($stateProvider){
		$stateProvider
			.state('home', {
				url: '/home',
				controller: 'ApiCtrl',
				templateUrl: 'views/api.html'
			});
	}

}());