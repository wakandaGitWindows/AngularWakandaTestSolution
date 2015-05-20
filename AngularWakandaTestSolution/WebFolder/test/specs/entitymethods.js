'use strict';

describe('Controller: EntitymethodsCtrl', function () {

  var urlToTest = 'http://127.0.0.1:8081/index.html#';


    describe('Entity Methods and attributes tests :',function(){


		it('>Initialisation',function(){
							                 
					                browser.get(urlToTest).then(function(){
					                	
					                	browser.findElement(by.id('Entity')).click()
					                });
		              
					 			
					 		});
			 		
			 		
        it('>Method : $fetch()',function(){
            browser.findElement(by.id('fetch')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                   	var objet  = [
		                  	{ 	id:1,
			                  	name:"ELMETNI",
			                  	age:24 },
			                  	
			                { 	id:2,
			                  	name:"AITRAHOU",
			                  	age:24}
		                  	];                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);	
                 			expect(result['resultArray']).toEqual(objet);    
                          
                });
              });
          });
          
         it('>Method : $fetch_edited_entity()',function(){
            browser.findElement(by.id('fetch_edited_entity')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                   	var objet  = 
		                  	{ 	editedCompany :{
		                  				ID:1,
		                  				name:"edited_company"
		                		  	},
		                		
		                		fetchedCompany :{
		                  				ID:1,
		                  				name:"4D"
		                		  	}
			                  	
			                  	
			                  	}
		                  	;                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);	
                 			expect(result).toEqual(objet);    
                          
                });
              });
          });

        it('>Method : $isLoaded()',function(){
            browser.findElement(by.id('isLoaded')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                 	var objet  = 
		                  	{ 	withFetch :true ,
		                		
		                		withoutFetch :false
			                  	
			                  	
			                  	}
		                  	;                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);	
                 			expect(result).toEqual(objet);    
                });
              });
          });       

        it('>Method : $remove()',function(){
            browser.findElement(by.id('remove')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                  var lentghs = JSON.parse(text);
                  expect(lentghs).toBeDefined;          
                  expect(lentghs.newLength).toBe(parseInt(lentghs.oldLength) -1); 
                });
              });
          });

        it('>Method : $save()',function(){
            browser.findElement(by.id('save')).click().then(function(){
              browser.findElement(by.css('.result')).getText().then(function(text){
                  var names = JSON.parse(text);
                  expect(names).toBeDefined;          
                  expect(names.newName).toBe(names.savedName); 
                });
              });
          });
    });
  });

