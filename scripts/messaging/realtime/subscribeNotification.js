/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var channel = request.parameters["channel"];
var type = "notificationGroup";
var callBack = ["frSZbSZIdZE:APA91bGSZ25e_iVvWf9WgIwZbD99SbPexcZ0DUAiIeNz2XwyrWNHuUCT4phSJV1ZclM5WOUVNzzLM4QwNEskoAb2yDICG4-o_vdOH-lFFOcBdjU8LGagWg8kU088Ddzx0MqXg5s_mJis"];

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.subscribe(channel, type, callBack);
log.debug(JSON.stringify(result));

return result;   							