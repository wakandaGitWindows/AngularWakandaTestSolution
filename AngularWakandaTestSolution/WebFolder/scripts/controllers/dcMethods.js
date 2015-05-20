'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:DcmethodsCtrl
 * @description
 * # DcmethodsCtrl
 * Controller of the testAppApp
 */
 var person;
angular.module('testApp')
  .controller('DcmethodsCtrl', function ($scope,$wakanda,$routeParams) {
  	
  		var ds = $wakanda.getDatastore();
	
	ds.InitData.initialize(); 
    $scope.all;



    $scope.length = 0;
    console.log(ds);
  	
  	

  	$scope.attr = function(){
  		
		
 		var id = ds.Person.$attr('ID');
		var name = ds.Person.$attr('name');
		var company = ds.Person.$attr('company');
//  		
//  		var result;
//      	
//      	
//      	var attrs ={};
//      	attrs.id= id;
//      	attrs.name= name;
//      	attrs.company= company;
      	
  	
  		
  		var result ={
  			
  			id : {
  				identifying: id.identifying  ,
				indexed: id.indexed  , 
				kind: id.kind  , 
				name: id.name  , 
				related: id.related  , 
				scope: id.scope  , 
				simple: id.simple  , 
				type: id.type
  				
  			},
  			name : {
  				kind: name.kind,
				name: name.name,
				related: name.related,
				scope: name.scope,
				simple: name.simple,
				type: name.type
  			},
  			company:{
  				kind: company.kind,
				name: company.name,
				path: company.path,
				related:company.related,
				relatedOne: company.relatedOne,
				resolved: company.resolved,
				scope: company.scope,
				simple:company.simple,
				type: company.type
  			}	
  		};
      	
	    
  		$scope.result = result ;
  		return result;
  	}

	$scope.collectionName = function(){
  		var result = ds.Person.$collectionName;  		
  		$scope.result = result;
  		return result;
  	}



  	$scope.collectionMethods = function(){
  		var result = ds.Person.$collectionMethods();  		
  		$scope.result = result;
  		return result;
  	}

  	$scope.create = function(options){
  		var t = $wakanda.$ds.Person.$find();

  		t.$promise.then(function(){

  			var oldLength = t.$totalCount;  
        if(options)
        {
          if(options.emptyEntity) 
          {
              var newEntity = $wakanda.$ds.Person.$create();
              newEntity.name = "savedAfter";
            }
          else  
           {
              var newEntity = $wakanda.$ds.Person.$create(options);
              console.log(options);
              
           } 
        }	
        else
        {
           var newEntity = $wakanda.$ds.Person.$create();
         
        }		
  			
         
	        newEntity.$save().then(function(e){
	        var persons = $wakanda.$ds.Person.$find();
	        persons.$promise.then(function(){
	       
	       	var personSelected = ds.Person.$findOne(persons.$totalCount  )
	       	
	       	personSelected.$promise.then(function(ev){
	       	
	       	var p = {
            	
            	
            	  id : ev.result.ID,
            	  name : ev.result.name,
            	  age : ev.result.age
            	   };
            	   
	        $scope.result = {'oldLength':oldLength,'newLength':persons.$totalCount , 'person':p};
            $scope.length = $scope.result.newLength;  
  	    		return $scope.result;
	            });	            
	          });
	       });  
        });  	
  	}

  	$scope.dataClassMethods = function(){
  		var result = ds.Person.$dataClassMethods();  		
  		$scope.result = result;
  		return result;
  	}

  	$scope.entityMethods = function(){
  		var result = ds.Person.$entityMethods();  		
  		$scope.result = result;
  		return result;
  	}
  	
  	
  	$scope.name = function(){
  		var result = ds.Person.$name;  		
  		$scope.result = result;
  		return result;
  	}
  	
  	
  	$scope.test = function(){
  		
//  		var t = $wakanda.$ds.Person.$find({ 'filter': 'name ="ELMETNI"' });
  	
  		console.log($wakanda.$ds);
  		
  		var result=t.$promise;
  		$scope.result = result;
  		
		  		
		  		$wakanda.$ds.Person.$find().$promise.then(function (r ){
		  			
		  			console.log(r);
		  			for(var i =0 ; i< r.result.length; i++)
		  			{
		  				r.result[i].$remove();
		  			}
		  			
		  		});
		  		
		  		
		  		$wakanda.$ds.Company.$find().$promise.then(function (r ){
		  			
		  			console.log(r);
		  			for(var i =0 ; i< r.result.length; i++)
		  			{
		  				r.result[i].$remove();
		  			}
		  			
		  		});
		  		
		  		
		  		$wakanda.$ds.User.$find().$promise.then(function (r ){
		  			
		  			console.log(r);
		  			for(var i =0 ; i< r.result.length; i++)
		  			{
		  				r.result[i].$remove();
		  			}
		  			
		  		});
  		
  		
  		
  		
  				
  		
  		
  		
  		
  		
  		
  		return result;
  	}
  	
  	
  	
  	

  	$scope.find = function(options){
  		var result = "find";
  		var persons = ds.Person.$find(options);
  		
  		persons.$promise.then(function(e){
         
        $scope.result = {resultArray:[]};
    
        	
        
  			for(var i = 0 ; i< e.result.length ; i++ ) 
  			{
            $scope.result.resultArray.push({
            	
            	
            	  id : e.result[i].ID,
            	  name : e.result[i].name,
            	  age : e.result[i].age,
            	  company : e.result[i].company.name
            	   });
			}
        return $scope.result;        
      });
  		
  	}    

  	$scope.findOne = function(){
  		var result = "findOne";
  	
      $scope.person = person = ds.Person.$findOne(3);
      person.$promise.then(function(e){        
         $scope.result={
            	
            	
            	  id : e.result.ID,
            	  name : e.result.name,
            	  age : e.result.age,
            	  company : e.result.company.name
            	   };
        result = $scope.result;
        return result;
      });
  		
  	}
  	
  	
  	$scope.findOne_select = function(){
  		var result = "findOne";
  	
      $scope.person = person = ds.Person.$findOne(3 , {'select':'company'});
      person.$promise.then(function(e){        
         $scope.result={
            	
            	
            	  id : e.result.ID,
            	  name : e.result.name,
            	  age : e.result.age,
            	  company : e.result.company.name
            	   };
        result = $scope.result;
        return result;
      });
  		
  	}

  });
