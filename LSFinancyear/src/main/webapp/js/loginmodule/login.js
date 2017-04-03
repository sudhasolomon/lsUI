;(function(angular){
	
	 "use strict";
	 
	 angular.module('loginApp', ['ui.bootstrap','jcs-autoValidate'])
	 .controller('loginController', function($scope, $http){

		 $scope.login=true;
		 $scope.regist=false;
		 $scope.successFlag = false;
		 $scope.rejectFlag = false;
		 $scope.userNotFound = false;
		 
		 $scope.onload = function(){
			 
			 $scope.myInterval = 3000;
			  $scope.slides = [
			    {
			      image:  '../LSFinancyear/img/proverbs.jpg' 
			    },
			    {
			      image: '../LSFinancyear/img/hebrew.jpg'
			    },
			    {
			      image: '../LSFinancyear/img/warren1.jpg'
			    },
			    {
			      image: '../LSFinancyear/img/warren2.jpg'
			    },
			    {
				  image: '../LSFinancyear/img/franklin.jpg'
			    }
			  ];
		 }
		 
		 
		 
		 $scope.getLogin = function(log){
			if(log.userId && log.pass){
			var	obj={
						"userName" : log.userId,
						"password" : log.pass
				}
				 var response = $http.post("/LSFinanceService/login/loginAction", obj);
				 response.success(function(data,status,config,headers){
					if(data.statusCode == 200){
						location.href ="index.html";
					}else{
						$scope.userNotFound = true;
						$scope.userNotFoundMessage = data.statusMessage;
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
		 }
		 
		 $scope.register = function(){
			 $scope.login=false;
			 $scope.regist=true;
		 }
		 
		 $scope.registerUser = function(user){
			 
			 var response = $http.post("/LSFinanceService/login/saveOrUpdateUser", user);
			 response.success(function(data,status,config,headers){
//				alert("success "+JSON.stringify(data)); 
				if(data.statusCode == 200){
					$scope.successFlag = true;
//					alert("success");
					$scope.successMessage = data.statusMessage;
				}else{
					$scope.rejectFlag = true;
					$scope.rejectMessage = data.statusMessage;
				}
//				$scope.success = true;
			 });
			 response.error(function(data,status,config,headers){
				 if(status == constants.FORBIDDEN){
	    				location.href = 'login.html';
	    			  }else{  			  
	    				  location.href = 'login.html';
	    			  }
			});
		 }
		 
		 $scope.logInPage = function(){
			 $scope.login=true;
			 $scope.regist=false;
			 $scope.successFlag = false;
			 $scope.rejectFlag = false;
		 }
	 });
	
})(angular);