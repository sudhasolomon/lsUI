;(function(angular){
	
	"Use Strict"
			angular.module('profileModule',[])
			.controller('userProfileController', function($scope,$http, $rootScope){
				
				$scope.successFlag = false;
				
				$scope.onload = function(){
//					alert("onload "+$rootScope.loginUser.userId);
					var response = $http.post('/LSFinanceService/login/getUserById?userId='+$rootScope.loginUser.userId);
					response.success(function(data, headers, status, config){
//						alert(JSON.stringify(data));
						$scope.user = data;
					});
					response.error(function(data, headers, status, config){
						if(status == constants.FORBIDDEN){
		    				location.href = 'login.html';
		    			  }else{  			  
		    				  location.href = 'login.html';
		    			  }
					});
				}
				
				$scope.updateUser = function(user){
					var response = $http.post('/LSFinanceService/login/saveOrUpdateUser', user);
					response.success(function(data, headers, status, config){
//						alert(JSON.stringify(data));
						if(data){
							$scope.successFlag = true;
						$scope.updated = data.statusMessage;
					}
					});
					response.error(function(data, headers, status, config){
						if(status == constants.FORBIDDEN){
		    				location.href = 'login.html';
		    			  }else{  			  
		    				  location.href = 'login.html';
		    			  }
					});
				}
			
			});
})(angular);