/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 var t = require("twitter")
var count = 0;

if(!storage.local.counter)
    storage.local.counter = count;
else
  count = storage.local.counter;

count++;
storage.local.counter = count;

var credentials = {
	"consumerKey": "pnB82bHGXC0GPBOvGPGDwvxkc",
	"consumerSecret": "ESUrwOXn8actHJtymKn5cBd5P9cu7fmTrAk5Yq4dABxWED5Dpj",
	"accessToken": "437388913-lVB8dddF4sdQXDm9wxyT1dBoVb5RoyjvOy0hN1Is",
	"accessTokenSecret": "9dRAr7gTY4PGVDzLIcPY1hiGi5aKbDSG5LNoGi5KR69ug"
};

return t.tweet("this is Julz' tweet #" + count + " coming from socialMedia/tweet", credentials);   				   				   				   				   				   				   				   				   				   							