

describe('Controller: testAuthentication', function () {

   var urlToTest = 'http://127.0.0.1:8081/index.html#';
   beforeEach(function() {
 
		
		   
   
   	});
    describe('Test directory authentication :',function(){

  			it('>Initialisation',function(){
					                 
			                browser.get(urlToTest).then(function(){
			                	browser.findElement(by.id('Authentification')).click()
			                });
              
			 			
			 		});
			 		
			 		
			 it('>Method : $login()',function(){
					                 
			                  browser.findElement(by.id('DirectoryLogout')).click().then(function(){
			                 browser.findElement(by.id('DirectoryLogin')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);				             
				             expect(result).toBeDefined;          
				             expect(result.loged).toBe("yes"); 
				             expect(result.user).toBeDefined; 
				             expect(result.user.userName).toBe("admin");
				             expect(result.user.fullName).toBe("admin");     
				                          
				                });
				              });
				               });
              
			 			
			 		});
			 			
			it('>Method : $loginByPassword()',function(){
					                 
			                browser.findElement(by.id('DirectoryLogout')).click().then(function(){
			                 browser.findElement(by.id('DirectoryLoginByPassword')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);				             
				             expect(result).toBeDefined;          
				             expect(result.loged).toBe("yes"); 
				             expect(result.user).toBeDefined; 
				             expect(result.user.userName).toBe("admin");
				             expect(result.user.fullName).toBe("admin");     
				                          
				                });
				              });
				               });
              
			 			
			});
			
			
			it('>Method : $currentUser()',function(){
					                 
			                
			                 browser.findElement(by.id('DirectoryCurrentUser')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);	
				             expect(result).toBeDefined;   			             
				             expect(result.user).toBeDefined;          
				             expect(result.user.userName).toBe("admin");
				             expect(result.user.fullName).toBe("admin");     
				                          
				                });
				              });
              
			 		
			});
			
			
			it('>Method : $currentUserBelongsTo() Test1',function(){
					                 
			                
			                 browser.findElement(by.id('DirectoryCurrentUserBelongsTo1')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);	
				             expect(result).toBeDefined;   		         
				             expect(result.userBelong).toBe("yes");     
				                          
				                });
				              });
              
			 		
			});
			
			
			it('>Method : $currentUserBelongsTo() Test2',function(){
						                 
			                
			                 browser.findElement(by.id('DirectoryCurrentUserBelongsTo2')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);	
				             expect(result).toBeDefined;   		         
				             expect(result.userBelong).toBe("Non");     
				                          
				                });
				              });
              
			 		
			});
			
			
			
			it('>Method : $currentUserBelongsTo() Test3',function(){
					                 
			                
			                 browser.findElement(by.id('DirectoryCurrentUserBelongsTo3')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);	
				             expect(result).toBeDefined;   		         
				             expect(result.userBelong).toBe("Non");     
				                          
				                });
				              });
              
			 		
			});
			
			
			it('>Method : $currentUserBelongsTo() Test4',function(){
					                 
			                
			                 browser.findElement(by.id('DirectoryCurrentUserBelongsTo4')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);	
				             expect(result).toBeDefined;   		         
				             expect(result.userBelong).toBe("yes");     
				                          
				                });
				              });
              
			 		
			});
			
			
			
			it('>Method : $logout() ',function(){
					                 
			                
			                 browser.findElement(by.id('DirectoryLogout')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);	
				             expect(result).toBeDefined;   		         
				             expect(result.user).toBe(null);;
				             expect(result.loged).toBe("Non");    
				                         
				                });
				             
              
			 			});
			});
			


	});
	
	
	
	 describe('Test data authentication :',function(){

			 it('>Method : $login()',function(){
						                 
			                 browser.findElement(by.id('DataLogout')).click().then(function(){
			                 browser.findElement(by.id('DataLogin')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);				             
				             expect(result).toBeDefined;          
				             expect(result.loged).toBe("yes"); 
				             expect(result.user).toBeDefined; 
				              expect(result.user.userName).toBe("elmetni");
				             expect(result.user.fullName).toBe("ELMETNI Hamza");       
				                          
				                });
				              });
              
			 			 });
			 		});
			 			
			it('>Method : $loginByPassword()',function(){
				                 
			                browser.findElement(by.id('DataLogout')).click().then(function(){
			                 browser.findElement(by.id('DataLoginByPassword')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);				             
				             expect(result).toBeDefined;          
				             expect(result.loged).toBe("yes"); 
				             expect(result.user).toBeDefined; 
				              expect(result.user.userName).toBe("elmetni");
				             expect(result.user.fullName).toBe("ELMETNI Hamza");        
				                          
				                });
				              });
				               });
              
			 		
			});
			
			
			it('>Method : $currentUser()',function(){
						                 
			                
			                 browser.findElement(by.id('DataCurrentUser')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);	
				             expect(result).toBeDefined;   			             
				             expect(result.user).toBeDefined;          
				             expect(result.user.userName).toBe("elmetni");
				             expect(result.user.fullName).toBe("ELMETNI Hamza");     
				                          
				                });
				              });
              
			});
			
			
			it('>Method : $currentUserBelongsTo() Test1',function(){
			 		                 
			                
			                 browser.findElement(by.id('DataCurrentUserBelongsTo1')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);	
				             expect(result).toBeDefined;   		         
				             expect(result.userBelong).toBe("yes");     
				                          
				                });
				              });
              
			 			
			});
			
			
			it('>Method : $currentUserBelongsTo() Test2',function(){
				                 
			                
			                 browser.findElement(by.id('DataCurrentUserBelongsTo2')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);	
				             expect(result).toBeDefined;   		         
				             expect(result.userBelong).toBe("yes");     
				                          
				                });
				              });
              
			});
			
			
			
			it('>Method : $currentUserBelongsTo() Test3',function(){
					                 
			                
			                 browser.findElement(by.id('DataCurrentUserBelongsTo3')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);	
				             expect(result).toBeDefined;   		         
				             expect(result.userBelong).toBe("Non");     
				                          
				                });
				           
              
			 			});
			});
			
			
			it('>Method : $currentUserBelongsTo() Test4',function(){
					                 
			                
			                 browser.findElement(by.id('DataCurrentUserBelongsTo4')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);	
				             expect(result).toBeDefined;   		         
				             expect(result.userBelong).toBe("Non");     
				                          
				                });
				           
              
			 			});
			});
			
			
			
			
			
			it('>Method : $logout() ',function(){
					                 
			                
			                 browser.findElement(by.id('DataLogout')).click().then(function(){
				             browser.findElement(by.id('result')).getText().then(function(text){				             	
				             var result = JSON.parse(text);	
				             expect(result).toBeDefined;   		         
				             expect(result.user).toBe(null);;
				             expect(result.loged).toBe("Non");    
				                         
				                });
				              });
              
			 			
			});
			


	});
	
});