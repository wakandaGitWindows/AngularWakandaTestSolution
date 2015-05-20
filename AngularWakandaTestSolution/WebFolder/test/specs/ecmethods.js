'use strict';

describe('Controller: EcmethodsCtrl', function () {
  var urlToTest = "http://127.0.0.1:8081/index.html#";
  // load the controller's module
  describe("> "+urlToTest,function(){
   
    describe('Entity Methods and attributes tests :',function(){
it('>Initialisation',function(){
					                 
			                browser.get(urlToTest).then(function(){
			                	browser.findElement(by.id('EntityCollection')).click()
			                });
              
			 			
			 		});
			 		


			it('>Method : $query()',function(){
		            browser.findElement(by.id('query')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = {
		                  	onlyFind: { 	
		                  		pageSize:4,
			                  	filter:"ID <8",
			                  	start:0 },
			                  	
			                nextPage: { 	
			                	pageSize:4,
			                  	filter:"ID <8",
			                  	start:4 }
			         	    };                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);	
                 			expect(result).toEqual(objet);    
                  		                  	
		                  
		                       
		                });
		              });
		          });
		          
			it('>Method : $totalCount()',function(){
		            browser.findElement(by.id('totalCount')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  
		                  	
		                  	

		                  	var result = JSON.parse(text);	
                 			expect(result).toEqual(7);    
                  		                  	
		                  
		                       
		                });
		              });
		          });
		          
		          
			it('>Method : $totalCount_filter()',function(){
		            browser.findElement(by.id('totalCount_filter')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  
		                  	
		                  	

		                  	var result = JSON.parse(text);	
                 			expect(result).toEqual(3);    
                  		                  	
		                  
		                       
		                });
		              });
		          });
		          
			it('>Method : $fetch_start()',function(){
		            browser.findElement(by.id('fetch_start')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  		{
		                  		id: 3	,
		                  		name:"ABELARD" },
			                  	
			            	    {
		                  		id: 4	,
		                  		name:"BRICE" },
		                  		
		                  		{
		                  		id: 5	,
		                  		name:"TOMAS" },
		                  		
		                  		{
		                  		id: 6	,
		                  		name:"KOUDISS" }
			         	    ];                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);
		                  	expect(result.totalSize).toEqual(4); 	
                 			expect(result['resultArray']).toEqual(objet);    
                  		                  	
		                  
		                       
		                });
		              });
		          });
		          
		    
		    it('>Method : $fetch_pageSize()',function(){
		            browser.findElement(by.id('fetch_pageSize')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  		{
		                  		id: 1	,
		                  		name:"ELMETNI" },
			                  	
			            	    {
		                  		id: 2	,
		                  		name:"AITRAHOU" },
		                  		
		                  		{
		                  		id: 3	,
		                  		name:"ABELARD" }
			         	    ];                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);
		                  	expect(result.totalSize).toEqual(3); 	
                 			expect(result['resultArray']).toEqual(objet);    
                  		                  	
		                  
		                       
		                });
		              });
		          });  
		          
		    it('>Method : $fetch_pageSize_start()',function(){
		            browser.findElement(by.id('fetch_pageSize_start')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  		{
		                  		id: 4	,
		                  		name:"BRICE" },
			                  	
			            	    {
		                  		id: 5	,
		                  		name:"TOMAS" },
		                  		
		                  		{
		                  		id: 6	,
		                  		name:"KOUDISS" }
			         	    ];                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);
		                  	expect(result.totalSize).toEqual(3); 	
                 			expect(result['resultArray']).toEqual(objet);    
                  		                  	
		                  
		                       
		                });
		              });
		          });  
		          
		          
		 it('>Method : $find()',function(){
		            browser.findElement(by.id('find')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  		{
		                  		id: 1	,
		                  		name:"ELMETNI" },
			                  	
			            	    {
		                  		id: 2	,
		                  		name:"AITRAHOU" },
		                  		 {
		                  		id: 3	,
		                  		name:"ABELARD" },
		                  		{
		                  		id: 4	,
		                  		name:"BRICE" }
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
		                  		{
		                  		id: 1	,
		                  		name:"ELMETNI",
		                  		company:"4D" },
			                  	
			            	    {
		                  		id: 2	,
		                  		name:"AITRAHOU" ,
		                  		company:"4D" },
		                  		 {
		                  		id: 3	,
		                  		name:"ABELARD" ,
		                  		company:"EDF" },
		                  		{
		                  		id: 4	,
		                  		name:"BRICE" ,
		                  		company:"EDF" }
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
		                  		{
		                  		id: 1	,
		                  		name:"ELMETNI",
		                  		company:"4D" },
			                  	
			            	    {
		                  		id: 2	,
		                  		name:"AITRAHOU" ,
		                  		company:"4D" }
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
		                  		{
		                  		id: 1	,
		                  		name:"ELMETNI",
		                  		company:"4D" }
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
		                  		{
		                  		id: 1	,
		                  		name:"ELMETNI",
		                  		company:"4D" },
			                  	
			            	    {
		                  		id: 2	,
		                  		name:"AITRAHOU" ,
		                  		company:"4D" }
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
		                  		{
		                  		id: 4	,
		                  		name:"BRICE",
		                  		company:"EDF" },
			                  	
			            	    {
		                  		id: 3	,
		                  		name:"ABELARD" ,
		                  		company:"EDF" },
			                  	
			            	    {
		                  		id: 2	,
		                  		name:"AITRAHOU" ,
		                  		company:"4D" },
			                  	
			            	    {
		                  		id: 1	,
		                  		name:"ELMETNI" ,
		                  		company:"4D" }
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
		                  		
			            	    {
		                  		id: 2	,
		                  		name:"AITRAHOU" ,
		                  		company:"4D" },
			                  	
			            	    {
		                  		id: 1	,
		                  		name:"ELMETNI" ,
		                  		company:"4D" }
			         	    ];                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);	
                 			expect(result['resultArray']).toEqual(objet);    
                  		                  	
		                  
		                       
		                });
		              });
		          }); 
		          
		
			it('>Method : $isLoaded()',function(){
		            browser.findElement(by.id('isLoaded')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = {
		                  	withFetch: true,
		                  	withoutFetch: false
			         	    };                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);	
                 			expect(result).toEqual(objet);    
                  		                  	
		                  
		                       
		                });
		              });
		          });
		          
		
			it('>Method : $more()',function(){
		            browser.findElement(by.id('more')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = {
		                  	oldLength: 2,
		                  	newLength: 4
			         	    };                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);	
                 			expect(result).toEqual(objet);    
                  		                  	
		                  
		                       
		                });
		              });
		          });
		          
		    
		    
		    it('>Method : $nextPage()',function(){
		            browser.findElement(by.id('nextPage')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  		
			            	    {
		                  		id: 3	,
		                  		name:"ABELARD"  },
			                  	
			            	    {
		                  		id: 4	,
		                  		name:"BRICE" }
			         	    ];                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);	
                 			expect(result['resultArray']).toEqual(objet);    
                  		                  	
		                  
		                       
		                });
		              });
		          }); 
		          
		          
		    it('>Method : $prevPage()',function(){
		            browser.findElement(by.id('prevPage')).click().then(function(){
		              browser.findElement(by.css('.result')).getText().then(function(text){
		                  
		                  
		                  	var objet  = [
		                  		
			            	    {
		                  		id:5	,
		                  		name:"TOMAS"  },
			                  	
			            	    {
		                  		id: 6	,
		                  		name:"KOUDISS" }
			         	    ];                  	
		                  	
		                  	
		                  	

		                  	var result = JSON.parse(text);	
                 			expect(result['resultArray']).toEqual(objet);    
                  		                  	
		                  
		                       
		                });
		              });
		          }); 
		              
        
    });


  });
  
});
