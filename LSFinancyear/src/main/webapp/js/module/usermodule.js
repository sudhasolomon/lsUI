;(function(angular){
	
	
	"use strict";
	 
			angular.module('UserModule',['changePasswordModule', 'profileModule', 'dateRangeModule'])
			
			
			.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
				
				
				
                $urlRouterProvider.otherwise("/dashboard");
                
                $stateProvider
                
                .state('profileModule', {
                    url: "/profile",
                    templateUrl: "views/modules/userProfile.html",            
                    
                    controller: "userProfileController",
                }) 
                .state('changePasswordModule', {
                    url: "/changepassword",
                    templateUrl: "views/modules/changepassword.html",            
                    
                    controller: "changePasswordController",
                }) 
			}]);
})(angular);