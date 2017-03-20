
(function(angular) {

	'use strict';
angular
.module('dateRangeModule',['ui.bootstrap'])
.service('dateRangeService',['$http', function ($http){
	
 
	
	this.formatDate = function(inputDate){
		if(inputDate instanceof Date){
		var expDate = new Date(inputDate);
    	 var month = '' + (expDate.getMonth() + 1);
         var day = '' + expDate.getDate();
        var  year = expDate.getFullYear();
    	  if (month.length < 2) month = '0' + month;
    	    if (day.length < 2) day = '0' + day;
    	   return [month, (day),year].join('-');
		}else{
			return inputDate;
		}
	};
	
	this.convertStringToDate = function(strDate){
		if(!(strDate instanceof Date)){
		var pattern = /(\d{2})\-(\d{2})\-(\d{4})/;
		var dateArray = pattern.exec(strDate); 
		var dateObject = new Date(
			    (+dateArray[3]),
			    (+dateArray[1])-1, // Careful, month starts at 0!
			    (+dateArray[2])
			);
		return dateObject;
		}
	}
	
	this.formatDate_india = function(inputDate){
		if(inputDate instanceof Date){
		var expDate = new Date(inputDate);
    	 var month = '' + (expDate.getMonth() + 1);
         var day = '' + expDate.getDate();
        var  year = expDate.getFullYear();
    	  if (month.length < 2) month = '0' + month;
    	    if (day.length < 2) day = '0' + day;
    	   return [day, (month),year].join('-');
		}else{
			return inputDate;
		}
	};
	
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
      
}]);
})(angular);