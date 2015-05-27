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

var requestToken = "YtWWfFP8uB1yLAL4Gs1Zi0LrXcLalX3V";
var requestSecret = "nu6yaLKOHfD8FHwXAZ7lDj94OwYmfMQU";

var oAuthVerifier = "V5dBHfx6LbULa1GImGmASJWGb9EFHNJf";

return twitter.getAccessToken(requestToken, requestSecret, oAuthVerifier, credentials); 				   				   				   							