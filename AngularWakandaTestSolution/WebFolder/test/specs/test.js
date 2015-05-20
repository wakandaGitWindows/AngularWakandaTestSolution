

describe('Controller: DcmethodsCtrl', function () {
  var urlToTest = 'http://127.0.0.1:8081/index.html#/test';
  // load the controller's module
  
 
  describe("> "+urlToTest,function(){
    
   browser.get(urlToTest);

    describe('DataClass Methdos and attributes tests :',function(){

		it('>Method : $TestObjectEqual()',function(){
         
         
        
        
              browser.findElement(by.css('.result')).getText().then(function(text){
              	 var objet  = {userName:"admin",fullName:"admin",ID:"12"};
              	 
              	var result = JSON.parse(text);	
                  expect(result).toEqual(objet);          
                
              });
          });



		it('>Method : $TestArrayEqual()',function(){
         
         
         var objet  = [{userName:"admin",fullName:"admin",ID:"12"},{userName:"admin2",fullName:"admin2",ID:"122"}];
        
              browser.findElement(by.id('result')).getText().then(function(text){
              	var result = JSON.parse(text);	
                  expect(result['resultArray']).toEqual(objet);          
                
              });
          });


      });     
      
      });
      });