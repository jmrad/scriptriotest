/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var id = request.parameters["id"];
var platform = request.parameters["platform"];

var update = request.parameters["update"];
var pushTokens = ["APA91bFdxhjB1a-9z05ZkHBbs5UOcZ2XMxjg1qUeqP-MYlEn2hL-ESZWjh1SqOaov0iL7g13lR1S-ZSxNHjaoO43ziO_0WLAS33r71xNwSnokMGmghFCOb59JtX52jF5nZwP9XPaTs3Kx-4dDmmCFW3gwgjBPr3vzV1SIaQFk9Qcz5Z76veBhHg"];
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