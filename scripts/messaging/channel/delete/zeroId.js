/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var id = 0;

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.channel.delete(id);
log.debug(result);

return result;     				   							   				   							