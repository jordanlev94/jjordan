

var request = require('request');

export default function getProductsCB() {
 return new Promise(function(resolve, reject) {
  request({
     method:'POST',
     url:'https://jquery-a7b1ae.appdrag.site/api/getProducts', 
     form: {"AD_PageNbr" : "1","AD_PageSize" : "500"}
  }, function(err,httpResponse,body) {
    if ( err != null ) {
     resolve(err);
    }
    else {
     resolve(body);
    }
  });
 });
}

