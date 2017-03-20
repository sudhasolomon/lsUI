;(function(angular){
	
	"use Strict";
	
	angular.module("dashboardModule", [])
	.controller("dashboardController", function($scope, $http, $rootScope){
		
		$scope.test = "dashboard test";
		$scope.edit = true;
		$scope.save = false;
		$scope.info = {};
		$scope.onload = function(){
			
			
			var response = $http.get('/LSFinanceService/addtionalInfo/getAdditionalInfo');
			response.success(function(data, config, status, headers){
			
			if(data){
				alert("success "+JSON.stringify(data));
				$scope.info  = data[0] ;
			}
			});
			response.error(function(data, config, status, headers){
//				alert("error "+JSON.strinigfy(data));
			});
		}
		
		$scope.saveInfo = function(info){
			alert(JSON.stringify(info));
			
			var response = $http.post('/LSFinanceService/addtionalInfo/saveAdditionalInfo', info);
			response.success(function(data, config, status, headers){
		//	alert("success "+JSON.stringify(data));
				$scope.onload();
			});
			response.error(function(data, config, status, headers){
//				alert("error "+JSON.strinigfy(data));
			});
		}
		
		
		$scope.DeleteInfo = function(info){
			
			var response = $http.post('/LSFinanceService/addtionalInfo/deleteAdditionalInfo', info);
			response.success(function(data, config, status, headers){
		//	alert("success "+JSON.stringify(data));
				$scope.onload();
			});
			response.error(function(data, config, status, headers){
//				alert("error "+JSON.strinigfy(data));
			});
			
		}
		
		 
	});
	
})(angular);