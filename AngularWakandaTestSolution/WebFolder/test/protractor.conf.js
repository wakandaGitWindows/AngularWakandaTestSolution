var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = (function(){
    var baseUrl= 'http://localhost:4444/wd/hub';
  var specs = [];
 
//  specs.push('./specs/test.js');
  specs.push('./specs/dcMethods.js');



  specs.push('./specs/ecmethods.js');
 specs.push('./specs/entitymethods.js');
   specs.push('./specs/authentication.js');
//   
   var HtmlReport = function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screnshots`: 
      jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: './screenshots',
      takeScreenShotsOnlyForFailedSpecs: false,       
      docTitle: 'Wakanda-Angular Tests Results'
      }));
   }




  
  return {
    specs : specs,
    onPrepare:  HtmlReport,
    baseUrl : baseUrl/*,
    capabilities : capabilities*/
  };
  
})();