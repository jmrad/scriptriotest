/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var id = 2147483648;

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.notification.group.delete(id);
log.debug(JSON.stringify(result));

return result;   							