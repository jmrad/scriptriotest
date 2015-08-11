/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var id = request.parameters["id"];
var update = request.parameters["update"];
var subscribeACL = request.parameters["subscribeACL"];
var publishACL = request.parameters["publishACL"];

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.channel.save(id, update, subscribeACL, publishACL);
log.debug(result);

return result;     				   							