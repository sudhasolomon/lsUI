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
		$scope.onload = function(){
			 if(!$rootScope.loginUser){
				 $http({
			            method: 'GET',
			            url: '/LSFinanceService/login/getLoggedInPersonInfo'
			        })  
			        .success(function(data, status){
			        	if(data){
			        	$rootScope.loginUser = data;
			        	if(data.theme == 'blueTheme'){
			        		 $rootScope.main = constants.BlueMain;
			    			 $rootScope.loginform = constants.BlueloginForm;
			    			 $rootScope.bootstrap = constants.BlueBootstrap;
			    			 $rootScope.styles = constants.BlueStyles;
			        	}
			        	else if (data.theme == 'greenTheme') {
			        		 $rootScope.main = constants.GreenMain;
			    			 $rootScope.loginform = constants.GreenloginForm;
			    			 $rootScope.bootstrap = constants.GreenBootstrap;
			    			 $rootScope.styles = constants.GreenStyles;
						}else if (data.theme == 'redTheme') {
							 $rootScope.main = constants.RedMain;
			    			 $rootScope.loginform = constants.RedloginForm;
			    			 $rootScope.bootstrap = constants.RedBootstrap;
			    			 $rootScope.styles = constants.RedStyles;
						}else if (data.theme == 'lgreenTheme') {
							 $rootScope.main = constants.LGreenMain;
			    			 $rootScope.loginform = constants.LGreenloginForm;
			    			 $rootScope.bootstrap = constants.LGreenBootstrap;
			    			 $rootScope.styles = constants.LGreenStyles;
						}else {
							 $rootScope.main = constants.MainMain;
			    			 $rootScope.loginform = constants.MainloginForm;
			    			 $rootScope.bootstrap = constants.MainBootstrap;
			    			 $rootScope.styles = constants.MainStyles;
						}
			        	
			        	}else{
			        		location.href = 'login.html';
			        	}
			        	
			        
			        })
			        .error(function(data, status){
			        	location.href = 'login.html';
			        })
			 }else{
				 if($rootScope.loginUser.theme == 'blueTheme'){
		        		 $rootScope.main = constants.BlueMain;
		    			 $rootScope.loginform = constants.BlueloginForm;
		    			 $rootScope.bootstrap = constants.BlueBootstrap;
		    			 $rootScope.styles = constants.BlueStyles;
		        	}
		        	else if ($rootScope.loginUser.theme == 'greenTheme') {
		        		 $rootScope.main = constants.GreenMain;
		    			 $rootScope.loginform = constants.GreenloginForm;
		    			 $rootScope.bootstrap = constants.GreenBootstrap;
		    			 $rootScope.styles = constants.GreenStyles;
					}else if ($rootScope.loginUser.theme == 'redTheme') {
						 $rootScope.main = constants.RedMain;
		    			 $rootScope.loginform = constants.RedloginForm;
		    			 $rootScope.bootstrap = constants.RedBootstrap;
		    			 $rootScope.styles = constants.RedStyles;
					}else if ($rootScope.loginUser.theme == 'lgreenTheme') {
						 $rootScope.main = constants.LGreenMain;
		    			 $rootScope.loginform = constants.LGreenloginForm;
		    			 $rootScope.bootstrap = constants.LGreenBootstrap;
		    			 $rootScope.styles = constants.LGreenStyles;
					}else {
						 $rootScope.main = constants.MainMain;
		    			 $rootScope.loginform = constants.MainloginForm;
		    			 $rootScope.bootstrap = constants.MainBootstrap;
		    			 $rootScope.styles = constants.MainStyles;
					}
			 }
			/*
			 * save uesr theme in theme table
			 * 
			 * var response = $http.get('/LSFinanceService/theme/getCurrentTheme');
			response.success(function(data, headers, status, config){
				 alert(JSON.stringify(data));
				
					 if(data){
						 $rootScope.currentThemeObj = data;
						 $rootScope.main = data.path;
						 $rootScope.loginform = data.loginFormPath;
						 $rootScope.bootstrap = data.bootstrapPath;
						 $rootScope.styles = data.stylesPath;
					 alert(JSON.stringify($rootScope.styles));
					 }
				
			});
			response.error(function(data, headers, status, config){
				alert("error  "+ data);
			});*/
		}
		
	/*	$scope.saveTheme = function(obj){
			var response = $http.post('/LSFinanceService/theme/saveOrUpdateTheme',obj);
			response.success(function(data, headers, status, config){
				 if(data.statusCode == 200){
					 $scope.onload();
				 }
			});
			response.error(function(data, headers, status, config){
			});
		}*/
		
		
		//$rootScope.maincss = "mainTheme/main";
		
	/*	$scope.saveThemeClick = function(){
			$scope.greenObj= {
					"themeName" : "lgreenTheme",
					"path" : "css/lgreenTheme/main.css",
					"loginFormPath":"css/lgreenTheme/loginform-style.css",
					"bootstrapPath" : "css/lgreenTheme/bootstrap.css",
					"stylesPath" : "css/lgreenTheme/styles.css",
					"themeStatus" : false,
					"deleteFlag" : 0
				};
				alert(JSON.stringify($scope.greenObj));
			$scope.saveTheme($scope.greenObj);
		}*/
		$scope.mainTheme = function(){
			$rootScope.loginUser.theme = "mainTheme";
//			alert(JSON.stringify($rootScope.loginUser));
			$scope.updateTheme($rootScope.loginUser);
		}
		$scope.blueTheme = function(){
			$rootScope.loginUser.theme = "blueTheme";
//			alert(JSON.stringify($rootScope.loginUser));
			$scope.updateTheme($rootScope.loginUser);
		}
		$scope.greenTheme = function(){
			$rootScope.loginUser.theme = "greenTheme";
//			alert(JSON.stringify($rootScope.loginUser));
			$scope.updateTheme($rootScope.loginUser);
		}
		$scope.lgreenTheme = function(){
			$rootScope.loginUser.theme = "lgreenTheme";
//			alert(JSON.stringify($rootScope.loginUser));
			$scope.updateTheme($rootScope.loginUser);
		}
		$scope.redTheme = function(){
			$rootScope.loginUser.theme = "redTheme";
//			alert(JSON.stringify($rootScope.loginUser));
			$scope.updateTheme($rootScope.loginUser);
		}
		
		$scope.updateTheme = function(obj){
		        var response = $http.post('/LSFinanceService/login/saveOrUpdateUser',obj);
				response.success(function(data, headers, status, config){
					 if(data.statusCode == 200){
						 $scope.onload();
					 }else{
			        		location.href = 'login.html';
			        	}
				});
				response.error(function(data, headers, status, config){
					location.href = 'login.html';
				});
		}
		
		$scope.$on('$stateChangeStart', function (event, next, current) {
			/* $http({
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
		        })*/
		 
			
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
