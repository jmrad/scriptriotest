/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var twitter = require("twitter");
var callbackUrl = "https://scriptr.io";
//tokens are optional params.
var consumerKey=request.parameters["consumerKey"];
var consumerSecret = request.parameters["consumerSecret"];

var tokens = {
"consumerKey": consumerKey,
"consumerSecret": consumerSecret
};
 
var response = twitter.getRequestToken(callbackUrl,tokens);
 
return response;   							