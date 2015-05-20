

describe('Controller: DcmethodsCtrl', function () {
 
 
  var urlToTest = 'http://127.0.0.1:8081/index.html#';
  // load the controller's module


  describe("> "+urlToTest,function(){
   
    describe('DataClass Methdos and attributes tests :',function(){


	it('>Initialisation',function(){
					                 
			                browser.get(urlToTest).then(function(){
			                	browser.findElement(by.id('DataClass')).click()
			                });
              
			 			
			 		});
			 		
		it('>Method : $collectionName()',function(){
            browser.findElement(by.id('collectionName')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                  expect(text).toBe('PersonCollection');          
                });
              });
          });



        it('>Method : $name()',function(){
            browser.findElement(by.id('name')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                  expect(text).toBe('Person');          
                });
              });
          });
          
          
       it('>Method : $attr()',function(){
        browser.findElement(by.id('attr')).click().then(function(){
          browser.findElement(by.css('.result')).getText().then(function(text){
          	
          	
          	
          	
          	 var objet  ={
  			
  			id : {
  				identifying: true  ,
				indexed: true  , 
				kind: "storage"  , 
				name: "ID"  , 
				related: false  , 
				scope: "public" , 
				simple: true  , 
				type: "long"
  				
  			},
  			name : {
  				kind: "storage",
				name:"name",
				related: false,
				scope: "public" , 
				simple: true  , 
				type: "string"
  			},
  			company:{
  				kind: "relatedEntity",
				name: "company",
				path: "Company",
				related:true  , 
				relatedOne: true  , 
				resolved: false  , 
				scope: "public" , 
				simple:false,
				type: "Company"
  			}	
  		};
  		
  		
              	 
             var result = JSON.parse(text);	
             expect(result).toEqual(objet);    
             
             
                  
            });
          });
      });
      
          
        it('>Method : $collectionMethods()',function(){
            browser.findElement(by.id('collectionMethods')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                  expect(text).toBe('["collectionMethod1","collectionMethod2"]');          
                });
              });
          });
          
           it('>Method : $dataClassMethods()',function(){
            browser.findElement(by.id('dataClassMethods')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                  expect(text).toBe('["dataClassMethod1","dataClassMethod2"]');          
                });
              });
          });


		 it('>Method : $entityMethods()',function(){
		            browser.findElement(by.id('entityMethods')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  expect(text).toBe('["entityMethod1","entityMethod2"]');          
		                });
		              });
		          });



		it('>Method : $find()',function(){
		            browser.findElement(by.id('find')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  	{ 	id:1,
			                  	name:"ELMETNI",
			                  	age:24},
			                  	
			                { 	id:2,
			                  	name:"AITRAHOU",
			                  	age:24},
			                  	
			                { 	id:3,
			                  	name:"ABELARD",
			                  	age:50},
			                  	
							{ 	id:4,
			                  	name:"BRICE",
			                  	age:29},
			                  	
			                { 	id:5,
			                  	name:"TOMAS",
			                  	age:42},
			                  	
			                { 	id:6,
			                  	name:"KOUDISS",
			                  	age:32},
			                  	
			                 { 	id:7,
			                  	name:"VASS",
			                  	age:24}
		                  	];                  	
		                  	
		                  	
		                  	
		                  	
		                  	var result = JSON.parse(text);	
                 			expect(result['resultArray']).toEqual(objet);    
                  
		                  
		                       
		                });
		              });
		          });

       		it('>Method : $find_selectOption()',function(){
		            browser.findElement(by.id('find_selectOption')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  	{ 	id:1,
			                  	name:"ELMETNI",
			                  	age:24 ,
			                  	company:"4D"},
			                  	
			                { 	id:2,
			                  	name:"AITRAHOU",
			                  	age:24,
			                  	company:"4D"},
			                  	
			                { 	id:3,
			                  	name:"ABELARD",
			                  	age:50,
			                  	company:"EDF"},
			                  	
							{ 	id:4,
			                  	name:"BRICE",
			                  	age:29,
			                  	company:"EDF"},
			                  	
			                { 	id:5,
			                  	name:"TOMAS",
			                  	age:42,
			                  	company:"Apple"},
			                  	
			                { 	id:6,
			                  	name:"KOUDISS",
			                  	age:32,
			                  	company:"Google"},
			                  	
			                 { 	id:7,
			                  	name:"VASS",
			                  	age:24,
			                  	company:"Google"}
		                  	];                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);	
                 			expect(result['resultArray']).toEqual(objet);    
                  		                  	
		                  
		                       
		                });
		              });
		          });
		          
		          
		          
		          
       		it('>Method : $find_filterOption()',function(){
		            browser.findElement(by.id('find_filterOption')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  	{ 	id:1,
			                  	name:"ELMETNI",
			                  	age:24 ,
			                  	company:"4D"},
			                  	
			                { 	id:2,
			                  	name:"AITRAHOU",
			                  	age:24,
			                  	company:"4D"},
			                  	
			                { 	id:3,
			                  	name:"ABELARD",
			                  	age:50,
			                  	company:"EDF"}
		                  	];                  	
		                  	
		                  	
		                  	
		                  	
		                  	var result = JSON.parse(text);	
                 			expect(result['resultArray']).toEqual(objet);    
                  
		                  
		                       
		                });
		              });
		          });
		         
		 
		 it('>Method : $find_paramsOption()',function(){
		            browser.findElement(by.id('find_paramsOption')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  	{ 	id:1,
			                  	name:"ELMETNI",
			                  	age:24 ,
			                  	company:"4D"}
		                  	];                  	
		                  	
		                  	
		                  	
		                  	
		                  	var result = JSON.parse(text);	
                 			expect(result['resultArray']).toEqual(objet);    
                  
		                  
		                       
		                });
		              });
		          }); 
		          

		       
		 
		 it('>Method : $find_pageSizeOption()',function(){
		            browser.findElement(by.id('find_pageSizeOption')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  	{ 	id:1,
			                  	name:"ELMETNI",
			                  	age:24 ,
			                  	company:"4D"},
			                  	
			                { 	id:2,
			                  	name:"AITRAHOU",
			                  	age:24,
			                  	company:"4D"},
			                  	
			                { 	id:3,
			                  	name:"ABELARD",
			                  	age:50,
			                  	company:"EDF"}
		                  	];                  	
		                  	
		                  	
		                  	
		                  	
		                  	var result = JSON.parse(text);	
                 			expect(result['resultArray']).toEqual(objet);    
                  
		                  
		                       
		                });
		              });
		          }); 
		          
		          
		
		
		 it('>Method : $find_orderByOption()',function(){
		            browser.findElement(by.id('find_orderByOption')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  	
		                  	{ 	id:7,
			                  	name:"VASS",
			                  	age:24,
			                  	company:"Google"},
		                  	
		                  	   { 	id:6,
			                  	name:"KOUDISS",
			                  	age:32,
			                  	company:"Google"},
		                  	
		                  	
		                  	   	
			                { 	id:5,
			                  	name:"TOMAS",
			                  	age:42,
			                  	company:"Apple"},
			                  	
			                    	
							{ 	id:4,
			                  	name:"BRICE",
			                  	age:29,
			                  	company:"EDF"},
			                   { 	id:3,
			                  	name:"ABELARD",
			                
			                  	age:50,
			                  	company:"EDF"},	
			                  	
			                  { 	id:2,
			                  	name:"AITRAHOU",
			                  	age:24,
			                  	company:"4D"},
			                  	
		                  	{ 	id:1,
			                  	name:"ELMETNI",
			                  	age:24 ,
			                  	company:"4D"}
			                  	
			               
			                  	
			              
			              
			                  	
			             
			                  	
			                 
		                  	];                  	
		                  	
		                  	
		                  	
		                  	
		                  	var result = JSON.parse(text);	
                 			expect(result['resultArray']).toEqual(objet);    
                  
		                  
		                       
		                });
		              });
		          }); 
		          
		
		
		 it('>Method : $find_filter_orderBy()',function(){
		            browser.findElement(by.id('find_filter_orderBy')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  	
		                  	 { 	id:3,
			                  	name:"ABELARD",
			                  	age:50,
			                  	company:"EDF"},
			                  	
			                  { 	id:2,
			                  	name:"AITRAHOU",
			                  	age:24,
			                  	company:"4D"}, 	
		                  	{ 	id:1,
			                  	name:"ELMETNI",
			                  	age:24 ,
			                  	company:"4D"}
			                  	
			               
			                  	
			               
		                  	];                  	
		                  	
		                  	
		                  	
		                  	
		                  	var result = JSON.parse(text);	
                 			expect(result['resultArray']).toEqual(objet);    
                  
		                  
		                       
		                });
		              });
		          }); 
		          
		 it('>Method : $findOne()',function(){
            browser.findElement(by.id('findOne')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
              	
              	
              	
              	
              	var objet  = {id:3,name:"ABELARD",age:50};
              	 
              	var result = JSON.parse(text);	
                expect(result).toEqual(objet);          
                            
                });
              });
          });
          
          
           it('>Method : $findOneSelect()',function(){
            browser.findElement(by.id('findOneSelect')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                    	
              	
              	
              	var objet  = {id:3,name:"ABELARD",age:50 ,company:"EDF" };
              	 
              	var result = JSON.parse(text);	
                expect(result).toEqual(objet);                        
                });
              });
          });
          
		                 
		          
        
          
          
          it('>Method : $create()',function(){
            browser.findElement(by.id('create')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                 	var objet  = {
                 		oldLength:7,
                 		newLength:8,
                 		person:{
                 				id: 8, 
                 				name : null ,
                 				age : 	null
                 			
                 		}
                 		};
              	 
              	var result = JSON.parse(text);	
                expect(result).toEqual(objet);  
                });
              });
          });
          
          it('>Method : $create_emptyEntity()',function(){
            browser.findElement(by.id('create_emptyEntity')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                  var objet  = {
                 		oldLength:8,
                 		newLength:9,
                 		person:{
                 				id: 9, 
                 				name : null ,
                 				age : 	null
                 			
                 		}
                 		};
              	 
              	var result = JSON.parse(text);	
                expect(result).toEqual(objet);  
                });
              });
          });
          
          it('>Method : $create_withEntity()',function(){
            browser.findElement(by.id('create_withEntity')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                 var objet  = {
                 		oldLength:9,
                 		newLength:10,
                 		person:{
                 				id: 10, 
                 				name : "entityOption" ,
                 				age : 	26
                 			
                 		}
                 		};
              	 
              	var result = JSON.parse(text);	
                expect(result).toEqual(objet);  
                });
              });
          });
          



       
    });


  });
    

 


});
