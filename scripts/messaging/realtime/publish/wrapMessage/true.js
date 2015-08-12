/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var channel = request.parameters["channel"];
var message = request.parameters["message"];
var wrapMessage = true;

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.publish(channel, message, wrapMessage);
log.debug(result);

return result;   				   							