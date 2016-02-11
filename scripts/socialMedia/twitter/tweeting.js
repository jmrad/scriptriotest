/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
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
	"accessToken": "465421014-ECXEvzzMKsth0OUPh7xToaominE7gJL9pgZq0F7Z",
	"accessTokenSecret": "5UKGifHKvY0IiZLfg7HcmADCxs5DQy5lvu5aHCbAS0kVN"
};

return tweet("this is Julz' tweet #" + count + " coming from socialMedia/tweeting", credentials);   				   							