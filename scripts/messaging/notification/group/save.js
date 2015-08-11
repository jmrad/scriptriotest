/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var id = request.parameters["id"];
var platform = request.parameters["platform"];
var options = request.parameters["options"];

var update = request.parameters["update"];
var pushTokens = request.parameters["pushTokens"];
var lifetime = request.parameters["lifetime"];

options = {
  "update": update,
  "pushTokens": pushTokens,
  "lifetime": lifetime
}

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.notification.group.save(id, platform, options);
log.debug(result);

return result;   							