;(function(angular){
	
	angular.module("customerAccountsModule",[])
	.controller("customerAccountsViewController" , function($scope, $http, $stateParams){
		
		$scope.onload = function(){
			
			var response = $http.get("/LSFinanceService/customer/getCustomerAccountById?customerId="+$stateParams.customerId);
			response.success(function(data, headers, config, status){
//				alert("success "+JSON.stringify(data));
				$scope.customerObj = data;
				$scope.name = data[0].name;
				$scope.customerId = data[0].customerId;
				$scope.startDate = data[0].startDate;
				$scope.totalAmount = data[0].totalAmount;
			});
			response.error(function(data, headers, config, status){
				if(status == constants.FORBIDDEN){
    				location.href = 'login.html';
    			  }else{  			  
    				  location.href = 'login.html';
    			  }
			});
		}
		
		
	});
})(angular);