/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 var twitter = require("twitter");

var resource_url = "https://api.twitter.com/1.1/statuses/user_timeline.json";

var method = "GET";

var credentials = {
	"consumerKey": "pnB82bHGXC0GPBOvGPGDwvxkc",
	"consumerSecret": "ESUrwOXn8actHJtymKn5cBd5P9cu7fmTrAk5Yq4dABxWED5Dpj",
	"accessToken": "437388913-lVB8dddF4sdQXDm9wxyT1dBoVb5RoyjvOy0hN1Is",
	"accessTokenSecret": "9dRAr7gTY4PGVDzLIcPY1hiGi5aKbDSG5LNoGi5KR69ug"
};

var params = {
	"screen_name": "PB Affiliate1",
	"count": "10"
};

return twitter.getApiCall(resource_url, method, params, credentials);   				   							