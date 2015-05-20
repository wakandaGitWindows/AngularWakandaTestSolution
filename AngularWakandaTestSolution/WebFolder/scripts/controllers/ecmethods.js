'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:ecmethods
 * @description
 * # ecmethods
 * Controller of the testAppApp
 */
var company, persons;
angular.module('testApp')
  .controller('ecmethods', function ($scope,$wakanda,$routeParams) {


  		var ds = $wakanda.getDatastore();
	
	ds.InitData.initialize(); 
	
	
  	$scope.attributes = [];
  	$scope.result = "nothing";


  	$scope.findCompany = function(){
  		$scope.company = company = ds.Company.$findOne(1);
  	}

	
  	
  	$scope.query = function(){
  		$scope.result={};
		$wakanda.$ds.Person.$find({
			    filter: 'ID <8',
			    pageSize: 4
			}).$promise.then( function(e){
		
		
			
			$scope.result.onlyFind={
			
			pageSize:e.result.$query.pageSize,
			filter:e.result.$query.filter,
			start:e.result.$query.start
			};
			
		
		
		
			
		});
		
		
		$wakanda.$ds.Person.$find({
			    filter: 'ID <8',
			    pageSize: 4
			}).$promise.then( function(e){
		
		
		e.result.$nextPage().then(function(e2){
			
			$scope.result.nextPage={
			
			pageSize:e.result.$query.pageSize,
			filter:e.result.$query.filter,
			start:e.result.$query.start
			};
		
			
		});
		
		
			
		});
  	}
  	
  		
    $scope.totalCount = function(option){
    	
	     $wakanda.$ds.Person.$find(option).$promise.then( function(e){
			
			
			e.result.$nextPage().then(function(e2){
				
				var result={};
				result = e.result.$totalCount;
			
				$scope.result = result;
			});
			
			
				
			});
      
    }
    
    
     $scope.fetch = function(option){
    	

	     $wakanda.$ds.Person.$find({ pageSize:4}).$promise.then( function(e){
			
			 e.result.$fetch(option).then( function(ev){
			 
			 
			 	var arrayResult=[];
			 	
				var result={};
				result.totalSize =ev.result.length;
			
				for(var i=0 ; i<ev.result.length  ; i++)
				{
					var o ={};
					o.id=ev.result[i].ID ;
					o.name=	ev.result[i].name ; 
					
					arrayResult.push(o);
					
					
				}	
			
			result.resultArray=arrayResult;
				$scope.result = result;
			 
			 });
		
				
			});
      
    }



	$scope.find = function(options){
  		
  		var persons = ds.Person.$find({filter:"ID<5"});
  		
  		persons.$promise.then(function(e){
         
         e.result.$find(options).$promise.then(function(e1){
         
         
         
	        $scope.result = {resultArray:[]};
	    
	        	
	        
	  			for(var i = 0 ; i< e1.result.length ; i++ ) 
	  			{
	            $scope.result.resultArray.push({
	            	
	            	
	            	  id : e1.result[i].ID,
	            	  name : e1.result[i].name,
	            
	            	  company : e1.result[i].company.name
	            	   });
				}       
	      });
      
      });
  		
  	}  

  	
    $scope.findPersons = function(){
      $scope.persons = persons = ds.Person.$find({'select':'company','pageSize' : 5});     
      persons.$promise.then(function(){ 
        $scope.oldLength = persons.length;
        $scope.oldValue = persons[8];

      });
      
    }

    $scope.initData = function(){
      $scope.findPersons();    
    }
    
    $scope.findPersons();    
  	$scope.findCompany();
    



	$scope.isLoaded = function(){
		
		$scope.findCompany();
  		var result ={ withFetch:null, withoutFetch : null };
  		
  		ds.Company.$find().$promise.then( function(e){
		
		e.result[0].staff.$fetch().then( function(ev){
			result.withFetch = e.result[0].staff.$isLoaded()
		});
		
		});
		
		
		ds.Company.$find().$promise.then( function(e){
		
			result.withoutFetch = e.result[0].staff.$isLoaded()
		});
		
  		$scope.result = result;
  		return result;
  	}

  	$scope.more = function(){

  		 
        
       $scope.result={};
        
        $wakanda.$ds.Person.$find({ pageSize:2}).$promise.then( function(e){
			
			var a = e.result.length;
			
			 $scope.result.oldLength=a;
			
			
			
			
			});
			
			 
			 
		$wakanda.$ds.Person.$find({ pageSize:2}).$promise.then( function(e){
			
			
			e.result.$more().then(function(){ 
	
			
			var b = e.result.length;
			
			
				 $scope.result.newLength=b;
			
		
				
			});
			
		});	
			
  	}

  	$scope.nextPage = function(){      
      
	     $wakanda.$ds.Person.$find({ pageSize:2}).$promise.then( function(e){
			
			 e.result.$nextPage().then( function(ev){
			 
			 
			 	var arrayResult=[];
			 	
				var result={};
			
				
				for(var i=0 ; i<ev.result.length  ; i++)
				{
					var o ={};
					o.id=ev.result[i].ID ;
					o.name=	ev.result[i].name ; 
					
					arrayResult.push(o);
					
					
				}	
			
			result.resultArray=arrayResult;
				$scope.result = result;
			 
			 });
		
				
			});
  	}

  	$scope.prevPage = function(){

  		 $wakanda.$ds.Person.$find({ pageSize:2}).$promise.then( function(e){
			
			 e.result.$fetch({start:6}).then( function(ev1){
			 
			  e.result.$prevPage().then( function(ev){
			 	var arrayResult=[];
			 	
				var result={};
			
				
				for(var i=0 ; i<ev.result.length  ; i++)
				{
					var o ={};
					o.id=ev.result[i].ID ;
					o.name=	ev.result[i].name ; 
					
					arrayResult.push(o);
					
					
				}	
			
			result.resultArray=arrayResult;
				$scope.result = result;
			 
			 });
		
			 });
			});
  	}

  	

    
  });

