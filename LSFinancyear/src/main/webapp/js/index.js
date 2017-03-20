;(function(angular){

	"use strict";
	
	angular.module('financyearApp', ['ui.router', 'ui.bootstrap','ngSanitize','customerModule','UserModule'])
	.controller('financyearController', function($scope, $http, $rootScope, $location, $state){
		
		$scope.logout = function(){
			var response = $http.get('/LSFinanceService/login/logoutAction');
			response.success(function(data, headers, status, config){
				 if(data.statusCode == 200){
					 location.href = 'login.html';
				 }
			});
			response.error(function(data, headers, status, config){
				alert("error  "+ data);
			});
		}
		
		
		$scope.$on('$stateChangeStart', function (event, next, current) {
			if(!$rootScope.loginUser){
				 $http({
			            method: 'GET',
			            url: '/LSFinanceService/login/getLoggedInPersonInfo'
			        })  
			        .success(function(data, status){
			        	if(data){
			        	$rootScope.loginUser = data;
			        	}else{
			        		location.href = 'login.html';
			        	}
			        })
			        .error(function(data, status){
			        	location.href = 'login.html';
			        })
			}
		});
		
	})
	.controller('headerController', function($scope, $http){
		
		
	$scope.test = "test";
		
	})
	.controller('footerController', function($scope, $http){
		
	})
	.controller('sidebarController', function($scope, $http){
		
	});
})(angular);
