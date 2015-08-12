/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var channel = request.parameters["channel"];
var type = "RunScript";
var callBack = "messaging/realtime/callBackScript";

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.subscribe(channel, type, callBack);
//var result = messaging.subscribe(channel, type, callBack);
log.debug(result);

return result;   				   							