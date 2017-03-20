;(function(angular){
	
	"use strict";
	
	angular.module("accountsModule",[])
	.controller("accountsController", function($scope, $http){
		$scope.test ="test accoutns";
		
		$scope.account = {};
		
		
		$scope.account.month = "";
		$scope.account.year = "";
		$scope.account.financeStatus = "";
		
		
		$scope.onload = function(){
			var response = $http.get("/LSFinanceService/customer/getAccounts?month="+$scope.account.month+"&year="+$scope.account.year+"&type="+$scope.account.financeStatus);
			response.success(function(data, status, headers, config){
				if(data){
				$scope.financyearTotalSpent = data.financyearTotalSpent;
				$scope.financyearTotalCollected = data.financyearTotalCollected;
				$scope.remainingFinanceToCollect = data.remainingFinanceToCollect;
				}else{
					$scope.financyearTotalSpent = 0.00;
					$scope.financyearTotalCollected = 0.00;
					$scope.remainingFinanceToCollect = 0.00;
				}
			});
			response.error(function(data, status, headers, config){
				if(status == constants.FORBIDDEN){
    				location.href = 'login.html';
    			  }else{  			  
    				  location.href = 'login.html';
    			  }
			});
		}
		
		$scope.getAccounts = function(account){
//			alert(" month "+JSON.stringify(account));
			$scope.account.month = account.month;
			$scope.account.year = account.year;
			$scope.account.financeStatus = account.financeStatus;
			$scope.onload();
		}
	});
})(angular)