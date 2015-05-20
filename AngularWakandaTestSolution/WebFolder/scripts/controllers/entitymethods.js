'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:EntitymethodsCtrl
 * @description
 * # EntitymethodsCtrl
 * Controller of the testAppApp
 */
var ds, company;
angular.module('testApp')
  .controller('EntitymethodsCtrl', function ($scope,$wakanda,$routeParams) {


  	var ds = $wakanda.getDatastore();

	$scope.initData = function(){
		 $wakanda.getDatastore().InitData.initialize(); 
		console.log("dd");
	};
	
	
  	$scope.findCompany = function(){
  		$scope.company = company = ds.Company.$findOne(1);
		
  		/*company.$promise.then(function(){
        //console.log('company',company);
      });*/
  	}
  	
		
  	$scope.findCompany();
$scope.initData();
  	
  	$scope.fetch = function(){
  		
  		
  		
  		//var id = ds.Person.$attr('ID');
  		  		
		//  		company.staff.$fetch().then(function(e){
		//		        console.group('They are the same (the first is raw, the second is passed inside the success of the promise');
		//		        //console.log('company[0].staff',company[0].staff[0]);
		//		        console.log('e',company.staff[0].name);
		//		        var result = company.staff;
		//		  		$scope.result = company.staff[0].name ;
		//		  		return result;
		//		      },function(e){
		//		        console.error(e);
		//	      });  		

		company.$promise.then( function(e){
		
		e.result.staff.$fetch().then( function(ev){
		$scope.result={};
		$scope.result.resultArray=[];
		for(var i=0; i<e.result.staff.length;i++)
		{
			var objet={
				id:e.result.staff[i].ID ,
				name : e.result.staff[i].name , 
				age : e.result.staff[i].age 
				
			};
			$scope.result.resultArray.push(objet);
		}
		
	});

		});

  	}
  	
  	
  	$scope.fetch_edited_entity = function(){
  		//var id = ds.Person.$attr('ID');
  		  		
		//  		company.staff.$fetch().then(function(e){
		//		        console.group('They are the same (the first is raw, the second is passed inside the success of the promise');
		//		        //console.log('company[0].staff',company[0].staff[0]);
		//		        console.log('e',company.staff[0].name);
		//		        var result = company.staff;
		//		  		$scope.result = company.staff[0].name ;
		//		  		return result;
		//		      },function(e){
		//		        console.error(e);
		//	      });  		

		company.$promise.then( function(e){
		$scope.result={};
		
		e.result.name="edited_company";
		
		$scope.result.editedCompany = {
		ID:e.result.ID,	
		name:e.result.name	
		}
		e.result.$fetch().then( function(ev){
		
		console.log(ev);
		$scope.result.fetchedCompany = {
		ID:ev.ID,	
		name:ev.name	
		}
		
			});

		});

  	}
  	
  	

  	$scope.isLoaded = function(){
  		$scope.findCompany();
  		var result ={ withFetch:null, withoutFetch : null };
  		
  		company.$promise.then( function(e){
		
		e.result.staff.$fetch().then( function(ev){
			result.withFetch = e.result.staff.$isLoaded()
		});
		
		});
		
		
		company.$promise.then( function(e){
		
			result.withoutFetch = e.result.staff.$isLoaded()
		});
		
  		$scope.result = result;
  		return result;
  	}

  	$scope.remove = function(){
      var t = $wakanda.$ds.Person.$find();

      t.$promise.then(function(){

        var oldLength = t.length;        
        //var newEntity = $wakanda.$ds.Person.$create({"name":"New Person", "age":30});
       
        
        if( 	typeof t[oldLength-1] == "undefined" ) 
        {
        		$scope.result = {'oldLength':oldLength,'newLength':oldLength , 'deleted':false};
	              	return $scope.result;
        }
        
        else
        {
       
	          t[oldLength-1].$remove().then(function(e){
	              var persons = $wakanda.$ds.Person.$find();
	              persons.$promise.then(function(){
	                
	              var deleted =  $wakanda.$ds.Person.$findOne(oldLength);
	               
	               if(deleted.ID == undefined) {
	                $scope.result = {'oldLength':oldLength,'newLength':persons.$totalCount , 'deleted':true};
	            	}
	            	
	            	else
	            	{
	            		 $scope.result = {'oldLength':oldLength,'newLength':persons.$totalCount , 'deleted':false};
	            	}
	            
	            return $scope.result;
	              });             
	          
              
    	    }); 
        }
         }); 
        
        
    }

  	$scope.save = function(){
  		var oldName = company.name;
  		console.log(company);
      var newName = "new 4D";
      company.name = newName;
      company.$save().then(function(e){
            $scope.findCompany();
            company.$promise.then(function(){
              var result;
              
              $scope.result = result = {"newName":newName,"savedName":company.name};
              
              company.name = "4D";
              company.$save();
              return result;
            })
            
        });

  		
  	}

  	
	
    
  });
