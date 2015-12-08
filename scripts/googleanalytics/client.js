/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var config = require("googleanalytics/config");
var http = require("http");

/**
 * a simple wrapper on Google Analytics's APIs
 * @class GoogleAnalyticsClient
 * @constructor GoogleAnalyticsClient
 * @param {String} tid : (mendatory), the tracking id given by google 
 */
function GoogleAnalyticsClient(tid) {
	this.trackingId=tid;  
}

/**
 * track the event , call google analytics API to register the event hit.
 * @method track
 * @param {String} the category of the event Example : video , event, button click...
 * @param {String} the action of the event Example: play, rewind, click ... 
 * @param {object} optional parameters  Event label and Event value. Example : {"el":"holiday" // Event label ,"ev":"300"// Event value. ..... } or {} .
 * @param {object} the scriptr request 
 * @param {object}  client id or "" 
  * @param {boolean}  debug mode true for debug and false for no debug
 */
GoogleAnalyticsClient.prototype.track = function(eventCategory, eventAction ,optionalParamsObj , request, cid, debug) {
  	this.googleUrl="";
  if(debug==true){
    this.googleUrl=config.getGoogleAnalyticsDebugUrl();
  }else{
  	this.googleUrl=config.getGoogleAnalyticsUrl();  
  }
  
  if(cid == ""){
     cid=request.user.id;
   }
  var requestParams = {  
      "url": this.googleUrl,
      "params": {
        "v": "1",
		"tid": this.trackingId,
		"cid": cid,
		"t": "event",
        "ec": eventCategory,
        "ea": eventAction
      },
      "method": "POST"
  };
  for (var attrname in optionalParamsObj) { 
    	requestParams.params[attrname] = optionalParamsObj[attrname]; 
  }
   console.log(JSON.stringify(requestParams));
   return this._callApi(requestParams); 
};

/**
 * issue an http request towards google analytics's APIs. 
 *Throws an exception if returned status code =/= 200
 * or =/= 307
 * @method _callApi
 * @return the body of the http response, as a JSON or String, depending on the response's content-type
 */
GoogleAnalyticsClient.prototype._callApi = function(requestParams) {
  
  var response = {};
  try {
    response = http.request(requestParams);
    return this._parseResponse(response);
  }catch(exception) {
        throw exception;
      }
  };

/**
 * check the status code of the response and parse the body if status == 200
 * otherwise throw an exception
 * @method _parseResponse
 * @return the body of the http response, as a JSON or String, depending on the response's content-type
 */
GoogleAnalyticsClient.prototype._parseResponse = function(response) {
  if (response.status == "200") {
  	return this._parseBody(response);  	
  }
  throw {
    "errorCode": "google_analytics_error",
    "errorDetail": "Remote google analytics API returned an error " + response.status + " (" + JSON.stringify(response.body) + ")"
  } 
};

/**
 * @method _parseBody
 * @return the body of the http response, as a JSON or String, depending on the response's content-type
 */
GoogleAnalyticsClient.prototype._parseBody = function(response) {
  var responseBodyStr = response.body;
  if (response.headers["Content-Type"].indexOf("application/json") > -1 && responseBodyStr!="") {
    	return JSON.parse(responseBodyStr);
  	}
  
  return responseBodyStr;
};   				   				   				   				   				   				   							