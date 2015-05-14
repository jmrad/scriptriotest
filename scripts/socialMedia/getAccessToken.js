/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var twitter = require("twitter");
var callbackUrl = "http://test.scriptr.io";

//tokens are optional params
var consumerKey = request.parameters["consumerKey"];
var consumerSecret = request.parameters["consumerSecret"];

var tokens = {
  "consumerKey": consumerKey,
  "consumerSecret": consumerSecret
};

var requestToken = request.parameters["requestToken"];
var requestSecret = request.parameters["requestSecret"];

var oAuthVerifier = request.parameters["oAuthVerifier"];

var response = twitter.getAccessToken(requestToken, requestSecret, oAuthVerifier, tokens);

return response;   							