(function(){
	
	angular.module('app')
		.config(configuration);

	function configuration($httpProvider){
		$httpProvider.interceptors.push(function($q) {
		  return {
		   'request': function(config) {
		       // same as above
		    },
		    'requestError': function(rejection){
		       // same as above
		    },

		    'response': function(response) {
		       // same as above
		    },
		    'responseError': function(rejection){
		       // same as above
		    }
		  };
		});
	}

}());