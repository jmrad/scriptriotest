/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var id = request.parameters["id"];
var update = null;
var subscribeACL = request.parameters["subscribeACL"];
var publishACL = request.parameters["publishACL"];

var options = {
  "id": id,
  "update": update,
  "subscribeACL": subscribeACL,
  "publishACL": publishACL
}

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.channel.save(options);
log.debug(result);

return result;     				   							   				   				   							