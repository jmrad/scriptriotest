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

var credentials = {
	"consumerKey": "pnB82bHGXC0GPBOvGPGDwvxkc",
	"consumerSecret": "ESUrwOXn8actHJtymKn5cBd5P9cu7fmTrAk5Yq4dABxWED5Dpj"
};

var requestToken = "0IEwQAAAAAAAdpyhAAABTnN2lIs";
var requestSecret = "zjFg4BJjjvIsvpFfAIr8gD8WcWFM1RfB";

var oAuthVerifier = "pUWIpG8HVg0AdmoUhbh13TrqfOD0Y5By";

return twitter.getAccessToken(requestToken, requestSecret, oAuthVerifier, credentials); 				   				   				   				   							