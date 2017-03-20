;(function(angular){
	
	"use Strict";
	
	angular.module("changePasswordModule", [])
	.controller("changePasswordController", function($scope, $http, $rootScope){
		
		
		$scope.errorMsg = false;
		$scope.successMsg = false;
		$scope.onload = function(){
			
		}
		 
		$scope.changePass = function(pass){
//			alert(JSON.stringify(pass));
			if(pass.newPassword == pass.confirmPassword){
//				alert("matched");
				if($rootScope.loginUser.password == pass.password){
//					alert("old matched");
					
					var response = $http.post("/LSFinanceService/login/changePassword", pass);
					 response.success(function(data,status,config,headers){
						if(data.statusCode == 200){
							$scope.successMsg = true;
							$scope.successmsg = "Password Changed Successfully";
							location.href = 'login.html';
						}else{
							$scope.errorMsg = true;
							$scope.errMsg = data.statusMessage;
						}
					 });
					 response.error(function(data,status,config,headers){
						 if(status == constants.FORBIDDEN){
			    				location.href = 'login.html';
			    			  }else{  			  
			    				  location.href = 'login.html';
			    			  }
					});
				}
				else{
					$scope.errorMsg = true;
					$scope.errMsg = "Old password you have entered is not correct";
				}
				
			}else{
				$scope.errorMsg = true;
				$scope.errMsg = "Confirm pass dosn't match with New Pass";
			} 
		}
		 
	});
	
})(angular);