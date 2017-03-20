;(function(angular){
	
	"use strict";
	angular.module('viewCustomerModule',[])
	.controller('viewCustomerController', function($scope, $http, $state){
//		$scope.customerObj = [];
		$scope.finance = {};
		
		
		$scope.finance.month = "";
		$scope.finance.year = "";
		$scope.finance.financeStatus = "";
		
		
		$scope.onload = function(){
			var response = $http.get("/LSFinanceService/customer/getCustomerDetails?month="+$scope.finance.month+"&year="+$scope.finance.year+"&type="+$scope.finance.financeStatus);
			response.success(function(data, status, headers, config){
//				alert(JSON.stringify(data));
				$scope.customerObj = data;
				/*if(data && data.length>0){
				$scope.financyearTotalSpent = data[0].financyearTotalSpent;
				$scope.financyearTotalCollected = data[0].financyearTotalCollected;
				$scope.remainingFinanceToCollect = data[0].remainingFinanceToCollect;
				}else{
					$scope.financyearTotalSpent = 0.00;
					$scope.financyearTotalCollected = 0.00;
					$scope.remainingFinanceToCollect = 0.00;
				}*/
			});
			response.error(function(data, status, headers, config){
				if(status == constants.FORBIDDEN){
    				location.href = 'login.html';
    			  }else{  			  
    				  location.href = 'login.html';
    			  }
			});
		}
		
		$scope.getCustomerAccounts = function(customerId){
//			alert("Customer Id "+customerId);
			$state.transitionTo("customerAccountsModule",{customerId : customerId});
		}
		
		$scope.searchCustomer = function(finance){
//			alert(" month "+JSON.stringify(finance));
			$scope.finance.month = finance.month;
			$scope.finance.year = finance.year;
			$scope.finance.financeStatus = finance.financeStatus;
			$scope.onload();
		}
		
		$scope.editCustomer = function(customerId){
//			alert("customer Id "+customerId);
			$state.transitionTo("editCustomerModule",{customerId : customerId});
		}
	})
})(angular);