/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var id = request.parameters["id"];
var platform = request.parameters["platform"];

var update = false;
var pushTokens = request.parameters["pushTokens"];
var lifetime = request.parameters["lifetime"];
var isProduction = request.parameters["isProduction"];

var options = {
  "update": update,
  "pushTokens": pushTokens,
  "lifetime": lifetime,
  "isProduction": isProduction
}

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.notification.group.save(id, platform, options);
log.debug(result);

return result;   				   				   				   							