/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var id = null;

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.notification.group.delete(id);
log.debug(result);

return result;   				   							