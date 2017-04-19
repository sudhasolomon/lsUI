;(function(angular){
	
	
	"use strict";
	 
			angular.module('customerModule',['addCustomerModule', 'viewCustomerModule', 'dailyViewModule', 'customerAccountsModule', 'dashboardModule'
			                                 , 'dateRangeModule', 'accountsModule','postponedmodule'])
			
			
			.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
				
				
				
                $urlRouterProvider.otherwise("/dashboard");
                
                $stateProvider
                
                .state('dashboard', {
                    url: "/dashboard",
                    templateUrl: "views/modules/dashboard.html",            
                    controller: "dashboardController",
                }) 
                
                .state('addCustomerModule', {
                    url: "/add/:customerId",
                    templateUrl: "views/modules/addcustomer.html",            
                    
                    controller: "addCustomerController",
                }) 
                
                .state('editCustomerModule', {
                    url: "/edit/:customerId",
                    templateUrl: "views/modules/editcustomer.html",            
                    
                    controller: "addCustomerController",
                }) 
                
                .state('viewCustomerModule', {
                    url: "/view",
                    templateUrl: "views/modules/viewcustomer.html",            
                    
                    controller: "viewCustomerController",
                }) 
               
                .state('dailyViewModule', {
                    url: "/dailyView",
                    templateUrl: "views/modules/dailyview.html",            
                    
                    controller: "dailyViewController",
                }) 
                
                .state('customerAccountsModule', {
                    url: "/accountsView/:customerId",
                    templateUrl: "views/modules/customeraccountsview.html",            
                    
                    controller: "customerAccountsViewController",
                }) 
                .state('accountsModule', {
                    url: "/accounts",
                    templateUrl: "views/modules/accounts.html",            
                    
                    controller: "accountsController",
                }) 
                .state('postponedmodule', {
                    url: "/postponed",
                    templateUrl: "views/modules/postponedcustomers.html",            
                    
                    controller: "postponedcontroller",
                }) 
			}]);
})(angular);