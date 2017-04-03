;(function(angular){
	
	"use strict";
	angular.module('addCustomerModule',[])
	.controller('addCustomerController', function($scope, $http, $stateParams, $state, dateRangeService){
		
		$scope.customer = {};
		// Datepicker Start
		$scope.startDateOptions = {
			date : new Date(),
			showWeeks : false
		};
		$scope.dateFormat = 'M/d/yyyy';
		$scope.Dateopen = function() {
			$scope.DatePopup.opened = true;
		};
		$scope.DatePopup = {
			opened : false
		};
		$scope.err = false;
		$scope.success = false;
		
		$scope.daysToPay = "Select Finance Type";
		
		$scope.onload = function(){
			$scope.customerPageType = "Add Customer";
			
			if($stateParams.customerId > 0 ){
				$scope.customerPageType = "Edit Customer";
				 
				var response = $http.get('/LSFinanceService/customer/getCustomerForEdit?customerId='+$stateParams.customerId);
			response.success(function(data, headers, status, config){
				$scope.customer = data;
			});
			response.error(function(data, headers, status, config){
				if(status == constants.FORBIDDEN){
    				location.href = 'login.html';
    			  }else{  			  
    				  location.href = 'login.html';
    			  }
			});
			}
		}
		
		
		
		$scope.getAmountToPay = function(){
			if($scope.customer.interest && $scope.customer.totalAmount){
				$scope.customer.amountToCustomer = "";
				var amount = $scope.customer.totalAmount;
				var interest = $scope.customer.interest;
				
				var remainig = (amount*interest)/100;
				$scope.customer.amountToCustomer = amount-remainig;
			}
		}
		
		$scope.getFinanceDays = function(){
			if($scope.customer.financeType == "Daily"){
				$scope.daysToPay = "Days To Pay";
				$scope.customer.noOfDays = "";
			}
			if($scope.customer.financeType == "Weekly"){
				$scope.daysToPay = "Weeks To Pay";
				$scope.customer.noOfDays = "";
			}
			if($scope.customer.financeType == "Monthly"){
				$scope.daysToPay = "Months To Pay";
				$scope.customer.noOfDays = "";
			}
			if($scope.customer.financeType == ""){
				$scope.daysToPay = "Select Finance Type";
				$scope.customer.noOfDays = "";
			}
		} 
		
		$scope.getDailyAmount = function(){
			if($scope.customer.totalAmount && $scope.customer.noOfDays && $scope.customer.financeType){
				
				var totalAmount = $scope.customer.totalAmount;
				var noOfDays = $scope.customer.noOfDays;
				$scope.customer.amountPerType = totalAmount/noOfDays;
			}
			
		}
		
		$scope.createCustomer = function(customer){
			var newStartDate = dateRangeService.formatDate_india(customer.startDate);
//			alert("create customer "+ newStartDate);
			customer.startDate = newStartDate;
			alert("create customer "+ JSON.stringify(customer));
			if($stateParams.customerId > 0 ){
				if(customer.financeStatus == "Closed"){
					if(customer.totalAmount == customer.paid){
						saveOrUpdateCustomer(customer);
					}else{
						$scope.err = true;
						$scope.errMsg = "Paid amount not Matched With Total to close"
					}
				}else{
					saveOrUpdateCustomer(customer);
				}
			}else{
				saveOrUpdateCustomer(customer);
			}
			
			
		}
		
		function saveOrUpdateCustomer(customer){
			var response = $http.post('/LSFinanceService/customer/createOrUpdateCustomer', customer);
			response.success(function(data, headers, status, config){
				if($stateParams.customerId > 0 ){
					$scope.success = true;
					$scope.succMsg = "Customer Updated Successfully"
				}else{
					$state.transitionTo("viewCustomerModule");
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
		
		
		$scope.newFinance = function(){
			var customerId = 0;
			$state.transitionTo("addCustomerModule",{customerId : customerId});
		}
		
		function formatteddate(inputData){
			if(inputData instanceof Date){
	     	  var expDate = new Date(inputData);
	     	 var month = '' + (expDate.getMonth() + 1);
	          var day = '' + expDate.getDate();
	         var  year = expDate.getFullYear();
	     	  if (month.length < 2) month = '0' + month;
	     	    if (day.length < 2) day = '0' + day;
	     	   return [month, (day),year].join('-');
			}else{
				return inputData;
			}
	       };
	       
	})
})(angular);