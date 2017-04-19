;(function(angular){
	
	"use strict";
		
			angular.module("dailyViewModule", [])
			.controller("dailyViewController", function($scope, $http, dateRangeService){
			
				$scope.customerObjData = false;
				$scope.payedDateOptions = {
						date : new Date(),
						showWeeks : false
					};
					$scope.dateFormat = 'MM/dd/yyyy';
					$scope.payedDateopen = function() {
						$scope.payedDatePopup.opened = true;
					};
					$scope.payedDatePopup = {
						opened : false
					};
					
					$scope.postDateOptions = {
							date : new Date(),
							showWeeks : false
						};
						$scope.dateFormat = 'MM/dd/yyyy';
						$scope.postDateopen = function() {
							$scope.postDatePopup.opened = true;
						};
						$scope.postDatePopup = {
							opened : false
						};
						
				$scope.onload = function(){
					$scope.type = "Daily";
					$scope.getMyDailyView();
				}
				 
				$scope.getMyDailyView = function(){
					$scope.type;
					var reponse = $http.post ("/LSFinanceService/financyear/getFinancyearView?viewType="+$scope.type);
					reponse.success(function(data,status,headers, config){
//						alert(JSON.stringify(data));
						if(data){
						$scope.customerObjData = true;
						$scope.customerObj = data ;
						}
					});
					reponse.error(function(data,status,headers, config){
						if(status == constants.FORBIDDEN){
		    				location.href = 'login.html';
		    			  }else{  			  
		    				  location.href = 'login.html';
		    			  }
					});
				}
				
				$scope.save = function(customerAccount, customerId){
//					alert("customerAccount  "+JSON.stringify(customerAccount) +"   customerId" +customerId);
					
					var paidDate = dateRangeService.formatDate_india(customerAccount.paidOn);
					var postponedDate = dateRangeService.formatDate_india(customerAccount.postponedTo);
					customerAccount.paidOn = paidDate;
					customerAccount.postponedTo = postponedDate;
					var response = $http.post ("/LSFinanceService/financyear/saveCustomerAccount?customerId="+customerId, customerAccount);
					response.success(function(data, status, headers, config){
						$scope.getMyDailyView();
					});
					response.error(function(data, status, headers, config){
						if(status == constants.FORBIDDEN){
		    				location.href = 'login.html';
		    			  }else{  			  
		    				  location.href = 'login.html';
		    			  }
					});
				}
				
				$scope.getCustomerAccountDetails = function(customer){
//					alert("in customer click");
//					alert(JSON.stringify(customer));
				}
			})
			
})(angular);