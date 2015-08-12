/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var channel = request.parameters["channel"];
var type = "PushNotification";
var callBack = "";

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.unsubscribe(channel, type, callBack);
log.debug(result);

return result;   				   							   							