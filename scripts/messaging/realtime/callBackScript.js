/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var message = request.rawBody;

var log = require("log");
log.setLevel("DEBUG");
log.debug(message);

return null;   							