(function(){
	
	angular.module('app')
		.controller('ApiCtrl', ApiCtrl);

	function ApiCtrl($scope, $http, $filter){

		$scope.url = 'jsonplaceholder.typicode.com/posts';

		$scope.get = function(){
			$http.get(urlify($scope.url))
				.then(function(res){
					$scope.response = filterResponse(res.data);
				});
		};

		$scope.put = function(){
			
			var payload = {
    			id: 1,
    			title: 'foo',
    			body: 'bar',
    			userId: 1
  			};

			$http.put(urlify($scope.url))
				.then(function(res){
					$scope.response = filterResponse(res.data);
				});
		};

		$scope.post = function(){

			var payload = {
    			title: 'foo',
    			body: 'bar',
    			userId: 1
  			};

			$http.post(urlify($scope.url))
				.then(function(res){
					$scope.response = filterResponse(res.data);
				});
		};

		$scope.delete = function(){
			$http.delete(urlify($scope.url))
				.then(function(res){
					$scope.response = filterResponse(res.data);
				});
		};

		function urlify(url){
			return 'http://' + url;
		}

		function filterResponse(response){
			return $filter('json')(response, 2);
		}
		
	}

}());