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

return tweet("this is Julz' tweet #" + count + " coming from socialMedia/tweeting");				   							